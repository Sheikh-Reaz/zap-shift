import React from 'react';
import Banner from './Banner/Banner';

import How from './how it works/How';
import OurServices from './our services/OurServices';
import Brands from './Brands/Brands';
import Reviews from './Reviews/Reviews';
import ParcelDelivery from './ParcelDelivery/ParcelDelivery';
import CustomerSatisfaction from './CustomerSatisfaction/CustomerSatisfaction';
import WhatOur from './Whatour/Whatour';
import FAQSection from './FAQSection/FAQSection';
const reviewsPromise = fetch('/reviews.json').then(res => res.json())

const Home = () => {
    return (
        <div className='' >
            <Banner></Banner>
            <How></How>
            <OurServices></OurServices>
            <Brands></Brands>
            <ParcelDelivery></ParcelDelivery>
            <CustomerSatisfaction/>
            <WhatOur></WhatOur>
            <Reviews reviewsPromise={reviewsPromise} ></Reviews>
            <FAQSection/>
        </div>
    );
};
export default Home;