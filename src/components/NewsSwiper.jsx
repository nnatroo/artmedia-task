import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import NewsImage from '../assets/newsImage1.png'

const NewsSwiper = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide><img src={NewsImage} alt="" /></SwiperSlide>
        <SwiperSlide><img src={NewsImage} alt="" /></SwiperSlide>
        <SwiperSlide><img src={NewsImage} alt="" /></SwiperSlide>
        <SwiperSlide><img src={NewsImage} alt="" /></SwiperSlide>
        <SwiperSlide><img src={NewsImage} alt="" /></SwiperSlide>
        <SwiperSlide><img src={NewsImage} alt="" /></SwiperSlide>
        <SwiperSlide><img src={NewsImage} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
};

export default NewsSwiper;
