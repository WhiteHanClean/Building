import Consultation from '@/components/Consultation/Consultation';
import ProductSlider from '@/components/ProductSlider/ProductSlider';
import PropertyDesc from '@/components/PropertyDesc/PropertyDesc';
import Questions from '@/components/Questions/Questions';
import React from 'react';
import { useRouter } from 'next/router';

const DetailProperty: React.FC = () => {

    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <ProductSlider />
            <PropertyDesc />
            <Questions />
            <Consultation />
        </div>
    );
};

export default DetailProperty;