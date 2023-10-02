import Consultation from '@/components/Consultation/Consultation';
import ProductSlider from '@/components/ProductSlider/ProductSlider';
import PropertyDesc from '@/components/PropertyDesc/PropertyDesc';
import Questions from '@/components/Questions/Questions';
import React from 'react';

const DetailProperty: React.FC = () => {
    return (
        <div>
            <ProductSlider/>
            <PropertyDesc/>
            <Questions/>
            <Consultation/>
        </div>
    );
};

export default DetailProperty;