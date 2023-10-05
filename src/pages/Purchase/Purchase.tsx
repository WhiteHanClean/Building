import FilterForm from "@/components/FilterForm/FilterForm";
import ListOffers from "@/components/ListOffers/ListOffers";
import React from "react";
import { useTranslation } from "react-i18next";

const Purchase = () => {
  const { t } = useTranslation();
  return (
    <div>
      <FilterForm titleSection={t("buyingRealEstate.title")} />
      <ListOffers isRent={false} />
    </div>
  );
};

export default Purchase;
