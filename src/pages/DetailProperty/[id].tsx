import Consultation from '@/components/Consultation/Consultation';
import ProductSlider from '@/components/ProductSlider/ProductSlider';
import PropertyDesc from '@/components/PropertyDesc/PropertyDesc';
import Questions from '@/components/Questions/Questions';
import React from 'react';
import { useRouter } from 'next/router';
import { useGetOneOffersQuery } from '@/redux/api';

const DetailProperty: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: selectedProperty } = useGetOneOffersQuery({ id: id as string });

  return (
    <div>
      {selectedProperty && (
        <>
          <ProductSlider selectedProperty={selectedProperty}/>
          <PropertyDesc selectedProperty={selectedProperty}/>
          <Questions />
          <Consultation />
        </>
      )}
    </div>
  );
};

export default DetailProperty;
