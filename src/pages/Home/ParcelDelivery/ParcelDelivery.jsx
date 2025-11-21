import React from 'react';
import liveParcel from '../../../assets/live-tracking.png';
import safeDelivery from '../../../assets/safe-delivery.png';



const ParcelDelivery = () => {
  return (
    <div className='md:py-10 border-b-3 mb-10 border-dashed flex gap-4 flex-col mt-20 md:px-0 px-4 pb-5'>
      <div className='bg-white rounded-2xl md:flex  gap-10 items-center p-20'>
        <div className='border-r-3 border-dashed pr-10 '>
          <img src={liveParcel} alt="" />
        </div>
        <div>
          <h2 className='text-3xl font-bold md:pt-0 pt-10 pb-3'>Live Parcel Tracking</h2>
          <p className='text-gray-500 font-medium'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
        </div>
      </div>
      <div className='bg-white rounded-2xl md:flex gap-10 items-center p-20'>
        <div className='border-r-3 border-dashed  pr-10 '>
          <img src={safeDelivery} alt="" />
        </div>
        <div>
          <h2 className='text-3xl font-bold md:pt-0 pt-10 pb-3'>100% Safe Delivery</h2>
          <p className='text-gray-500 font-medium '>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
        </div>
      </div>
      <div className='bg-white rounded-2xl md:flex gap-10 items-center p-20'>
        <div className='border-r-3 border-dashed pr-10 '>
          <img src={safeDelivery} alt="" />
        </div>
        <div>
          <h2 className='text-3xl font-bold md:pt-0 pt-10 pb-3'>24/7 Call Center Support</h2>
          <p className='text-gray-500 font-medium'>Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
        </div>
      </div>
    </div>
  );
};

export default ParcelDelivery;