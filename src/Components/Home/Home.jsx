import React from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import MainContent from '../MainContent/MainContent';
import { Outlet } from 'react-router-dom';

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