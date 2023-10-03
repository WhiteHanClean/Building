import React, { useState } from "react";
import m from "./FilterBurger.module.scss";
import s from "../FilterForm.module.scss";
import { Drawer } from "antd";
import Image from "next/image";
import { CloseOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import * as Yup from "yup";

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

const FilterBurger = ({ titleSection }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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
          padding: "20px 15px 0 15px",
          borderBottom: "none",
        }}
        placement="top"
        onClose={onClose}
        className={m.filter_drawer}
        open={open}
        closeIcon={customCloseButton}
      >
        <form onSubmit={formik.handleSubmit}>
          <div className={s.form_wrapper}>
            <div className={s.form_wrapper_item}>
              <label htmlFor="RealEstate" className={s.form_label}>
                Недвижимость
              </label>
              <div>
                <select
                  id="RealEstate"
                  name="RealEstate"
                  className={s.form_select}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.RealEstate}
                >
                  <option value="" disabled>
                    Выбрать
                  </option>
                  <option value="Вилла">Вилла</option>
                  <option value="Квартира">Квартира</option>
                  <option value="AllOptions">Показать все варианты</option>
                </select>
              </div>
              {formik.touched.RealEstate && formik.errors.RealEstate ? (
                <div>{formik.errors.RealEstate}</div>
              ) : null}
            </div>

            <div className={s.form_wrapper_item}>
              <label htmlFor="district" className={s.form_label}>
                Район
              </label>
              <div>
                <select
                  id="district"
                  name="district"
                  className={s.form_select}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.district}
                >
                  <option value="" disabled>
                    Выбрать
                  </option>
                  <option value="Ао По">Ао По</option>
                  <option value="Банг Тао">Банг Тао</option>
                  <option value="Калим">Калим</option>
                  <option value="Камала">Камала</option>
                  <option value="Карон">Карон</option>
                  <option value="Ката">Ката</option>
                  <option value="Кату">Кату</option>
                  <option value="Лагуна Пхукет">Лагуна Пхукет</option>
                  <option value="Лаян">Лаян</option>
                  <option value="Май Кхао">Май Кхао</option>
                  <option value="Най Тон">Най Тон</option>
                  <option value="Най Харн">Най Харн</option>
                  <option value="Най Янг">Най Янг</option>
                  <option value="Натай">Натай</option>
                  <option value="Патонг">Патонг</option>
                  <option value="Раваи">Раваи</option>
                  <option value="Сурин">Сурин</option>
                  <option value="Таланг">Таланг</option>
                  <option value="Центральный район Пхукета">
                    Центральный район Пхукета
                  </option>
                  <option value="Чалонг">Чалонг</option>
                  <option value="AllOptions">Показать все варианты</option>
                </select>
              </div>
              {formik.touched.district && formik.errors.district ? (
                <div>{formik.errors.district}</div>
              ) : null}
            </div>

            <div className={s.form_wrapper_item}>
              <label htmlFor="rooms" className={s.form_label}>
                Дополнительные характеристики
              </label>
              <div>
                <select
                  id="rooms"
                  name="rooms"
                  className={s.form_select}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.rooms}
                >
                  <option value="" disabled>
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
                <div>{formik.errors.rooms}</div>
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
                Общая площадь
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
          </div>
        </form>
      </Drawer>
    </>
  );
};

export default FilterBurger;
