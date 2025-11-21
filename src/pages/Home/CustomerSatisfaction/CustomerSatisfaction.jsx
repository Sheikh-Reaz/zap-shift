import React from 'react';
import costomer from '../../../assets/location-merchant.png'

const CustomerSatisfaction = () => {
  return (
    <div className='bg-[#03373D] md:p-20 p-10 md:rounded-2xl my-20'>
      <div className='flex flex-col md:flex-row lg:flex-row justify-between items-center'>
        <div className='text-white '>
          <h1 className='md:text-3xl text-4xl font-bold'>Merchant and Customer Satisfaction <br /> is Our First Priority</h1>
          <p className='pt-5'>We offer the lowest delivery charge with  the highest value along with <br /> 100% safety of your product. Pathao courier delivers your parcels in every <br /> corner of Bangladesh right on time.</p>
          <div className='pt-5  flex flex-col md:flex-row lg:flex-row gap-5'>
            <button className='btn border-[#CAEB66] bg-[#03373D] hover:bg-[#CAEB66]  text-[#CAEB66] rounded-l-full hover:text-[#03373D] font-bold rounded-r-full'>Become a Merchant</button>
            <button className='btn border-[#CAEB66] bg-[#03373D] hover:bg-[#CAEB66]  text-[#CAEB66] rounded-l-full hover:text-[#03373D] font-bold rounded-r-full'>Earn with ZapShift Courier</button>
          </div>
        </div>

        {/* right */}
        <div className='pt-10 md:pt-0 lg:pt-0'>
         <img src={costomer} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CustomerSatisfaction;