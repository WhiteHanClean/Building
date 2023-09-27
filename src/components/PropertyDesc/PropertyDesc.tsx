import { facilitiesBottom, facilitiesTop, paramsFirst, paramsSecond, paramsThird } from '@/constans/PropertyDescData';
import React from 'react';
import s from "./PropertyDesc.module.scss"

const PropertyDesc: React.FC = () => {
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
                        {facilitiesTop.map((item, index) => (
                            <div className={s.property_desc_description_facilitie} key={index}>
                                <img src={item.img} alt="Restourant" />
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>
                    <div className={s.property_desc_description_facilities}>
                        {facilitiesBottom.map((item, index) => (
                            <div className={s.property_desc_description_facilitie} key={index}>
                                <img src={item.img} alt="Coin" />
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={s.property_desc_information}>
                    <div className={s.property_desc_information_column}>
                        {paramsSecond.map((item, index) => (
                            <div className={s.property_desc_information_column_card} key={index}>
                                <h3>
                                    {item.title}
                                </h3>
                                <p>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className={s.property_desc_information_column}>
                        {paramsFirst.map((item, index) => (
                            <div className={s.property_desc_information_column_card} key={index}>
                                <h3>
                                    {item.title}
                                </h3>
                                <p>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className={s.property_desc_information_column}>

                        {paramsThird.map((item, index) => (

                            <div className={s.property_desc_information_column_card} key={index}>
                                <h3>
                                    {item.title}
                                </h3>
                                <p>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={s.property_desc_adaptive}>
                <h3>
                    Удобства
                </h3>
                <div className={s.property_desc_adaptive_field}>
                    <div className={s.property_desc_adaptive_facilities} >
                        {facilitiesTop.map((item, index) => (
                            <div className={s.property_desc_adaptive_facilitie} key={index}>
                                <img src={item.img} alt="Restourant" />
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>
                    <div className={s.property_desc_adaptive_facilities}>
                        {facilitiesBottom.map((item, index) => (
                            <div className={s.property_desc_adaptive_facilitie} key={index}>
                                <img src={item.img} alt="Coin" />
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDesc;