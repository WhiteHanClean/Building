import React, { useEffect, useState } from "react";
import s from "./ListOffers.module.scss";
import BuildCard from "../BuildCard/BuildCard";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { RealEstate } from "../../redux/libraryPhukeSlice";

const ListOffers = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [allOffers, setAllOffers] = useState<RealEstate[]>([]);
  const sliceOffers = useSelector(
    (state: RootState) => state.libraryPhuket.allOffers as RealEstate[]
  );

  console.log(sliceOffers);

  useEffect(() => {
    setAllOffers(sliceOffers);
  }, [sliceOffers]);

  //сортировка по убыванию
  function sortByPriceAscending() {
    const sortedOffers = sliceOffers.slice().sort((a, b) => a.price - b.price);
    setAllOffers(sortedOffers);
  }
  //сортировка по возрастанию
  function sortByPriceDescending() {
    const sortedOffers = sliceOffers.slice().sort((a, b) => b.price - a.price);
    setAllOffers(sortedOffers);
  }

  //сортировка в случайном порядке
  function sortByPriceRandom() {
    const randomSortedOffers = sliceOffers
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
          <p className={s.listOffer_text}>
            Всего объявлений: {allOffers.length}
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
