import React from 'react';
import Banner from './Banner/Banner';

import How from './how it works/How';
import OurServices from './our services/OurServices';
import Brands from './Brands/Brands';
import Reviews from './Reviews/Reviews';
const reviewsPromise = fetch('/reviews.json').then(res => res.json())

const Home = () => {
    return (
        <div className='' >
            <Banner></Banner>
            <How></How>
            <OurServices></OurServices>
            <Brands></Brands>
            <Reviews reviewsPromise={reviewsPromise} ></Reviews>
            
        </div>
    );
};
export default Home;