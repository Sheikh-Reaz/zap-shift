import React from 'react';
import { CiDeliveryTruck } from 'react-icons/ci';

const How = () => {
    return (
        <div>
                        <div className='py-25 px-2 ' >
                <div><h1 className=' text-secondary font-extrabold text-3xl ' >How it Works</h1></div>
                <div className='grid md:grid-cols-4 gap-4 ' >
                    <div className='bg-white p-5 rounded-xl' > 
                        <CiDeliveryTruck size={65} />
                        <h2 className='text-secondary text-xl font-bold ' >Cash On Delivery</h2>
                        <p className='font-medium  text-lg' >From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>
                    <div className='bg-white p-5 rounded-xl' > 
                        <CiDeliveryTruck size={65} />
                        <h2 className='text-secondary text-xl font-bold ' >Delivery Hub</h2>
                        <p className='font-medium  text-lg' >From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>
                    <div className='bg-white p-5 rounded-xl' > 
                        <CiDeliveryTruck size={65} />
                        <h2 className='text-secondary text-xl font-bold ' >Booking SME & Corporate</h2>
                        <p className='font-medium  text-lg' >From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>
                    <div className='bg-white p-5 rounded-xl' > 
                        <CiDeliveryTruck size={65} />
                        <h2 className='text-secondary text-xl font-bold ' >Booking Pick & Drop</h2>
                        <p className='font-medium  text-lg' >From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default How;