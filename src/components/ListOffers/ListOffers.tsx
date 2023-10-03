import React, { useEffect, useState } from "react";
import s from "./ListOffers.module.scss";
import BuildCard from "../BuildCard/BuildCard";
import {
  FilterParams,
  RealEstate,
  useGetAllOffersQuery,
  useGetOneOffersQuery,
  useGetUnFilteredOffersQuery,
} from "../../redux/api";
import { useGetFilteredOffersQuery } from "@/redux/api";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import Pagination from "../Pagination/Pagination";
import { useWindowSize } from "@/hook/useSize";
interface Props {
  isRent: boolean;
  filterParams: FilterParams;
}

// !===========================================================main function====================================================

const ListOffers = ({ isRent, filterParams }: Props) => {
  const [isFilter, setIsFilter] = useState(
    Object.keys(filterParams).length != 0
  );

  const [selectedValue, setSelectedValue] = useState("");
  const [allOffers, setAllOffers] = useState<RealEstate[]>([]);
  const { width = 1 } = useWindowSize();
  console.log(width, "width");
  const [currentPage, setCurrentPage] = useState(1);
  const { data: totalPages } = useGetAllOffersQuery();

  console.log(totalPages, "totalPages");

  if (isFilter) {
    const { data, error, isLoading } = useGetFilteredOffersQuery({
      isRent: isRent,
      currentPage: currentPage,
      filterParams: filterParams,
    });
  } else {
    const { data, error, isLoading } = useGetUnFilteredOffersQuery({
      isRent: isRent,
      currentPage: currentPage,
    });
  }
  const { data, error, isLoading } = useGetFilteredOffersQuery({
    isRent: isRent,
    currentPage: currentPage,
    // filterParams: filterParams,
  });

  console.log(data, "data");

  useEffect(() => {
    if (data) {
      setAllOffers(data);
    }
  }, [data]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    console.log(currentPage);
  };

  // сортировка по убыванию
  function sortByPriceAscending() {
    const sortedOffers = allOffers.slice().sort((a, b) => a.price - b.price);
    setAllOffers(sortedOffers);
  }

  //сортировка по возрастанию
  function sortByPriceDescending() {
    const sortedOffers = allOffers.slice().sort((a, b) => b.price - a.price);
    setAllOffers(sortedOffers);
  }

  // //сортировка в случайном порядке
  function sortByPriceRandom() {
    const randomSortedOffers = allOffers
      .slice()
      .sort(() => Math.random() - 0.5);
    setAllOffers(randomSortedOffers);
  }

  const handleSelectChange = (e: { target: { value: any } }) => {
    const newValue = e.target.value;
    setSelectedValue(newValue);
  };

  useEffect(() => {
    if (selectedValue === "expensive") {
      sortByPriceDescending();
    }
    if (selectedValue === "cheap") {
      sortByPriceAscending();
    }
    if (selectedValue === "all") {
      sortByPriceRandom();
    }
  }, [selectedValue]);

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
              <option value="all" className={s.listOffer_option}>
                Все
              </option>
              <option value="expensive" className={s.listOffer_option}>
                По цене: сначала дорогие
              </option>
              <option value="cheap" className={s.listOffer_option}>
                По цене: сначала дешевые
              </option>
            </select>
          </div>
        </div>
        <div className={s.listOffer_text_wrapper}>
          {totalPages && data ? (
            <p className={s.listOffer_text}>
              Всего объявлений: {totalPages.length}
            </p>
          ) : (
            <p className={s.listOffer_text}>Всего объявлений: 0</p>
          )}
        </div>
      </div>
      <ul className={s.listOffer_list}>
        {data && totalPages
          ? data.map((card: RealEstate) => (
              <li key={card._id} className={s.listOffer_item}>
                <BuildCard
                  img={card.mainImage}
                  alt={card.alt}
                  name={card.title}
                  price={card.price}
                  rooms={card.roomsAmount}
                  builtUpArea={card.builtUpArea}
                  landArea={card.landArea}
                  location={card.location}
                />
              </li>
            ))
          : "empty"}
      </ul>
      {totalPages && data && (
        <Pagination
          totalItems={totalPages.length}
          limit={9}
          onPageChange={handlePageChange}
        />
      )}
    </section>
  );
};

export default ListOffers;
