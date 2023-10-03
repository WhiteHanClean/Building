import React from "react";
import Image from "next/image";
import s from "./FilterForm.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";

const validationSchema = Yup.object({
  RealEstate: Yup.string()
    .oneOf(
      ["Вилла", "Квартира", "AllOptions"],
      "Выберите пожалуйста тип недвижимости"
    )
    .required("Выберите пожалуйста тип недвижимости"),
  district: Yup.string()
    .oneOf(
      [
        "Ао По",
        "Банг Тао",
        "Калим",
        "Камала",
        "Карон",
        "Ката",
        "Кату",
        "Лагуна Пхукет",
        "Лаян",
        "Май Кхао",
        "Най Тон",
        "Най Харн",
        "Най Янг",
        "Натай",
        "Патонг",
        "Раваи",
        "Сурин",
        "Таланг",
        "Центральный район Пхукета",
        "Чалонг",
        "AllOptions",
      ],
      "Выберите пожалуйста район"
    )
    .required("Выберите пожалуйста район"),
  rooms: Yup.string()
    .oneOf(
      [
        "Студия",
        "1 спальня",
        "2 спальня",
        "3 спальня",
        "4 спальня",
        "5 спальня",
        "AllOptions",
      ],
      "Выберите пожалуйста кол-во комнат"
    )
    .required("Выберите пожалуйста кол-во комнат"),
  pricMin: Yup.string()
    .matches(/^[1-9][0-9]*$/, "Только цифры")
    .max(15, "Не более 15 символов"),
  pricMax: Yup.string()
    .matches(/^[1-9][0-9]*$/, "Только цифры")
    .max(15, "Не более 15 символов"),
  areaMin: Yup.string()
    .matches(/^[1-9][0-9]*$/, "Только цифры")
    .max(15, "Не более 15 символов"),
  areaMax: Yup.string()
    .matches(/^[1-9][0-9]*$/, "Только цифры")
    .max(15, "Не более 15 символов"),
});

interface Props {
  titleSection: string;
}

const FilterBurger = dynamic(() => import("./FilterBurger/FilterBurger"), {
  ssr: false,
});

