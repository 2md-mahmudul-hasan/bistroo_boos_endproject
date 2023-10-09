import React from 'react';
import Banner from './Banner/Banner';
import SwiperSlider from './Swiper/SwiperSlider';
import PapularMenu from './PapularMenu/PapularMenu';
import FeturedItem from './FeturedItem/FeturedItem';



const Home = () => {
  return (
    <div>
      <Banner />
      <SwiperSlider></SwiperSlider>
      <PapularMenu></PapularMenu>
      <FeturedItem></FeturedItem>
    </div>
  );
};

export default Home;