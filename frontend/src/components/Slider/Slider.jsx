import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css'

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

import b1 from './b1.jpg'
import b2 from './b2.jpg'
import b3 from './b3.jpg'
import b4 from './b4.jpg'

function Slider() {
    return (
        <>
          <div className="slider-section">
            <div className="slider-container">
            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: false,
              
            // }}
            navigation={false}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className='img-parent' >
                <img src={b1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={b2} alt="" className='img-parent' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={b3} alt="" className='img-parent' />
            </SwiperSlide>
            {/* <SwiperSlide>
                <img src={b4} alt="" className='img-parent' />
            </SwiperSlide> */}
          </Swiper>
            </div>
          </div>
        </>
      );
}

export default Slider
