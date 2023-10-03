import FilterForm from "@/components/FilterForm/FilterForm";
import ListOffers from "@/components/ListOffers/ListOffers";
import React, { useState } from "react";
import { FilterParams } from "@/redux/api";

const Purchase = () => {
  const [filterParams, setFilterParams] = useState<FilterParams>({
    isFilter: false,
  });

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
