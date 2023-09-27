import React, { useState } from "react";
import { useFormik } from "formik";
import s from "./SearchBar.module.scss";
import CustomSelect from "@/shared/ui/Select/Select";

const SearchBar = () => {

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
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
      formik.values.RealEstate = "";
    },
  });

  return (
    <section className={s.filter_section}>
      <div className={s.filter_wrapper}>
        <form onSubmit={formik.handleSubmit} className="">
          <div className={s.form_wrapper}>
            <div className={s.form_wrapper_item}>
              <label htmlFor="RealEstate" className={s.form_label}>
                Недвижимость
              </label>
              <div className="">
                <CustomSelect
                  options={["Вилла", "Квартира", "Показать все варианты"]}
                  defaultValue="Выбрать"
                  onChange={(value) =>
                    formik.setFieldValue("RealEstate", value)
                  }
                  onBlur={formik.handleBlur}
                  value={formik.values.RealEstate}
                />
              </div>
              {formik.touched.RealEstate && formik.errors.RealEstate ? (
                <div className="">{formik.errors.RealEstate}</div>
              ) : null}
            </div>

            <div className={s.form_wrapper_item}>
              <label htmlFor="district" className={s.form_label}>
                Район
              </label>
              <CustomSelect
                options={[
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
                ]}
                defaultValue="Выбрать"
                onChange={(value) => formik.setFieldValue("district", value)}
                onBlur={formik.handleBlur}
                value={formik.values.district}
              />
              {formik.touched.district && formik.errors.district ? (
                <div className="">{formik.errors.district}</div>
              ) : null}
            </div>

            <div className={s.form_wrapper_item}>
              <label htmlFor="rooms" className={s.form_label}>
                Количество комнат
              </label>
              <CustomSelect
                options={[
                  "Студия",
                  "1 спальня",
                  "2 спальни",
                  "3 спальни",
                  "4 спальни",
                  "5 спален",
                  "Показать все варианты",
                ]}
                defaultValue="Выбрать"
                onChange={(value) => formik.setFieldValue("rooms", value)}
                onBlur={formik.handleBlur}
                value={formik.values.rooms}
              />
              {formik.touched.rooms && formik.errors.rooms ? (
                <div className="">{formik.errors.rooms}</div>
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
            <div className={s.form_wrapper_button}>
              <button type="submit" className={s.form_button}>
                Поиск
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
