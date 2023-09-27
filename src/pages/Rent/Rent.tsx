import FilterForm from "@/components/FilterForm/FilterForm";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import React from "react";

const Rent = () => {
  return (
    <>
      <FilterForm titleSection="Аренда недвижимости" />
      <ProductSlider />
    </>
  );
};

export default Rent;
