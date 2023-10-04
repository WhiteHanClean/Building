import ListOffers from "@/components/ListOffers/ListOffers";
import FilterForm from "@/components/FilterForm/FilterForm";
import React, { useState } from "react";
import { FilterParams } from "@/redux/api";

const Rent = () => {
  const [filterParams, setFilterParams] = useState<FilterParams>({
    isFilter: false,
  });

  const handleFilterParams = (filterParams: FilterParams) => {
    setFilterParams(filterParams);
  };

  return (
    <>
      <FilterForm
        titleSection="Аренда недвижимости"
        setFilterParams={handleFilterParams}
      />
      <ListOffers isRent={true} filterParams={filterParams} />
    </>
  );
};

export default Rent;
