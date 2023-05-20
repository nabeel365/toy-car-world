import React from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import MainContent from '../MainContent/MainContent';
import { Outlet, Route, Router } from 'react-router-dom';
import AllToys from '../AllToys/AllToys';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>

            <Outlet></Outlet>
            
            <Footer></Footer>


            
        </div>
    );
};

export default Home;