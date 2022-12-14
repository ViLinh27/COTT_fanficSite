import '../App.scss'
import React from 'react';
import {Outlet} from 'react-router-dom';

import Title from '../components/TitleHeader.js';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
function Layout(){
    return(
        <>
            <Title/>
            <Navbar/>

            {/* content would go herer */}

            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;