import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from '../../../assets/brands/amazon.png';
import amazonVector from '../../../assets/brands/amazon_vector.png';
import casio from '../../../assets/brands/casio.png';
import moonstar from '../../../assets/brands/moonstar.png';
import randstad from '../../../assets/brands/randstad.png';
import star from '../../../assets/brands/star.png';
import starPeople from '../../../assets/brands/start_people.png';
import { Autoplay } from 'swiper/modules';

const brandLogos = [amazon, amazonVector, casio, moonstar, randstad, star, starPeople,starPeople];


const Brands = () => {
  return (
    <div className='py-10 border-b-3 border-[#03464D] border-dashed my-2'>
        <h2 className='pb-10 text-center text-4xl font-bold text-[#03373D]'>We've helped thousands of sales teams</h2>     
      <Swiper
        loop={true}
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        {
          brandLogos.map((logo, index) => <SwiperSlide key={index}><img src={logo} alt="" /></SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default Brands;