const FilterForm = ({ titleSection }: Props) => {
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: {
      RealEstate: "",
      district: "",
      rooms: "",
      pricMin: "",
      pricMax: "",
      areaMin: "",
      areaMax: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

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
                      className={s.form_select}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.RealEstate}
                    >
                      <option value="" disabled className="">
                        {t("buyingRealEstate.select")}
                      </option>
                      <option value="Вилла">{t("main.searchBar.villa")}</option>
                      <option value="Квартира">
                        {t("main.searchBar.apartment")}
                      </option>
                      <option value="AllOptions">
                        {t("main.searchBar.showAllOptions")}
                      </option>
                    </select>
                  </div>
                  {formik.touched.RealEstate && formik.errors.RealEstate ? (
                    <div className="">{formik.errors.RealEstate}</div>
                  ) : null}
                </div>

                <div className={s.form_wrapper_item}>
                  <label htmlFor="district" className={s.form_label}>
                    {t("main.searchBar.district")}
                  </label>
                  <div className="">
                    <select
                      id="district"
                      name="district"
                      className={s.form_select}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.district}
                    >
                      <option value="" disabled className="">
                        {t("buyingRealEstate.select")}
                      </option>
                      <option value="Ао По">
                        {t("main.searchBar.districtVariant.aoPo")}
                      </option>
                      <option value="Банг Тао">
                        {t("main.searchBar.districtVariant.bangTao")}
                      </option>
                      <option value="Калим">
                        {t("main.searchBar.districtVariant.kalim")}
                      </option>
                      <option value="Камала">
                        {t("main.searchBar.districtVariant.kamala")}
                      </option>
                      <option value="Карон">
                        {t("main.searchBar.districtVariant.karon")}
                      </option>
                      <option value="Ката">
                        {t("main.searchBar.districtVariant.kata")}
                      </option>
                      <option value="Кату">
                        {" "}
                        {t("main.searchBar.districtVariant.katu")}
                      </option>
                      <option value="Лагуна Пхукет">
                        {t("main.searchBar.districtVariant.lagunaPhuket")}
                      </option>
                      <option value="Лаян">
                        {t("main.searchBar.districtVariant.layan")}
                      </option>
                      <option value="Май Кхао">
                        {t("main.searchBar.districtVariant.maiKhao")}
                      </option>
                      <option value="Най Тон">
                        {t("main.searchBar.districtVariant.naiThon")}
                      </option>
                      <option value="Най Харн">
                        {t("main.searchBar.districtVariant.naiHarn")}
                      </option>
                      <option value="Най Янг">
                        {t("main.searchBar.districtVariant.naiYang")}
                      </option>
                      <option value="Натай">
                        {t("main.searchBar.districtVariant.natai")}
                      </option>
                      <option value="Патонг">
                        {t("main.searchBar.districtVariant.patong")}
                      </option>
                      <option value="Раваи">
                        {t("main.searchBar.districtVariant.rawai")}
                      </option>
                      <option value="Сурин">
                        {t("main.searchBar.districtVariant.surin")}
                      </option>
                      <option value="Таланг">
                        {t("main.searchBar.districtVariant.talang")}
                      </option>
                      <option value="Центральный район Пхукета">
                        {t("main.searchBar.districtVariant.centralPhuket")}
                      </option>
                      <option value="Чалонг">
                        {t("main.searchBar.districtVariant.chalong")}
                      </option>
                      <option value="AllOptions">
                        {t("main.searchBar.districtVariant.allOptions")}
                      </option>
                    </select>
                  </div>
                  {formik.touched.district && formik.errors.district ? (
                    <div className="">{formik.errors.district}</div>
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
                      className={s.form_select}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.rooms}
                    >
                      <option value="" disabled className="">
                        {t("buyingRealEstate.select")}
                      </option>
                      <option value="Студия">
                        {t("main.searchBar.roomVariant.studio")}
                      </option>
                      <option value="1 спальня">
                        {t("main.searchBar.roomVariant.bedroom1")}
                      </option>
                      <option value="2 спальня">
                        {t("main.searchBar.roomVariant.bedroom2")}
                      </option>
                      <option value="3 спальня">
                        {t("main.searchBar.roomVariant.bedroom3")}
                      </option>
                      <option value="4 спальня">
                        {t("main.searchBar.roomVariant.bedroom4")}
                      </option>
                      <option value="5 спальня">
                        {t("main.searchBar.roomVariant.bedroom5")}
                      </option>
                      <option value="AllOptions">
                        {t("main.searchBar.roomVariant.allOptions")}
                      </option>
                    </select>
                  </div>
                  {formik.touched.rooms && formik.errors.rooms ? (
                    <div className="">{formik.errors.rooms}</div>
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
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.pricMin}
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
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.pricMax}
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
                      <span className={s.form_prefix}>от</span>
                      <input
                        className={`${s.form_input} ${s.form_inputArea} `}
                        type="text"
                        id="areaMin"
                        name="areaMin"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.areaMin}
                      />
                      <span className={s.form_suffix}>m2</span>
                    </div>
                    <div
                      className={`${s.form_inputWrapper} ${s.form_inputSecond}`}
                    >
                      <span className={s.form_prefix}>до</span>
                      <input
                        className={`${s.form_input} ${s.form_inputArea} `}
                        type="text"
                        id="areaMax"
                        name="areaMax"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.areaMax}
                      />
                      <span className={s.form_suffix}>m2</span>
                    </div>
                  </div>
                  {formik.touched.areaMax && formik.errors.areaMax ? (
                    <div className={s.form_error}>{formik.errors.areaMax}</div>
                  ) : null}
                  {formik.touched.areaMin && formik.errors.areaMin ? (
                    <div className={s.form_error}>{formik.errors.areaMin}</div>
                  ) : null}
                </div>
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
              </div>
            </form>
          </div>
          <div>
            <FilterBurger titleSection={titleSection} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterForm;
