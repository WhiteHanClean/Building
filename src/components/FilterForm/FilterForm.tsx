import React from "react";
import Image from "next/image";
import s from "./FilterForm.module.scss";
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
    .matches(/^[1-9][0-9]*$/, "Поле должно содержать только цифры")
    .required("Поле обязательно для заполнения"),
  pricMax: Yup.string()
    .matches(/^[1-9][0-9]*$/, "Поле должно содержать только цифры")
    .required("Поле обязательно для заполнения"),
  areaMin: Yup.string()
    .matches(/^[1-9][0-9]*$/, "Поле должно содержать только цифры")
    .required("Поле обязательно для заполнения"),
  areaMax: Yup.string()
    .matches(/^[1-9][0-9]*$/, "Поле должно содержать только цифры")
    .required("Поле обязательно для заполнения"),
});

const FilterForm = () => {
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
      <div className="">
        <h2 className={s.filter_title}>Аренда недвижимости</h2>
        <div className={s.filter_wrapper}>
          <h3>Фильтрация</h3>
          <form onSubmit={formik.handleSubmit} className="contactsForm__form">
            <div className={s.form_wrapper}>
              <div className={s.form_wrapper_grup}>
                <div className={s.form_wrapper_item}>
                  <label htmlFor="RealEstate" className={s.form_label}>
                    Недвижимость
                  </label>
                  <div className="">
                    <select
                      id="RealEstate"
                      name="RealEstate"
                      className=""
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.RealEstate}
                    >
                      <option value="" disabled className="">
                        Выбрать
                      </option>
                      <option value="Вилла">Вилла</option>
                      <option value="Квартира">Квартира</option>
                      <option value="AllOptions">Показать все варианты</option>
                    </select>
                  </div>
                  {formik.touched.RealEstate && formik.errors.RealEstate ? (
                    <div className="">{formik.errors.RealEstate}</div>
                  ) : null}
                </div>

                <div className={s.form_wrapper_item}>
                  <label htmlFor="district" className={s.form_label}>
                    Район
                  </label>
                  <div className="">
                    <select
                      id="district"
                      name="district"
                      className=""
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.district}
                    >
                      <option value="" disabled className="">
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
                    <div className="">{formik.errors.district}</div>
                  ) : null}
                </div>

                <div className={s.form_wrapper_item}>
                  <label htmlFor="rooms" className={s.form_label}>
                    Дополнительные характеристики
                  </label>
                  <div className="">
                    <select
                      id="rooms"
                      name="rooms"
                      className=""
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
                    <div className="">{formik.errors.rooms}</div>
                  ) : null}
                </div>
              </div>

              <div className={s.form_wrapper_grupBottom}>
                <div className={s.form_wrapper_item}>
                  <label className={s.form_label} htmlFor="pricMin">
                    Цена
                  </label>
                  <div>
                    <input
                      className={s.form_input}
                      placeholder="min"
                      type="text"
                      id="pricMin"
                      name="pricMin"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.pricMin}
                    />
                    <input
                      className={`${s.form_input} ${s.form_inputSecond}`}
                      placeholder="max"
                      type="text"
                      id="pricMax"
                      name="pricMax"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.pricMax}
                    />
                  </div>
                </div>
                <div className={s.form_wrapper_item}>
                  <label className={s.form_label} htmlFor="areaMin">
                    Общая площадь
                  </label>
                  <div>
                    <input
                      className={s.form_input}
                      placeholder="от"
                      type="text"
                      id="areaMin"
                      name="areaMin"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.areaMin}
                    />
                    <input
                      className={`${s.form_input} ${s.form_inputSecond}`}
                      placeholder="от"
                      type="text"
                      id="areaMax"
                      name="areaMax"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.areaMax}
                    />
                  </div>
                </div>
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
        </div>
      </div>
    </section>
  );
};

export default FilterForm;
