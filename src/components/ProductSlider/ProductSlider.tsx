import React, { useRef, useState } from "react";
import s from "./ProductSlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { useWindowSize } from "../../hook/useSize";
import { RealEstate } from "@/redux/api";

interface ProductSliderProps {
  selectedProperty: RealEstate | null;
}

const ProductSlider: React.FC<ProductSliderProps> = ({selectedProperty}) => {
  const [number, setNumber] = useState(1);
  const { width = 0 } = useWindowSize();
  
  const isScreenTable = width <= 1300;
  const isScreenTablemMini = width <= 768;
  const isScreenMob = width <= 428;

  const heightImg = isScreenTable
    ? 520
    : isScreenTablemMini
    ? 470
    : isScreenMob
    ? 270
    : 460;

  const items = Array.from({ length: 24 }, (_, index) => index);
  const imagesCount = selectedProperty?.images.length || 0; // Добавляем проверку на наличие изображений

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
    <div className={s.productSlider_wrapper_section}>
      <div className={s.productSlider_wrapper_btn}>
        <div className={s.productSlider_btn_group}>
          <button className={s.productSlider_left_btn} onClick={goToPrevSlide}>
            <Image
              src={"/BtnSliderIcon.png"}
              width={16}
              height={16}
              alt="slider icon"
            />
          </button>
          <button className={s.productSlider_right_btn} onClick={goToNextSlide}>
            <Image
              src={"/BtnSliderIcon.png"}
              width={16}
              height={16}
              alt="slider icon"
              className={s.productSlider_right_icon_img}
            />
          </button>
        </div>
        <div className={s.productSlider_wrapper_btnText}>
          <p className={s.productSlider_number}>
            <span>{number}</span> из <span>{selectedProperty?.images.length}</span>
          </p>
        </div>
      </div>
      <div className={s.productSlider_wrapper}>
        <Swiper
          slidesPerView={1}
          scrollbar={{
            draggable: true,
          }}
          modules={[Scrollbar]}
          onSwiper={(swiper: any) => {
            swiperRef.current = swiper;
          }}
        >
          {selectedProperty?.images.map((items, index) => (
            <SwiperSlide key={index}>
              <div className={s.productSlider_wrapper_img}>
                <Image
                  src={items.url}
                  alt="Foto House"
                  width={847}
                  height={heightImg}
                  style={{ width: "100%" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={s.productSlider_wrapper_info}>
          <div className={s.productSlider_wrapper_title}>
            <p>{selectedProperty?.title}</p>
            <p>{selectedProperty?.price} ₽</p>
          </div>
          <div className={s.productSlider_wrapper_text}>
            <p>{selectedProperty?.location}</p>
            <p>{selectedProperty?.pricePerSquareMeter} ₽/м²</p>
          </div>
          <ul className={s.productSlider_list}>
            <li className={s.productSlider_items}>
              <p>{selectedProperty?.roomsAmount}-комнатная квартира</p>
            </li>
            <li className={s.productSlider_items}>
              <p>Площадь квартиры: {selectedProperty?.builtUpArea}</p>
            </li>
            <li className={s.productSlider_items}>
              <p>Год постройки: 2020</p>
            </li>
            <li className={s.productSlider_items}>
              <p>Пляж Камала: 0.5 км</p>
            </li>
          </ul>
          <button className={s.productSlider_btn}>Заказать звонок</button>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
