import React, { useState } from "react";
import s from "./ListOffers.module.scss";
import BuildCard from "../BuildCard/BuildCard";
// import Pagination from "../Pagination/Pagination";
// import { useGetObjectsQuery } from "../../api/Api";

const ListOffers = () => {
  const [selectedValue, setSelectedValue] = useState("");
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const { data, error, isLoading } = useGetObjectsQuery(currentPage);

  //   const handlePageChange = (newPage: React.SetStateAction<number>) => {
  //     setCurrentPage(newPage);
  //   };

  const items = Array.from({ length: 99 }, (_, index) => index);

  const handleSelectChange = (e: { target: { value: any } }) => {
    const newValue = e.target.value;
    setSelectedValue(newValue);
  };

  console.log(selectedValue);

  return (
    <section className={s.listOffer_section}>
      <div className={s.listOffer_wraper}>
        <div className="">
          <label htmlFor="price" className={s.listOffer_label}>
            Сортировать
          </label>
          <div className={s.listOffer_wrapper_select}>
            <select
              id="price"
              name="price"
              className={s.listOffer_select}
              onChange={handleSelectChange}
              value={selectedValue}
            >
              <option value="" disabled className={s.listOffer_option}>
                Выбрать
              </option>
              <option value="Все" className={s.listOffer_option}>
                Все
              </option>
              <option
                value="По цене: сначала дорогие"
                className={s.listOffer_option}
              >
                По цене: сначала дорогие
              </option>
              <option
                value="По цене: сначала дешевые"
                className={s.listOffer_option}
              >
                По цене: сначала дешевые
              </option>
            </select>
          </div>
        </div>
        <div className={s.listOffer_text_wrapper}>
          <p className={s.listOffer_text}>
            Всего объектов: <span>5 760</span>
          </p>
        </div>
      </div>
      <ul className={s.listOffer_list}>
        {items.map((item, index) => (
          <li key={index} className={s.listOffer_item}>
            <BuildCard />
          </li>
        ))}
      </ul>
      {/* <Pagination
        currentPage={currentPage}
        totalPages={общее число страниц}
        onPageChange={handlePageChange}
      /> */}
    </section>
  );
};

export default ListOffers;
