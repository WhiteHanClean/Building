import Image from "next/image";
import s from "./FilterForm.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
import {
  FilterParams,
  LocationResponse,
  setFormMain,
  useGetLocationQuery,
} from "@/redux/api";
import { useSelector, useDispatch } from "react-redux";
import { MainFormParams } from "@/redux/store";
import { useEffect, useState } from "react";

const validationSchema = Yup.object({
  RealEstate: Yup.string().oneOf(
    ["Villa", "Apartment", "AllOptions"],
    "Выберите тип недвижимости"
  ),
  location: Yup.string(),
  rooms: Yup.string().oneOf(
    ["Studio", "1", "2", "3", "4", "5", "AllOptions"],
    "Выберите пожалуйста кол-во комнат"
  ),
  characteristics: Yup.string().oneOf(
    [
      "Характеристики 1",
      "Характеристики 2",
      "Характеристики 3",
      "Характеристики 4",
      "Характеристики 5",
    ],
    "Выберите Характеристики"
  ),
  // pricMin: Yup.string()
  //   .matches(/^[1-9][0-9]*$/, "Только цифры")
  //   .max(15, "Не более 15 символов"),
  // pricMax: Yup.string()
  //   .matches(/^[1-9][0-9]*$/, "Только цифры")
  //   .max(15, "Не более 15 символов"),
  pricMin: Yup.string()
    .matches(/^\s*(\d+(\s+\d+)*)?\s*$/, "Только цифры")
    .max(15, "Не более 15 символов"),
  pricMax: Yup.string()
    .matches(/^\s*(\d+(\s+\d+)*)?\s*$/, "Только цифры")
    .max(15, "Не более 15 символов"),
  areaMin: Yup.string()
    .matches(/^[1-9][0-9]*$/, "Только цифры")
    .max(15, "Не более 15 символов"),
  areaMax: Yup.string()
    .matches(/^[1-9][0-9]*$/, "Только цифры")
    .max(15, "Не более 15 символов"),
  areaHouseMin: Yup.string()
    .matches(/^[1-9][0-9]*$/, "Только цифры")
    .max(15, "Не более 15 символов"),
  areaHouseMax: Yup.string()
    .matches(/^[1-9][0-9]*$/, "Только цифры")
    .max(15, "Не более 15 символов"),
});

interface Props {
  titleSection: string;
  setFilterParams: (params: FilterParams) => void;
}

const FilterBurger = dynamic(() => import("./FilterBurger/FilterBurger"), {
  ssr: false,
});

