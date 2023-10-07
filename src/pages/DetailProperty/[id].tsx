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
}

// Define the DetailProperty component
const DetailProperty: React.FC<IProps> = ({ selectedProperty }) => {
  return (
    <div>
      {selectedProperty ? (
        <>
          <BackButton />
          <ProductSlider sliderProperty={selectedProperty} />
          <PropertyDesc />
          <Questions />
          <Consultation />
        </>
      ) : (
        "ooops , smth went wrong"
      )}
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
    console.error("Error fetching real estate data:", error.message as string);

    return {
      props: {
        selectedProperty: null,
      },
    };
  }
};
export default DetailProperty;
