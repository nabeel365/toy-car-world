import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomerReviews from '../../TwoExtraSections/CustomerReviews';
import PopularBrands from '../../TwoExtraSections/PopularBrands';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';

const MainContent = () => {
    return (
        <div>
            {/* <Outlet></Outlet> */}
            <Banner></Banner>
            <Gallery></Gallery>
            <CustomerReviews></CustomerReviews>
            <PopularBrands></PopularBrands>
        </div>
    );
};

export default MainContent;