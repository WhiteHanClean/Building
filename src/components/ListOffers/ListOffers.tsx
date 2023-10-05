import React, { useEffect, useState } from "react";
import s from "./ListOffers.module.scss";
import BuildCard from "../BuildCard/BuildCard";
import { RealEstate } from "../../redux/api";
import { useGetFilteredOffersQuery } from "@/redux/api";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "@/redux/store";


interface Props {
  isRent: boolean;
}

const ListOffers = ({ isRent }: Props) => {
// import Pagination from "../Pagination/Pagination";
// import { useGetObjectsQuery } from "../../api/Api";

  const { t } = useTranslation();
  const [selectedValue, setSelectedValue] = useState("");
  const [allOffers, setAllOffers] = useState<RealEstate[]>([]);

  // const { data, error, isLoading } = useGetFilteredOffersQuery({ isRent });

  const allOffersData = useSelector((state) => {
    console.log(state.libraryPhuket.queries.getAllOffers);
    // setAllOffers(state);
  });

  const state = useSelector((state: RootState) => state);
  console.log(state);
  console.log(allOffers);

  // useEffect(() => {
  //   if (data) {
  //     setAllOffers(data);
  //   }
  // }, [data]);

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
          <p className={s.listOffer_text}>
            {t("listOffer.totalObjects")} <span>5 760</span>
          </p>
        </div>
      </div>
      <ul className={s.listOffer_list}>
        {allOffers.map((card: RealEstate, _id: number) => (
          <li key={_id} className={s.listOffer_item}>
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
