import FilterForm from "@/components/FilterForm/FilterForm";
import ListOffers from "@/components/ListOffers/ListOffers";
import React from "react";

const Purchase = () => {
  return (
    <div>
      <FilterForm titleSection="Покупка недвижимости" />
      <ListOffers />
    </div>
  );
};

export default Purchase;
