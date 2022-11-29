import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';
import slide1 from '../foto/4.jpg'
import slide2 from '../foto/4.jpg'
import slide3 from '../foto/4.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slaiderbox.css';

function Slaiderbox() {
    var settings ={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
  return (
    <div className="Slaiderbox">
        <Slider {...settings}>
           <Slide id={1} image={slide1} />
           <Slide id={2} image={slide2} />
           <Slide id={3} image={slide3} />
        </Slider>
    </div>
  )
}

export default Slaiderbox;