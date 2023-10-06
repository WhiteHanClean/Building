import React, { useRef, useState } from 'react';
import s from './ProductSlider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { useWindowSize } from '../../hook/useSize';
import { RealEstate } from '@/redux/api';

interface ProductSliderProps {
  selectedProperty: RealEstate | null;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ selectedProperty }) => {
  const [number, setNumber] = useState(1);
  const { width = 0 } = useWindowSize();

  const imagesCount = selectedProperty?.images.length || 0;

  const swiperRef = useRef<any | null>(null);

  const goToPrevSlide = () => {
    if (imagesCount > 1 && swiperRef.current) {
      swiperRef.current.slidePrev();
      if (number !== 1) {
        setNumber((prevNumber) => prevNumber - 1);
      }
    }
  };

  const goToNextSlide = () => {
    if (imagesCount > 1 && swiperRef.current) {
      swiperRef.current.slideNext();
      if (number < imagesCount) {
        setNumber((prevNumber) => prevNumber + 1);
      }
    }
  };

  return (
    <section className={s.slider_section}>
      {/* image starts*/}
      <div className={s.slider_section_image}>
        <div className={s.slider_section_image_swipper}>
          {/* swipper buttons starts*/}

          <div className={s.slider_section_image_swipper_buttonHolder}>
            <button
              className={
                s.slider_section_image_swipper_buttonHolder_left_button
              }
              onClick={goToPrevSlide}
            >
              <Image
                src={'/BtnSliderIcon.png'}
                width={16}
                height={16}
                alt="slider icon"
              />
            </button>

            <button
              className={
                s.slider_section_image_swipper_buttonHolder_right_button
              }
              onClick={goToNextSlide}
            >
              <Image
                src={'/BtnSliderIcon.png'}
                width={16}
                height={16}
                alt="slider icon"
                className={
                  s.slider_section_image_swipper_buttonHolder_right_button_icon
                }
              />
            </button>
          </div>
          {/* swipper buttons ends*/}

          {/* swipper text starts */}

          <div className={s.slider_section_image_swipper_text}>
            {imagesCount > 0 && (
              <p>
                <span>{number}</span> из <span>{imagesCount}</span>
              </p>
            )}
          </div>

          {/* swipper text ends */}
        </div>

        {/* swipper starts*/}

        <Swiper
          slidesPerView={1}
          scrollbar={{
            draggable: true,
          }}
          modules={[Scrollbar]}
          onSwiper={(swiper: any) => {
            swiperRef.current = swiper;
          }}
          className={s.slider_section_image_slide}
        >
          {selectedProperty?.images.map((items, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  backgroundImage: `url(${items.url})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  width: '100%',
                  height: '100%',
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* swipper ends*/}
      </div>

      {/* image ends*/}
      {/* ================================================================================================= */}
      {/* table starts */}

      <div className={s.slider_section_table}>
        {/* table title starts*/}
        <div className={s.slider_section_table_title}>
          <div className={s.slider_section_table_title_price}>
            <h3>{selectedProperty?.title}</h3>
            <h3>{selectedProperty?.price} ₽</h3>
          </div>

          <div className={s.slider_section_table_title_location}>
            <p>{selectedProperty?.location}</p>
            <p>{selectedProperty?.pricePerSquareMeter} ₽/м²</p>
          </div>
        </div>
        {/* table title ends*/}
        {/* table list starts*/}
        <ul className={s.slider_section_table_list}>
          <li className={s.slider_section_table_list_item}>
            <p>{selectedProperty?.roomsAmount}-комнатная квартира</p>
          </li>
          <li className={s.slider_section_table_list_item}>
            <p>Площадь квартиры: {selectedProperty?.builtUpArea} м²</p>
          </li>
          <li className={s.slider_section_table_list_item}>
            <p>Площадь участка: {selectedProperty?.landArea} м²</p>
          </li>
          <li className={s.slider_section_table_list_item}>
            <p>Год постройки: {selectedProperty?.yearBuilt}</p>
          </li>
          <li className={s.slider_section_table_list_item}>
            <p>Пляж Камала: 0.5 км</p>
          </li>
          <li
            className={`${s.slider_section_table_list_item} ${s.slider_section_table_list_button}`}
          >
            <p>Заказать звонок</p>
          </li>
        </ul>
        {/* table list ends*/}
      </div>
      {/* table ends */}
    </section>
  );
};

export default ProductSlider;