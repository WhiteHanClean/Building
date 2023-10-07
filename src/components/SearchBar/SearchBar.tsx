import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import s from "./SearchBar.module.scss";
import CustomSelect from "@/shared/ui/Select/Select";
import { i18n } from "i18next";
import {
  Location,
  LocationResponse,
  setFormMain,
  useGetLocationQuery,
} from "@/redux/api";
import { useRouter } from "next/router";

interface SearchBarProps {
  t: i18n["t"];
  i18n: i18n;
  id: Number;
}

const SearchBar: React.FC<SearchBarProps> = ({ t, i18n, id }) => {
  const [locationsData, setLocationsData] = useState<LocationResponse>([]);
  const { data, error, isLoading } = useGetLocationQuery();
  console.log(locationsData);

  useEffect(() => {
    if (data) {
      setLocationsData(data);
    }
  }, [data]);

  const dispatch = useDispatch();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      RealEstate: "",
      location: "",
      rooms: "",
      pricMin: "",
      pricMax: "",
      id: id,
    },
    onSubmit: (values, { resetForm }) => {
      //////Если ты читаешь код ниже!!! знай меня заставили!!!
      const roomFix = () => {
        if (values.rooms === "Студия" || values.rooms === "Studio") {
          return "Studio";
        }
        if (
          values.rooms === "Показать все варианты" ||
          values.rooms === "Show all options"
        ) {
          return "AllOptions";
        }
        return values.rooms.charAt(0);
      };
      const roomsFixHardCor = roomFix();

      const fixRealty = () => {
        if (values.RealEstate === "Вилла" || values.RealEstate === "Villa") {
          return "Villa";
        }
        if (
          values.RealEstate === "Квартира" ||
          values.RealEstate === "Apartment"
        ) {
          return "Apartment";
        }
        return "AllOptions";
      };

      const realtyFixHardCor = fixRealty();

      const FixLocation = () => {
        const location = locationsData.find(
          (location: Location) => location.title === values.location
        );
        if (location) {
          return location._id;
        }
        return "";
      };

      const locationFixHard = FixLocation();
      ///// Надеюсь твои глаза не кроваточат, после увидинного

      const mainForm = {
        RealEstate: realtyFixHardCor,
        location: locationFixHard,
        rooms: roomsFixHardCor,
        pricMin: values.pricMin,
        pricMax: values.pricMax,
      };
      resetForm();
      dispatch(setFormMain(mainForm));
      formik.values.RealEstate = "";

      const nextPage = id === 1 ? "/Purchase/Purchase" : "/Rent/Rent";
      router.push(nextPage);
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
              <label htmlFor="location" className={s.form_label}>
                {t("main.searchBar.district")}
              </label>
              <CustomSelect
                options={locationsData.map((location) => location.title)}
                defaultValue={t("main.searchBar.select")}
                onChange={(value) => formik.setFieldValue("location", value)}
                onBlur={formik.handleBlur}
                value={formik.values.location}
              />
              {formik.touched.location && formik.errors.location ? (
                <div className="">{formik.errors.location}</div>
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
