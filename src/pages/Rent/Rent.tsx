import ListOffers from "@/components/ListOffers/ListOffers";
import FilterForm from "@/components/FilterForm/FilterForm";
import React from "react";

const Rent = () => {
  return (
    <>
      <div>
        <FilterForm titleSection="Аренда недвижимости" />
        <ListOffers />
      </div>
    </>
  );
};

export default Rent;
