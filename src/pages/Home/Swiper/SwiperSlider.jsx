import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle';

const SwiperSlider = () => {
  return (
    <section>
      <SectionTitle heading={"Order Online"} subHeading={"---From 11:00am to 10:00pm---"}></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true} modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} alt='slider' />
          <h3 className='-mt-12 text-center text-lime-600 text-3xl uppercase'>Salad</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slider2} alt='slider' />
          <h3 className='-mt-12 text-center text-lime-600 text-3xl uppercase'>Salad</h3>

        </SwiperSlide>
        <SwiperSlide><img src={slider3} alt='slider'></img>
          <h3 className=' -mt-12 text-center text-lime-600 text-3xl uppercase'>Fizza</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slider4} alt='slider'></img>
          <h3 className='-mt-12 text-center text-lime-600 text-3xl uppercase'>DEssert</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slider5} alt='slider'></img>
          <h3 className='-mt-12 text-center text-lime-600 text-3xl text-center uppercase'>Soup</h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SwiperSlider;