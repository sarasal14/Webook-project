import React from 'react';
import Carousel from 'react-elastic-carousel';
import CarouselItem from './CarouselItem';



const image1="/pic/ca1.jpg";
const image2="/pic/ca2.jpg";
const image3="/pic/ca3.jpg";
 class MyCarousel extends React.Component {
    render() {
      return (    
      <Carousel>
        <CarouselItem myImagePath={image1}/>
        <CarouselItem myImagePath={image2}/>
        <CarouselItem myImagePath={image3}/>
      </Carousel>
      );
    }
  }
  
  export default MyCarousel;