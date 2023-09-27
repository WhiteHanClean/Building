import React, { useRef } from "react";
import s from "./ProductSlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const ProductSlider: React.FC = () => {
  const items = Array.from({ length: 24 }, (_, index) => index);
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
      <div>
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
        slidesPerView={1}
        scrollbar={{
          draggable: true,
        }}
        modules={[Scrollbar]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {items.map(() => (
          <SwiperSlide>
            <div className={s.productSlider_wrapper}>
              <div className={s.productSlider_wrapper_img}>
                <Image
                  src={"/FotoHouse.jpg"}
                  alt=""
                  width={847}
                  height={460}
                  style={{ width: "100%" }}
                />
              </div>
              <div className={s.productSlider_wrapper_info}>
                <div className={s.productSlider_wrapper_title}>
                  <p>Icon Park</p>
                  <p>15 000 000 ₽</p>
                </div>
                <div className={s.productSlider_wrapper_text}>
                  <p>Камала, Катху, Пхукет</p>
                  <p>310 000 ₽/м²</p>
                </div>
                <ul className={s.productSlider_list}>
                  <li className={s.productSlider_items}>
                    <p>3-комнатная квартира</p>
                  </li>
                  <li className={s.productSlider_items}>
                    <p>Площадь квартиры: 234 м²</p>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductSlider;
