
import React from 'react';
import Slider from "react-slick";

import marca1 from '../images/marca1.jpg'
import marca2 from '../images/marca2.png'
import marca3 from '../images/marca3.png'
import marca4 from '../images/marca4.jpg'
import marca5 from '../images/marca5.png'
import marca6 from '../images/marca6.jpg'
import marca7 from '../images/marca7.png'

export default function Slide() {

  let show = 3;
  

  function slide(){
    if(window.screen.width < 650){
      show = 1
    }
  }

  slide();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: show,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false
  };
    

    return (
      <div className="slide">
        <Slider { ...settings }>
          <div>
            <img src={marca1} alt="#"/>
          </div>
          <div>
            <img src={marca2} alt="#"/>
          </div>
          <div>
            <img src={marca3} alt="#"/>
          </div>
          <div>
            <img src={marca4} alt="#"/>
          </div>
          <div>
            <img src={marca5} alt="#"/>
          </div>
          <div>
            <img src={marca6} alt="#"/>
          </div>
          <div>
            <img src={marca7} alt="#"/>
          </div>
        </Slider>
      </div>
    );
  }