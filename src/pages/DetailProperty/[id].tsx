import Consultation from '@/components/Consultation/Consultation';
import ProductSlider from '@/components/ProductSlider/ProductSlider';
import PropertyDesc from '@/components/PropertyDesc/PropertyDesc';
import Questions from '@/components/Questions/Questions';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { RealEstate, useGetAllOffersQuery, useGetOfferByIdQuery } from '@/redux/api';

const DetailProperty: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useGetAllOffersQuery();
  const [selectedProperty, setSelectedProperty] = useState<RealEstate | null>(null);

  useEffect(() => {
    if (data && id) {
      const property = data.find(item => item._id === id);
      setSelectedProperty(property || null);
    }
  }, [data, id]);
  

  return (
    <div>
      {selectedProperty && (
        <>
          <ProductSlider selectedProperty={selectedProperty}/>
          <PropertyDesc/>
          <Questions />
          <Consultation />
        </>
      )}
    </div>
  );
};

export default DetailProperty;
