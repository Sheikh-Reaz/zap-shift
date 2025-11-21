import React from 'react';
import image from '../../../assets/customer-top.png'

const WhatOur = () => {
  return (
    <div>
      <div className=''>
        <div className='flex justify-center'>
          <img src={image} alt="" />
        </div>
        <div className='text-center pb-10'>
          <h1 className='md:text-4xl py-4 font-bold'>What our customers are sayings</h1>
          <p className='text-gray-600'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!</p>
        </div>
      </div>
    </div>
  );
};

export default WhatOur;