const FilterForm = ({ titleSection, setFilterParams }: Props) => {
  const [locationsData, setLocationsData] = useState<LocationResponse>([]);
  const { data, error, isLoading } = useGetLocationQuery();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const infoFormMain = useSelector(
    (state: { mainForm: { mainForm: MainFormParams } }) =>
      state.mainForm.mainForm
  ) as MainFormParams;

  console.log(infoFormMain);

  useEffect(() => {
    if (data) {
      setLocationsData(data);
    }
  }, [data]);

  //// Запрос при не пустом infoFormMain
  useEffect(() => {
    const shouldSubmitAutomatically = Object.values(infoFormMain).some(
      (value) => value !== ""
    );

    if (shouldSubmitAutomatically) {
      formik.handleSubmit();
    }
  }, []);

  ////сброс по кнопки "Сбросить поиск"
  useEffect(() => {
    const shouldSubmitAutomatically = Object.values(infoFormMain).some(
      (value) => value !== ""
    );

    if (shouldSubmitAutomatically) {
      formik.handleSubmit();
    }

    formik.setValues({
      RealEstate: infoFormMain.RealEstate,
      location: infoFormMain.location,
      rooms: infoFormMain.rooms,
      characteristics: "",
      pricMin: infoFormMain.pricMin,
      pricMax: infoFormMain.pricMax,
      areaMin: "",
      areaMax: "",
      areaHouseMin: "",
      areaHouseMax: "",
    });
  }, [infoFormMain]);

  const formik = useFormik({
    initialValues: {
      RealEstate: infoFormMain.RealEstate,
      location: infoFormMain.location,
      rooms: infoFormMain.rooms,
      characteristics: "",
      pricMin: infoFormMain.pricMin,
      pricMax: infoFormMain.pricMax,
      areaMin: "",
      areaMax: "",
      areaHouseMin: "",
      areaHouseMax: "",
    },

    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const filterParams = {
        ...(values.RealEstate !== "" &&
          values.RealEstate !== "AllOptions" && {
            buildingType: values.RealEstate,
          }),
        ...(values.rooms !== "" &&
          values.rooms !== "AllOptions" && {
            roomsAmount: Number(values.rooms),
          }),
        ...(values.areaHouseMin !== "" && {
          builtUpArea_gte: Number(values.areaHouseMin),
        }),
        ...(values.areaHouseMax !== "" && {
          builtUpArea_lte: Number(values.areaHouseMax),
        }),
        ...(values.pricMin !== "" && { price_gte: Number(values.pricMin) }),
        ...(values.pricMax !== "" && { price_lte: Number(values.pricMax) }),
        ...(values.location !== "" &&
          values.location !== "AllOptions" && { location: values.location }),
        ...(values.areaMin !== "" && { landArea_gte: Number(values.areaMin) }),
        ...(values.areaMax !== "" && { landArea_lte: Number(values.areaMax) }),
        isFilter: true,
      };

      setFilterParams(filterParams);
    },
  });

  const handleResetForm = () => {
    formik.resetForm();
    const mainForm = {
      RealEstate: "",
      location: "",
      rooms: "",
      pricMin: "",
      pricMax: "",
    };
    dispatch(setFormMain(mainForm));
    setFilterParams({ isFilter: false });
  };

  return (
    <section className={s.filter_section}>
      <div className={s.filter_section_wrapper}>
        <div className={s.filter_wrapperBurger}>
          <h2 className={s.filter_title}>{titleSection}</h2>
          <div className={s.filter_wrapper}>
            <h3 className={s.form_title}>{t("buyingRealEstate.titleForm")}</h3>
            <form onSubmit={formik.handleSubmit} className="">
              <div className={s.form_wrapper}>
                <div className={s.form_wrapper_item}>
                  <label htmlFor="RealEstate" className={s.form_label}>
                    {t("buyingRealEstate.realEstate")}
                  </label>
                  <div className="">
                    <select
                      id="RealEstate"
                      name="RealEstate"
                      className={`${s.form_select} ${s.custom_select}`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.RealEstate}
                    >
                      <option value="" disabled className="">
                        {t("buyingRealEstate.select")}
                      </option>
                      <option value="Villa">{t("main.searchBar.villa")}</option>
                      <option value="Apartment">
                        {t("main.searchBar.apartment")}
                      </option>
                      <option value="AllOptions">
                        {t("main.searchBar.showAllOptions")}
                      </option>
                    </select>
                  </div>
                  {formik.touched.RealEstate && formik.errors.RealEstate ? (
                    <div className={s.form_error}>
                      {formik.errors.RealEstate}
                    </div>
                  ) : null}
                </div>

                <div className={s.form_wrapper_item}>
                  <label htmlFor="location" className={s.form_label}>
                    {t("main.searchBar.district")}
                  </label>
                  <div className="">
                    <select
                      id="location"
                      name="location"
                      className={`${s.form_select} ${s.custom_select}`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.location}
                    >
                      <option value="" disabled className="">
                        {t("buyingRealEstate.select")}
                      </option>
                      {locationsData.map((location) => (
                        <option key={location._id} value={location._id}>
                          {location.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  {formik.touched.location && formik.errors.location ? (
                    <div className={s.form_error}>{formik.errors.location}</div>
                  ) : null}
                </div>

                <div className={s.form_wrapper_item}>
                  <label htmlFor="rooms" className={s.form_label}>
                    {t("buyingRealEstate.additionalFeatures")}
                  </label>
                  <div className="">
                    <select
                      id="rooms"
                      name="rooms"
                      className={`${s.form_select} ${s.custom_select}`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.rooms}
                    >
                      <option value="" disabled className="">
                        {t("buyingRealEstate.select")}
                      </option>
                      <option value="Studio">
                        {t("main.searchBar.roomVariant.studio")}
                      </option>
                      <option value="1">
                        {t("main.searchBar.roomVariant.bedroom1")}
                      </option>
                      <option value="2">
                        {t("main.searchBar.roomVariant.bedroom2")}
                      </option>
                      <option value="3">
                        {t("main.searchBar.roomVariant.bedroom3")}
                      </option>
                      <option value="4">
                        {t("main.searchBar.roomVariant.bedroom4")}
                      </option>
                      <option value="5">
                        {t("main.searchBar.roomVariant.bedroom5")}
                      </option>
                      <option value="AllOptions">
                        {t("main.searchBar.roomVariant.allOptions")}
                      </option>
                    </select>
                  </div>
                  {formik.touched.rooms && formik.errors.rooms ? (
                    <div className={s.form_error}>{formik.errors.rooms}</div>
                  ) : null}
                </div>

                <div className={s.form_wrapper_item}>
                  <label htmlFor="characteristics" className={s.form_label}>
                    {t("main.searchBar.dops")}
                  </label>
                  <div className="">
                    <select
                      id="characteristics"
                      name="characteristics"
                      className={`${s.form_select} ${s.custom_select}`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.characteristics}
                    >
                      <option value="" disabled className="">
                        {t("buyingRealEstate.select")}
                      </option>
                      <option value="Характеристики 1">
                        {t("main.searchBar.charVariants.char1")}
                      </option>
                      <option value="Характеристики 2">
                        {t("main.searchBar.charVariants.char2")}
                      </option>
                      <option value="Характеристики 3">
                        {t("main.searchBar.charVariants.char3")}
                      </option>
                      <option value="Характеристики 4">
                        {t("main.searchBar.charVariants.char4")}
                      </option>
                      <option value="Характеристики 5">
                        {t("main.searchBar.charVariants.char5")}
                      </option>
                    </select>
                  </div>
                  {formik.touched.characteristics &&
                  formik.errors.characteristics ? (
                    <div className={s.form_error}>
                      {formik.errors.characteristics}
                    </div>
                  ) : null}
                </div>

                <div className={s.form_wrapper_item}>
                  <label className={s.form_label} htmlFor="pricMin">
                    {t("main.searchBar.price")}
                  </label>
                  <div className={s.form_inputsWrapper}>
                    <div className={s.form_inputWrapper}>
                      <span className={s.form_prefix}>min</span>
                      <input
                        className={s.form_input}
                        type="text"
                        id="pricMin"
                        name="pricMin"
                        onChange={(e) => {
                          formik.handleChange(e);
                          const inputValue = e.target.value;
                          if (inputValue.trim() !== "") {
                            const numericValue = parseInt(
                              inputValue.replace(/\s+/g, ""),
                              10
                            );
                            if (!isNaN(numericValue)) {
                              formik.setFieldValue("pricMin", numericValue);
                            }
                          }
                        }}
                        onBlur={formik.handleBlur}
                        value={formik.values.pricMin.toLocaleString()}
                      />
                    </div>
                    <div
                      className={`${s.form_inputWrapper} ${s.form_inputSecond}`}
                    >
                      <span className={s.form_prefix}>max</span>
                      <input
                        className={s.form_input}
                        type="text"
                        id="pricMax"
                        name="pricMax"
                        onChange={(e) => {
                          formik.handleChange(e);
                          const inputValue = e.target.value;
                          if (inputValue.trim() !== "") {
                            const numericValue = parseInt(
                              inputValue.replace(/\s+/g, ""),
                              10
                            );
                            if (!isNaN(numericValue)) {
                              formik.setFieldValue("pricMax", numericValue);
                            }
                          }
                        }}
                        onBlur={formik.handleBlur}
                        value={formik.values.pricMax.toLocaleString()}
                      />
                    </div>
                  </div>
                  {formik.touched.pricMin && formik.errors.pricMin ? (
                    <div className={s.form_error}>{formik.errors.pricMin}</div>
                  ) : null}
                  {formik.touched.pricMax && formik.errors.pricMax ? (
                    <div className={s.form_error}>{formik.errors.pricMax}</div>
                  ) : null}
                </div>

                <div
                  className={`${s.form_wrapper_item} ${s.form_wrapper_itemArea}`}
                >
                  <label className={s.form_label} htmlFor="areaMin">
                    {t("buyingRealEstate.totalArea")}
                  </label>
                  <div className={s.form_inputsWrapper}>
                    <div className={s.form_inputWrapper}>
                      <span className={s.form_prefix}>
                        {t("main.searchBar.from")}
                      </span>
                      <input
                        className={`${s.form_input} ${s.form_inputArea} `}
                        type="text"
                        id="areaMin"
                        name="areaMin"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.areaMin}
                      />
                      <span className={s.form_suffix}>m²</span>
                    </div>
                    <div
                      className={`${s.form_inputWrapper} ${s.form_inputSecond}`}
                    >
                      <span className={s.form_prefix}>
                        {t("main.searchBar.to")}
                      </span>
                      <input
                        className={`${s.form_input} ${s.form_inputAreaDO} `}
                        type="text"
                        id="areaMax"
                        name="areaMax"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.areaMax}
                      />
                      <span className={s.form_suffix}>m²</span>
                    </div>
                  </div>
                  {formik.touched.areaMax && formik.errors.areaMax ? (
                    <div className={s.form_error}>{formik.errors.areaMax}</div>
                  ) : null}
                  {formik.touched.areaMin && formik.errors.areaMin ? (
                    <div className={s.form_error}>{formik.errors.areaMin}</div>
                  ) : null}
                </div>

                <div
                  className={`${s.form_wrapper_item} ${s.form_wrapper_itemArea}`}
                >
                  <label className={s.form_label} htmlFor="areaHouseMin">
                    {t("main.searchBar.squere")}
                  </label>
                  <div className={s.form_inputsWrapper}>
                    <div className={s.form_inputWrapper}>
                      <span className={s.form_prefix}>
                        {t("main.searchBar.from")}
                      </span>
                      <input
                        className={`${s.form_input} ${s.form_inputArea} `}
                        type="text"
                        id="areaHouseMin"
                        name="areaHouseMin"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.areaHouseMin}
                      />
                      <span className={s.form_suffix}>m²</span>
                    </div>
                    <div
                      className={`${s.form_inputWrapper} ${s.form_inputSecond}`}
                    >
                      <span className={s.form_prefix}>
                        {t("main.searchBar.to")}
                      </span>
                      <input
                        className={`${s.form_input} ${s.form_inputAreaDO} `}
                        type="text"
                        id="areaHouseMax"
                        name="areaHouseMax"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.areaHouseMax}
                      />
                      <span className={s.form_suffix}>m²</span>
                    </div>
                  </div>
                  {formik.touched.areaHouseMax && formik.errors.areaHouseMax ? (
                    <div className={s.form_error}>
                      {formik.errors.areaHouseMax}
                    </div>
                  ) : null}
                  {formik.touched.areaHouseMin && formik.errors.areaHouseMin ? (
                    <div className={s.form_error}>
                      {formik.errors.areaHouseMin}
                    </div>
                  ) : null}
                </div>

                <div className={s.form_wrapper_twoButton}>
                  <div className={s.form_wrapper_button}>
                    <button type="submit" className={s.form_button}>
                      {t("main.searchBar.search")}
                      <Image
                        src={"/Arrow-upFilter.svg"}
                        width={17}
                        height={16}
                        alt="arrow"
                      ></Image>
                    </button>
                  </div>

                  <div className={s.form_wrapper_button_reset}>
                    <button
                      type="button"
                      className={s.form_button_reset}
                      onClick={handleResetForm}
                    >
                      {t("main.searchBar.reset")}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div>
            <FilterBurger
              titleSection={titleSection}
              setFilterParams={setFilterParams}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterForm;
