import React from 'react';
import Banner from './Banner/Banner';
import SwiperSlider from './Swiper/SwiperSlider';
import PapularMenu from './PapularMenu/PapularMenu';
import FeturedItem from './FeturedItem/FeturedItem';
import Testimonials from './Testimonials/Testimonials';



const Home = () => {
  return (
    <div>
      <Banner />
      <SwiperSlider></SwiperSlider>
      <PapularMenu></PapularMenu>
      <FeturedItem></FeturedItem>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;