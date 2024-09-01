import React from 'react';
import { Carousel } from 'react-bootstrap';
import Slide1 from '../assets/slides1.png'; // PNG image
import Slide2 from '../assets/slides2.jpg'; // JPG image
import Slide3 from '../assets/slides3.jpg'; // JPG image

const CarouselComponent = () => {
  return (
    <Carousel interval={3000} controls={false} pause={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={Slide1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={Slide2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={Slide3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
