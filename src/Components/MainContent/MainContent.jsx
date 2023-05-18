import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomerReviews from '../../TwoExtraSections/CustomerReviews';
import PopularBrands from '../../TwoExtraSections/PopularBrands';

const MainContent = () => {
    return (
        <div>
            {/* <Outlet></Outlet> */}
            <CustomerReviews></CustomerReviews>
            <PopularBrands></PopularBrands>
        </div>
    );
};

export default MainContent;