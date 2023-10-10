import React from 'react';
import Banner from './Banner/Banner';
import SwiperSlider from './Swiper/SwiperSlider';
import PapularMenu from './PapularMenu/PapularMenu';
import FeturedItem from './FeturedItem/FeturedItem';
import Testimonials from './Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';



const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistroo-boss||home</title>
      </Helmet>
      <Banner />
      <SwiperSlider></SwiperSlider>
      <PapularMenu></PapularMenu>
      <FeturedItem></FeturedItem>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;