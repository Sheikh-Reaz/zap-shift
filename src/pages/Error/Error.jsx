import React from 'react';
import errorImg from '../../assets/Error404.png'
import { Link } from 'react-router';
const Error = () => {
  return (
    <div className='md:py-20 bg-white rounded-2xl md:mb-20'>
      <div className='text-center'>
       <div className='flex justify-center'>
         <img src={errorImg} alt="" />
       </div>
       
        <Link to='/' className='btn bg-[#CAEB66] font-bold rounded-xl'>Go Home</Link>
      </div>
    </div>
  );
};

export default Error;