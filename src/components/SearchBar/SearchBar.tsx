import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import s from "./SearchBar.module.scss";
import CustomSelect from "@/shared/ui/Select/Select";
import { i18n } from "i18next";

interface SearchBarProps {
  t: i18n["t"];
  i18n: i18n;
}

const SearchBar: React.FC<SearchBarProps> = ({ t, i18n }) => {
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
                {t("main.searchBar.realty")}
              </label>
              <div className="">
                <CustomSelect
                  options={[
                    t("main.searchBar.villa"),
                    t("main.searchBar.apartment"),
                    t("main.searchBar.showAllOptions"),
                  ]}
                  defaultValue={t("main.searchBar.select")}
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
                {t("main.searchBar.district")}
              </label>
              <CustomSelect
                options={[
                  t("main.searchBar.districtVariant.aoPo"),
                  t("main.searchBar.districtVariant.bangTao"),
                  t("main.searchBar.districtVariant.kalim"),
                  t("main.searchBar.districtVariant.kamala"),
                  t("main.searchBar.districtVariant.karon"),
                  t("main.searchBar.districtVariant.kata"),
                  t("main.searchBar.districtVariant.katu"),
                  t("main.searchBar.districtVariant.lagunaPhuket"),
                  t("main.searchBar.districtVariant.layan"),
                  t("main.searchBar.districtVariant.maiKhao"),
                  t("main.searchBar.districtVariant.naiThon"),
                  t("main.searchBar.districtVariant.naiHarn"),
                  t("main.searchBar.districtVariant.naiYang"),
                  t("main.searchBar.districtVariant.natai"),
                  t("main.searchBar.districtVariant.patong"),
                  t("main.searchBar.districtVariant.rawai"),
                  t("main.searchBar.districtVariant.surin"),
                  t("main.searchBar.districtVariant.talang"),
                  t("main.searchBar.districtVariant.centralPhuket"),
                  t("main.searchBar.districtVariant.chalong"),
                  t("main.searchBar.districtVariant.allOptions"),
                ]}
                defaultValue={t("main.searchBar.select")}
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
                {t("main.searchBar.rooms")}
              </label>
              <CustomSelect
                options={[
                  t("main.searchBar.roomVariant.studio"),
                  t("main.searchBar.roomVariant.bedroom1"),
                  t("main.searchBar.roomVariant.bedroom2"),
                  t("main.searchBar.roomVariant.bedroom3"),
                  t("main.searchBar.roomVariant.bedroom4"),
                  t("main.searchBar.roomVariant.bedroom5"),
                  t("main.searchBar.roomVariant.allOptions"),
                ]}
                defaultValue={t("main.searchBar.select")}
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
                {t("main.searchBar.search")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
