import React, { useRef } from "react";
import s from "./Slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import BuildCard from "../BuildCard/BuildCard";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';
import "swiper/css/navigation";
import Image from "next/image";

const Slider: React.FC = () => {
  // Create a ref for the Swiper instance
  const swiperRef = useRef<any | null>(null);

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
        <p>Топ-10 проектов</p>
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
        {" "}
        <SwiperSlide>
          <BuildCard />
        </SwiperSlide>
        <SwiperSlide>
          <BuildCard />
        </SwiperSlide>
        <SwiperSlide>
          <BuildCard />
        </SwiperSlide>
        <SwiperSlide>
          <BuildCard />
        </SwiperSlide>
        <SwiperSlide>
          <BuildCard />
        </SwiperSlide>
        <SwiperSlide>
          <BuildCard />
        </SwiperSlide>
        <SwiperSlide>
          <BuildCard />
        </SwiperSlide>
        <SwiperSlide>
          <BuildCard />
        </SwiperSlide>
        <SwiperSlide>
          <BuildCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
