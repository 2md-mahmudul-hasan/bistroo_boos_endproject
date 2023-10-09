import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
const Testimonials = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch('reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])
  return (
    <div>
      <SectionTitle heading={"What our client say?"} subHeading={"Testimonail"}></SectionTitle>
      <section>
        <>
          <Swiper navigation={true} modules={[Navigation]}>

            {
              reviews.map(review => <SwiperSlide key={review._id}>
                <div className="flex flex-col items-center px-48" >
                  <h>{review.name}</h>
                  <p>{review.details}</p>
                  <Rating

                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  />
                </div>

              </SwiperSlide>)
            }
          </Swiper>
        </>
      </section>
    </div>
  );
};

export default Testimonials;