import Consultation from "@/components/Consultation/Consultation";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import PropertyDesc from "@/components/PropertyDesc/PropertyDesc";
import Questions from "@/components/Questions/Questions";
import React from "react";
import { useRouter } from "next/router";
import { useGetOneOffersQuery } from "@/redux/api";
import BackButton from "@/components/BackButton/BackButton";
import axios from "axios";

const DetailProperty: React.FC = ({ selectedProperty }) => {
  const router = useRouter();

  console.log(selectedProperty);

  return (
    <div>
      {selectedProperty && (
        <>
          <BackButton />
          <ProductSlider selectedProperty={selectedProperty} />
          <PropertyDesc selectedProperty={selectedProperty} />
          <Questions />
          <Consultation />
        </>
      )}
    </div>
  );
};

export async function getServerSideProps({ query }: any) {
  const { id } = query;

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
}

export default DetailProperty;
