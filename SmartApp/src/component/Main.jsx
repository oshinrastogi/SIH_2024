import React from 'react';
import NavBar from './NavBar';
import Carousel from './Carousel'; // Import CarouselComponent from Carousel.jsx
import CardGrid from './CardGrid';

const Main = () => {
  return (
    <div>
      <NavBar />
      <Carousel />
      <CardGrid />
    </div>
  );
};

export default Main;
