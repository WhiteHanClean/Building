import React, { useEffect, useRef, useState } from "react";
import s from "./ProductSlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { useWindowSize } from "../../hook/useSize";
import { RealEstate } from "@/redux/api";
import { useTranslation } from "react-i18next";

interface ProductSliderProps {
  sliderProperty: any;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ sliderProperty }) => {
  const { t } = useTranslation();
  const [number, setNumber] = useState(1);
  // const { width = 0 } = useWindowSize();

  const imagesCount = sliderProperty?.images.length || 0;

  const swiperRef = useRef<any | null>(null);

  const goToPrevSlide = () => {
    if (imagesCount > 1 && swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const goToNextSlide = () => {
    if (imagesCount > 1 && swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  useEffect(() => {
    const swiper = swiperRef.current;
    let prevActiveIndex = 0;

    if (swiper) {
      swiper.off("slideChangeTransitionEnd");
      swiper.on("slideChangeTransitionEnd", () => {
        const { activeIndex } = swiper;
        if (activeIndex !== prevActiveIndex) {
          if (activeIndex > prevActiveIndex) {
            setNumber((prevNumber) => prevNumber + 1);
          } else if (activeIndex < prevActiveIndex) {
            setNumber((prevNumber) => prevNumber - 1);
          }
          prevActiveIndex = activeIndex;
        }
      });
    }
  }, [swiperRef]);

  return (
    <section className={s.slider_section}>
      {/* image starts*/}
      <div className={s.slider_section_image}>
        <div className={s.slider_section_image_swipper}>
          {/* swipper buttons starts*/}

          <div className={s.slider_section_image_swipper_buttonHolder}>
            <button
              className={`
                ${s.slider_section_image_swipper_buttonHolder_left_button}
                ${
                  number === 1 &&
                  s.slider_section_image_swipper_buttonHolder_left_button_disabled
                }
                `}
              onClick={goToPrevSlide}
            >
              <Image
                src={"/BtnSliderIcon.png"}
                width={16}
                height={16}
                alt="slider icon"
                className={
                  s.slider_section_image_swipper_buttonHolder_right_button_icon
                }
              />
            </button>

            <button
              className={`
                  ${s.slider_section_image_swipper_buttonHolder_right_button}
                  ${
                    number === imagesCount &&
                    s.slider_section_image_swipper_buttonHolder_right_button_disabled
                  }
                `}
              onClick={goToNextSlide}
            >
              <Image
                src={"/BtnSliderIcon.png"}
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
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className={s.slider_section_image_slide}
        >
          {sliderProperty?.images.map((items: any, index: number) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  backgroundImage: `url(${items.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "100%",
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
            <h3>{sliderProperty?.title}</h3>
            <h3>{sliderProperty?.price} ₽</h3>
          </div>

          <div className={s.slider_section_table_title_location}>
            <p>{sliderProperty?.location?.title}</p>
            <p>{sliderProperty?.pricePerSquareMeter} ₽/м²</p>
          </div>
        </div>
        {/* table title ends*/}
        {/* table list starts*/}
        <ul className={s.slider_section_table_list}>
          <li className={s.slider_section_table_list_item}>
            <p>
              {sliderProperty?.roomsAmount}
              {t("main.searchBar.manyRooms")}
            </p>
          </li>
          <li className={s.slider_section_table_list_item}>
            <p>
              {t("main.searchBar.apartmentArea")} {sliderProperty?.builtUpArea}{" "}
              м²
            </p>
          </li>
          <li className={s.slider_section_table_list_item}>
            <p>
              {t("main.searchBar.landArea")} {sliderProperty?.landArea} м²
            </p>
          </li>
          <li className={s.slider_section_table_list_item}>
            <p>
              {t("main.searchBar.yearOfConstruction")}{" "}
              {sliderProperty?.yearBuilt}
            </p>
          </li>
          <li className={s.slider_section_table_list_item}>
            <p>{t("main.searchBar.beach")} 0.5 км</p>
          </li>
          <li
            className={`${s.slider_section_table_list_item} ${s.slider_section_table_list_button}`}
          >
            <p>{t("main.header.orderACall")}</p>
          </li>
        </ul>
        {/* table list ends*/}
      </div>
      {/* table ends */}
    </section>
  );
};

export default ProductSlider;
