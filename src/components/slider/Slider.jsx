import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="sen">
            <div className="soz">
              <div className="kil">
                <img src="./imgs/f.png" alt="" />
                <h3>iPhone 14 Series</h3>
              </div>
              <h1>Up to 10% off Voucher</h1>
              <h4>Shop Now</h4>
            </div>
            <div className="imgs">
              <img src="./imgs/1.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sen">
            <div className="soz">
              <div className="kil">
                <img src="./imgs/f.png" alt="" />
                <h3>iPhone 14 Series</h3>
              </div>
              <h1>Up to 10% off Voucher</h1>
              <h4>Shop Now</h4>
            </div>
            <div className="imgs">
              <img src="./imgs/1.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sen">
            <div className="soz">
              <div className="kil">
                <img src="./imgs/f.png" alt="" />
                <h3>iPhone 14 Series</h3>
              </div>
              <h1>Up to 10% off Voucher</h1>
              <h4>Shop Now</h4>
            </div>
            <div className="imgs">
              <img src="./imgs/1.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
