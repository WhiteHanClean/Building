import ListOffers from "@/components/ListOffers/ListOffers";
import FilterForm from "@/components/FilterForm/FilterForm";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import React from "react";

const Rent = () => {
  return (
    <>
      <FilterForm titleSection="Аренда недвижимости" />
      <ListOffers />
    </>
  );
};

export default Rent;
