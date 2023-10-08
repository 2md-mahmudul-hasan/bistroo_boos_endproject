import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bannar1 from '../../../assets/home/01.jpg'
import bannar2 from '../../../assets/home/02.jpg'
import bannar3 from '../../../assets/home/03.png'
import bannar4 from '../../../assets/home/04.jpg'
import bannar5 from '../../../assets/home/05.png'
import bannar6 from '../../../assets/home/06.png'

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={bannar1} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={bannar2} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={bannar3} />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src={bannar4} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={bannar5} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={bannar6} />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  )
}

export default Banner