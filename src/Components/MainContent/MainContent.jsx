import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomerReviews from '../../TwoExtraSections/CustomerReviews';
import PopularBrands from '../../TwoExtraSections/PopularBrands';
import Banner from '../Banner/Banner';

const MainContent = () => {
    return (
        <div>
            {/* <Outlet></Outlet> */}
            <Banner></Banner>
            <CustomerReviews></CustomerReviews>
            <PopularBrands></PopularBrands>
        </div>
    );
};

export default MainContent;