import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'  
import offer1 from '../../assets/offer1.webp';
import offer3 from '../../assets/offer3.webp';
import offer4 from '../../assets/offer4.webp';
import offer5 from '../../assets/offer5.avif';
import offer6 from '../../assets/offer6.jpeg'
import './offers.css'

const Offers = () => {
  return (
    <div className='carousel-main'>
    <Carousel >
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={offer1}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={offer3}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={offer4}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={offer5}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={offer6}
        alt="First slide"
      />
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default Offers