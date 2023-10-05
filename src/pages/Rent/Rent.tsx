import ListOffers from "@/components/ListOffers/ListOffers";
import FilterForm from "@/components/FilterForm/FilterForm";
import React from "react";
import { useTranslation } from "react-i18next";

const Rent = () => {
  const { t } = useTranslation();
  return (
    <>
      <FilterForm titleSection={t("rentRealEstate")} />
      <ListOffers isRent={true} />

    </>
  );
};

export default Rent;
