import React from 'react';
import Banner from './Banner/Banner';
import SwiperSlider from './Swiper/SwiperSlider';
import PapularMenu from './PapularMenu/PapularMenu';



const Home = () => {
  return (
    <div>
      <Banner />
      <SwiperSlider></SwiperSlider>
      <PapularMenu></PapularMenu>
    </div>
  );
};

export default Home;