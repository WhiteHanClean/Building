import FilterForm from "@/components/FilterForm/FilterForm";
import ListOffers from "@/components/ListOffers/ListOffers";
import React, { useState } from "react";

export interface FilterParams {
  buildingType?: string;
  location?: string;
  roomsAmount?: number;
  //Дополнительные характеристики
  builtUpArea?: number;
  landArea?: number;
  price?: number;
  isRent?: boolean;
}

const Purchase = () => {
  const [filterParams, setFilterParams] = useState({});

  const handleFilterParams = (filterParams: FilterParams) => {
    setFilterParams(filterParams);
  };

  return (
    <div>
      <FilterForm
        titleSection="Покупка недвижимости"
        setFilterParams={handleFilterParams}
      />
      <ListOffers isRent={false} filterParams={filterParams} />
    </div>
  );
};

export default Purchase;
