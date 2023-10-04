import { RealEstate } from '@/redux/api';
import React from 'react';
import s from "./PropertyDesc.module.scss"

interface ProductSliderProps {
    selectedProperty: RealEstate | null;
}

const PropertyDesc: React.FC<ProductSliderProps> = ({ selectedProperty }) => {
    return (
        <div className={s.property_desc}>
            <div className={s.property_desc_field}>
                <div className={s.porperty_desc_description}>
                    <h3>
                        Описание недвижимости
                    </h3>
                    <p>
                        По потопе трое сыновей Ноя разделили землю – Сим, Xaм, Иaфeт. И достался восток Симу:Персия, Бактрия, даже и до Индии в долготу, а в ширину до Ринокорура, то есть от востока идо юга, и Сирия, и Мидия до реки Евфрат, Вавилон, Кордуна, ассирияне, Месопотамия,Аравия Старейшая, Елимаис, Инди, Аравия Сильная, Колия, Коммагена, вся Финикия. <span>Год постройки 2020</span>
                        <br />
                        <br />
                        <span>Хаму же достался юг: Египет, Эфиопия, соседящая с Индией, и другая Эфиопия, из которойвытекает река эфиопская Красная, текущая на восток, Фивы, Ливия.</span>
                    </p>
                    <div className={s.property_desc_description_facilities} >
                        {selectedProperty && (
                            <>
                                {selectedProperty.hasRestaurant && (
                                    <div className={s.property_desc_description_facilitie}>
                                        <img src="/Restourant.png" alt="Restourant" />
                                        <p>Ресторан</p>
                                    </div>
                                )}
                                {selectedProperty.hasSpa && (
                                    <div className={s.property_desc_description_facilitie}>
                                        <img src="/leaf.png" alt="leaf" />
                                        <p>Спа на территории</p>
                                    </div>
                                )}
                                {selectedProperty.hasGym && (
                                    <div className={s.property_desc_description_facilitie}>
                                        <img src="/Vessel.png" alt="Vessel" />
                                        <p>Тренажерный зал</p>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                    <div className={s.property_desc_description_facilities}>
                        {selectedProperty && (
                            <>
                                {selectedProperty.hasParking && (
                                    <div className={s.property_desc_description_facilitie}>
                                        <img src="/Coin.png" alt="Coin" />
                                        <p>Парковка для авто</p>
                                    </div>
                                )}
                                {selectedProperty.hasCommunalPool && (
                                    <div className={s.property_desc_description_facilitie}>
                                        <img src="/Pool.png" alt="Pool" />
                                        <p>Общий бассейн</p>
                                    </div>
                                )}
                                {selectedProperty.hasClub && (
                                    <div className={s.property_desc_description_facilitie}>
                                        <img src="/Glass.png" alt="Glass" />
                                        <p>Клуб на территории</p>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
                <div className={s.property_desc_information}>

                    <div className={s.property_desc_information_column}>
                        <div className={s.property_desc_information_column_card}>
                            <h3>
                                Площадь квартиры
                            </h3>
                            <p>
                                {selectedProperty?.builtUpArea} м²
                            </p>
                        </div>
                        <div className={s.property_desc_information_column_card}>
                            <h3>
                                Комнаты
                            </h3>
                            <p>
                                {selectedProperty?.roomsAmount}
                            </p>
                        </div>
                        <div className={s.property_desc_information_column_card}>
                            <h3>
                                Ориентир
                            </h3>
                            <p>
                                {selectedProperty?.location}
                            </p>
                        </div>
                    </div>
                    <div className={s.property_desc_information_column}>
                        <div className={s.property_desc_information_column_card}>
                            <h3>
                                Площадь участка
                            </h3>
                            <p>
                                {selectedProperty?.landArea} м²
                            </p>
                        </div>
                        <div className={s.property_desc_information_column_card}>
                            <h3>
                                Этаж
                            </h3>
                            <p>
                                {selectedProperty?.floor}
                            </p>
                        </div>
                        <div className={s.property_desc_information_column_card}>
                            <h3>
                                Балкон
                            </h3>
                            <p>
                                {selectedProperty?.balconyAmount}
                            </p>
                        </div>
                    </div>
                    <div className={s.property_desc_information_column}>
                        <div className={s.property_desc_information_column_card}>
                            <h3>
                                Площадь кухни
                            </h3>
                            <p>
                                {selectedProperty?.kitchenArea} м²
                            </p>
                        </div>
                        <div className={s.property_desc_information_column_card}>
                            <h3>
                                Санузел
                            </h3>
                            <p>
                                {selectedProperty?.bathroomAmount}
                            </p>
                        </div>
                        <div className={s.property_desc_information_column_card}>
                            <h3>
                                Тип дома
                            </h3>
                            <p>
                                {selectedProperty?.buildingType}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.property_desc_adaptive}>
                <h3>
                    Удобства
                </h3>
                <div className={s.property_desc_adaptive_field}>
                    <div className={s.property_desc_adaptive_facilities} >
                        {selectedProperty && (
                            <>
                                {selectedProperty.hasRestaurant && (
                                    <div className={s.property_desc_adaptive_facilitie}>
                                        <img src="/Restourant.png" alt="Restourant" />
                                        <p>Ресторан</p>
                                    </div>
                                )}
                                {selectedProperty.hasSpa && (
                                    <div className={s.property_desc_adaptive_facilitie}>
                                        <img src="/leaf.png" alt="leaf" />
                                        <p>Спа на территории</p>
                                    </div>
                                )}
                                {selectedProperty.hasGym && (
                                    <div className={s.property_desc_adaptive_facilitie}>
                                        <img src="/Vessel.png" alt="Vessel" />
                                        <p>Тренажерный зал</p>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                    <div className={s.property_desc_adaptive_facilities}>
                        {selectedProperty && (
                            <>
                                {selectedProperty.hasParking && (
                                    <div className={s.property_desc_adaptive_facilitie}>
                                        <img src="/Coin.png" alt="Coin" />
                                        <p>Парковка для авто</p>
                                    </div>
                                )}
                                {selectedProperty.hasCommunalPool && (
                                    <div className={s.property_desc_adaptive_facilitie}>
                                        <img src="/Pool.png" alt="Pool" />
                                        <p>Общий бассейн</p>
                                    </div>
                                )}
                                {selectedProperty.hasClub && (
                                    <div className={s.property_desc_adaptive_facilitie}>
                                        <img src="/Glass.png" alt="Glass" />
                                        <p>Клуб на территории</p>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDesc;