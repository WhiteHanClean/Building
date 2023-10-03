import ListOffers from "@/components/ListOffers/ListOffers";
import FilterForm from "@/components/FilterForm/FilterForm";
import React from "react";

const Rent = () => {
  return (
    <>
      <FilterForm titleSection="Аренда недвижимости" />
      <ListOffers isRent={true} />
    </>
  );
};

export default Rent;
