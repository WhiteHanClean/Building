import React, { useEffect, useState } from "react";
import m from "./FilterBurger.module.scss";
import s from "../FilterForm.module.scss";
import { Drawer } from "antd";
import Image from "next/image";
import { CloseOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FilterParams,
  LocationResponse,
  setFormMain,
  useGetLocationQuery,
} from "@/redux/api";
import { useDispatch, useSelector } from "react-redux";
import { MainFormParams } from "@/redux/store";

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

const FilterBurger = ({ titleSection, setFilterParams }: Props) => {
  const [locationsData, setLocationsData] = useState<LocationResponse>([]);
  const { data, error, isLoading } = useGetLocationQuery();
  const [open, setOpen] = useState<boolean>(false);

  const dispatch = useDispatch();
  const infoFormMain = useSelector(
    (state: { mainForm: { mainForm: MainFormParams } }) =>
      state.mainForm.mainForm
  ) as MainFormParams;

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

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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
      resetForm();
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

  const customCloseButton = (
    <div className={m.extra_wrapper}>
      <h2 className={s.filter_title}>{titleSection}</h2>
      <div className={m.burger_wrapperClose_block}>
        <h3 className={s.burgerTitle}>Фильтры</h3>
        <div className={m.filter_wrapperBurger} onClick={onClose}>
          <CloseOutlined />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className={s.burgerFilter}>
        <h3 className={s.burgerTitle}>Фильтры</h3>
        <div className={s.burger_button_wrapper} onClick={showDrawer}>
          <Image
            src={"/FilterBurgerIcon.svg"}
            width={12}
            height={12}
            alt="logo"
          ></Image>
        </div>
      </div>
      <Drawer
        height={550}
        headerStyle={{
          padding: "20px 0px 20px 0px",
          borderBottom: "none",
        }}
        placement="top"
        onClose={onClose}
        className={m.filter_drawer}
        open={open}
        closeIcon={customCloseButton}
      >
        <form onSubmit={formik.handleSubmit} className="">
          <div className={s.form_wrapper}>
            <div className={s.form_wrapper_item}>
              <label htmlFor="RealEstate" className={s.form_label}>
                Недвижимость
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
                  <option value="" disabled className={s.form_option_start}>
                    Выбрать
                  </option>
                  <option value="Вилла">Вилла</option>
                  <option value="Квартира">Квартира</option>
                  <option value="AllOptions">Показать все варианты</option>
                </select>
              </div>
              {formik.touched.RealEstate && formik.errors.RealEstate ? (
                <div className={s.form_error}>{formik.errors.RealEstate}</div>
              ) : null}
            </div>

            <div className={s.form_wrapper_item}>
              <label htmlFor="location" className={s.form_label}>
                Район
              </label>
              <div className="">
                <select
                  id="location"
                  name="location"
                  className={s.form_select}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.location}
                >
                  <option value="" disabled className="">
                    Выбрать
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
                Количество комнат
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
                    Выбрать
                  </option>
                  <option value="Студия">Студия</option>
                  <option value="1 спальня">1 спальня</option>
                  <option value="2 спальня">2 спальня</option>
                  <option value="3 спальня">3 спальня</option>
                  <option value="4 спальня">4 спальня</option>
                  <option value="5 спальня">5 спальня</option>
                  <option value="AllOptions">Показать все варианты</option>
                </select>
              </div>
              {formik.touched.rooms && formik.errors.rooms ? (
                <div className={s.form_error}>{formik.errors.rooms}</div>
              ) : null}
            </div>

            <div className={s.form_wrapper_item}>
              <label htmlFor="characteristics" className={s.form_label}>
                Дополнительные характеристики
              </label>
              <div className="">
                <select
                  id="characteristics"
                  name="characteristics"
                  className={s.form_select}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.rooms}
                >
                  <option value="" disabled className="">
                    Выбрать
                  </option>
                  <option value="Характеристики 1">Характеристики 1</option>
                  <option value="Характеристики 2">Характеристики 2</option>
                  <option value="Характеристики 3">Характеристики 3</option>
                  <option value="Характеристики 4">Характеристики 4</option>
                  <option value="Характеристики 5">Характеристики 5</option>
                </select>
              </div>
              {formik.touched.rooms && formik.errors.rooms ? (
                <div className={s.form_error}>{formik.errors.rooms}</div>
              ) : null}
            </div>

            <div className={s.form_wrapper_item}>
              <label className={s.form_label} htmlFor="pricMin">
                Цена
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
                <div className={`${s.form_inputWrapper} ${s.form_inputSecond}`}>
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
                Площадь участка
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
                <div className={`${s.form_inputWrapper} ${s.form_inputSecond}`}>
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

            <div
              className={`${s.form_wrapper_item} ${s.form_wrapper_itemArea}`}
            >
              <label className={s.form_label} htmlFor="areaHouseMin">
                Площадь застройки
              </label>
              <div className={s.form_inputsWrapper}>
                <div className={s.form_inputWrapper}>
                  <span className={s.form_prefix}>от</span>
                  <input
                    className={`${s.form_input} ${s.form_inputArea} `}
                    type="text"
                    id="areaHouseMin"
                    name="areaHouseMin"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.areaHouseMin}
                  />
                  <span className={s.form_suffix}>m2</span>
                </div>
                <div className={`${s.form_inputWrapper} ${s.form_inputSecond}`}>
                  <span className={s.form_prefix}>до</span>
                  <input
                    className={`${s.form_input} ${s.form_inputArea} `}
                    type="text"
                    id="areaHouseMax"
                    name="areaHouseMax"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.areaHouseMax}
                  />
                  <span className={s.form_suffix}>m2</span>
                </div>
              </div>
              {formik.touched.areaHouseMax && formik.errors.areaHouseMax ? (
                <div className={s.form_error}>{formik.errors.areaHouseMax}</div>
              ) : null}
              {formik.touched.areaHouseMin && formik.errors.areaHouseMin ? (
                <div className={s.form_error}>{formik.errors.areaHouseMin}</div>
              ) : null}
            </div>

            <div className={s.form_wrapper_button}>
              <button type="submit" className={s.form_button}>
                Поиск
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
                Сбросить поиск
              </button>
            </div>
          </div>
        </form>
      </Drawer>
    </>
  );
};

export default FilterBurger;
