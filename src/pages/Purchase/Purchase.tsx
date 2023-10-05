import FilterForm from "@/components/FilterForm/FilterForm";
import ListOffers from "@/components/ListOffers/ListOffers";
import React, { useState, useTransition } from "react";
import { FilterParams } from "@/redux/api";
import { useTranslation } from "react-i18next";

const Purchase = () => {
  const [filterParams, setFilterParams] = useState<FilterParams>({
    isFilter: false,
  });

  const { t } = useTranslation();
  
  const handleFilterParams = (filterParams: FilterParams) => {
    setFilterParams(filterParams);
  };

  return (
    <div>
      <FilterForm
        titleSection={t("buyingRealEstate.title")}
        setFilterParams={handleFilterParams}
      />
      <ListOffers isRent={false} filterParams={filterParams} />
    </div>
  );
};

export default Purchase;
