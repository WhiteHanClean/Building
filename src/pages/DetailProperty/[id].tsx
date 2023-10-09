// Import necessary modules and components
import Consultation from "@/components/Consultation/Consultation";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import PropertyDesc from "@/components/PropertyDesc/PropertyDesc";
import Questions from "@/components/Questions/Questions";
import BackButton from "@/components/BackButton/BackButton";
import React from "react";
import axios from "axios";
import { RealEstate } from "@/redux/api";
import { GetServerSideProps } from "next";

interface IProps {
  selectedProperty: null | RealEstate;
  error?: any;
}

const DetailProperty: React.FC<IProps> = ({ selectedProperty, error }) => {


  

  return (
    <div>
      <>
        <BackButton />
        {!error ? (
          <ProductSlider sliderProperty={selectedProperty} />
        ) : (
          <p>Error: {error.message}</p>
        )}
        <PropertyDesc/>
        <Questions />
        <Consultation />
      </>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<IProps> = async ({
  query,
}) => {
  const { id } = query as { id: string };

  try {
    const { data: selectedProperty } = await axios.get(
      `https://propertylibphuket-production.up.railway.app/realEstates/${id}`
    );

    return {
      props: {
        selectedProperty,
      },
    };
  } catch (error: any) {
    return {
      props: {
        selectedProperty: null,
        error: error.message as string,
      },
    };
  }
};
export default DetailProperty;
