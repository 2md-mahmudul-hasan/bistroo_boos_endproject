import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';
// import Banner from '../pages/Home/Banner/Banner';

const Main = () => {
  const location = useLocation()

  const noHeaderFooter = location.pathname.includes('login')


  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}
      {/* <Banner></Banner> */}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;