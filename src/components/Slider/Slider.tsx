import React, { useRef } from "react";
import s from "./Slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import BuildCard from "../BuildCard/BuildCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { RealEstate } from "@/redux/api";
import { idText } from "typescript";

const Slider: React.FC<{
  allOffers: RealEstate[];
}> = ({ allOffers }) => {
  // Create a ref for the Swiper instance
  const swiperRef = useRef<any | null>(null);
  const { t } = useTranslation();
  // Function to go to the previous slide
  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  // Function to go to the next slide
  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <>
      <div className={s.header_slider}>
        <p>{t("main.slider.title")}</p>
        <div className={s.btn_group}>
          <button className={s.left_btn} onClick={goToPrevSlide}>
            <Image
              src={"/BtnSliderIcon.png"}
              width={16}
              height={16}
              alt="slider icon"
            />
          </button>
          <button className={s.right_btn} onClick={goToNextSlide}>
            <Image
              src={"/BtnSliderIcon.png"}
              width={16}
              height={16}
              alt="slider icon"
              className={s.right_icon_img}
            />
          </button>
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        scrollbar={true}
        spaceBetween={20}
        breakpoints={{
          968: {
            slidesPerView: 3,
          },
          629: {
            slidesPerView: 2,
          },
          360: {
            slidesPerView: 1,
          },
        }}
        modules={[Scrollbar]}
        onSwiper={(swiper: any) => {
          swiperRef.current = swiper;
        }}
        className="build_swiper"
      >
        {allOffers ? (
          allOffers.map((card: RealEstate) => (
            <SwiperSlide key={card._id}>
              <BuildCard
                id={card._id}
                img={card.mainImage}
                alt={card.alt}
                name={card.title}
                price={card.price}
                rooms={card.roomsAmount}
                builtUpArea={card.builtUpArea}
                landArea={card.landArea}
                location={card.location}
              />
            </SwiperSlide>
          ))
        ) : (
          <p>Oops, there is an error in fetching data (slider component)</p>
        )}
      </Swiper>
    </>
  );
};

export default Slider;
