import React, { Component } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class Portfolio extends Component {
  settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  render() {
    return (
      <Slider {...this.settings}>
      <div>
        <h3>Slide 1</h3>
        <img src="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRZcmlaOZxV_nbS5cWjzzCB1i3PnTRqawOv0-EzUWZ15gTTCyaua_Ngv5hutODmYy7y" alt="" />
      </div>
      <div>
        <h3>Slide 2</h3>
      </div>
      <div>
        <h3>Slide 3</h3>
      </div>
      <div>
        <h3>Slide 4</h3>
      </div>
      <div>
        <h3>Slide 5</h3>
      </div>
      <div>
        <h3>Slide 6</h3>
      </div>
    </Slider>
  );
  }
}

export default Portfolio