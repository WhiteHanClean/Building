import React, { useEffect, useRef, useState } from 'react';
import s from './Slider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Scrollbar } from 'swiper/modules';
import BuildCard from '@/components/BuildCard/BuildCard';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from 'next/image';

const Slider = () => {

  return (
    <>
      <div className={s.header_slider}>
        <p>Топ-10 проектов</p>
        <div className={s.btn_group}>
          <button className={s.left_btn}>
            <Image
              src={'/BtnSliderIcon.png'}
              width={16}
              height={16}
              alt="slider icon"
            />
          </button>
          <button className={s.right_btn}>
            <Image
              src={'/BtnSliderIcon.png'}
              width={16}
              height={16}
              alt="slider icon"
              className={s.right_icon_img}
            />
          </button>
        </div>
      </div>
      <div className="slider-progress-wrap">
        <div className="slider-progress"></div>
        <div className="slider-progress2"></div>
        <div className="slider-scrollbar"></div>
      </div>
      <Swiper
        slidesPerView={3}
        scrollbar={{
          draggable: true
          
        }}
        modules={[Scrollbar]}
      >
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
