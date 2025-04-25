import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle subHeading={"from 11.00am to 10.00pm"} heading={"ORDER ONLINE"}></SectionTitle>
      <Swiper
        spaceBetween={30}
        className="my-10 mySwiper"
        slidesPerView={4}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        centeredSlides={true}
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <h1 className="uppercase text-3xl text-center text-white -mt-30">
            Salad
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h1 className="uppercase text-3xl text-center text-white -mt-30">
            Pizzas
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h1 className="uppercase text-3xl text-center text-white -mt-30">
            SOUPS
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h1 className="uppercase text-3xl text-center text-white -mt-30">
            CAKES
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <h1 className="uppercase text-3xl text-center text-white -mt-30">
            Salad
          </h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
