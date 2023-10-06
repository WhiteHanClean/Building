import React, { useEffect, useState } from "react";
import s from "./ListOffers.module.scss";
import BuildCard from "../BuildCard/BuildCard";
import {
  FilterParams,
  RealEstate,
  useGetAllOffersQuery,
  useGetPaginateOffersQuery,
  useGetPaginateOffersWithFilterQuery,
  useGetUnFilteredOffersQuery,
} from "../../redux/api";
import { useGetFilteredOffersQuery } from "@/redux/api";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "@/redux/store";

import Pagination from "../Pagination/Pagination";
import { useWindowSize } from "@/hook/useSize";
interface Props {
  isRent: boolean;
  filterParams: FilterParams;
}

const ListOffers = ({ isRent, filterParams }: Props) => {
  const { t } = useTranslation();
  const [selectedValue, setSelectedValue] = useState("");
  const [allOffers, setAllOffers] = useState<RealEstate[]>([]);
  const { width = 1 } = useWindowSize();

  const [currentPage, setCurrentPage] = useState(1);

  console.log(isRent, "is rent");

  let offersQuery;
  let paginatesQuery;
  if (filterParams.isFilter) {
    offersQuery = useGetFilteredOffersQuery({
      isRent: isRent,
      currentPage: currentPage,
      filterParams: filterParams,
      limit: width <= 769 ? 6 : 9,
    });

    paginatesQuery = useGetPaginateOffersQuery({
      isRent: isRent,
      currentPage: currentPage,
      filterParams: filterParams,
      limit: 10000000000,
    });
  } else {
    offersQuery = useGetUnFilteredOffersQuery({
      isRent: isRent,
      currentPage: currentPage,
      limit: width <= 769 ? 6 : 9,
    });

    paginatesQuery = useGetPaginateOffersWithFilterQuery({
      isRent: isRent,
      currentPage: currentPage,
      filterParams: filterParams,
      limit: 10000000000,
    });
  }

  const { data, error, isLoading } = offersQuery;
  const { data: totalPages } = paginatesQuery;

  console.log("total", totalPages);
  console.log("paginate", data);

  useEffect(() => {
    if (data) {
      setAllOffers(data);
    }
  }, [data]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
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
            {t("listOffer.sort")}
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
                {t("buyingRealEstate.select")}
              </option>
              <option value="Все" className={s.listOffer_option}>
                {t("listOffer.all")}
              </option>
              <option
                value="По цене: сначала дорогие"
                className={s.listOffer_option}
              >
                {t("listOffer.byPriceExpensive")}
              </option>
              <option
                value="По цене: сначала дешевые"
                className={s.listOffer_option}
              >
                {t("listOffer.byPriceCheap")}
              </option>
            </select>
          </div>
        </div>
        <div className={s.listOffer_text_wrapper}>
          {totalPages && allOffers ? (
            <p className={s.listOffer_text}>
              {t("listOffer.totalObjects")} : {totalPages.length}
            </p>
          ) : (
            <p className={s.listOffer_text}>Всего объявлений: 0</p>
          )}
        </div>
      </div>
      <ul className={s.listOffer_list}>
        {allOffers && totalPages
          ? allOffers.map((card: RealEstate) => {
              return (
                <li key={card._id} className={s.listOffer_item}>
                  <BuildCard
                    id={card._id}
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
              );
            })
          : "empty"}
      </ul>
      {totalPages && allOffers && (
        <Pagination
          totalItems={totalPages.length}
          limit={width <= 769 ? 6 : 9}
          onPageChange={handlePageChange}
        />
      )}
    </section>
  );
};

export default ListOffers;
