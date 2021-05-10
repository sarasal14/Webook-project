import React from 'react';
import Carousel from 'react-elastic-carousel';
import CarouselItem from './CarouselItem';
// import {CarouselJson} from './CarouselJson';



 class MyCarousel extends React.Component {
  constructor() {
    super();
    this.state = { CarouselJson:[] };
  }

  componentDidMount() {
    fetch(`/MyCarousel`)
      .then(res => res.json())
      .then(json => this.setState({ CarouselJson: json }));
  }

    render() {
      return (    
      <Carousel>

        {this.state.CarouselJson.map(item=>{
          return(
            <CarouselItem myImagePath={item.imagePath}/>
          )
        }
        )}
      
      </Carousel>
      );
    }
  }
  
  export default MyCarousel;