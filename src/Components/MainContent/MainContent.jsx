import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomerReviews from '../../TwoExtraSections/CustomerReviews';
import PopularBrands from '../../TwoExtraSections/PopularBrands';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';

const MainContent = () => {
    return (
        <div>
            {/* <Outlet></Outlet> */}
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <CustomerReviews></CustomerReviews>
            <PopularBrands></PopularBrands>
        </div>
    );
};

export default MainContent;