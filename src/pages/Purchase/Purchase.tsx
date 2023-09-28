import FilterForm from "@/components/FilterForm/FilterForm";
import ListOffers from "@/components/ListOffers/ListOffers";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import React from "react";

const Purchase = () => {
  return (
    <div>
      <ProductSlider />
      <FilterForm titleSection="Покупка недвижимости" />
      <ListOffers />
    </div>
  );
};

export default Purchase;
