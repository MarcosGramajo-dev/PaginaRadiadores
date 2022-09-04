import React from 'react'
import wave from '../images/wave3.svg'
import wave2 from '../images/wave4.svg'
import foto1 from '../images/fotoGaleria1.jpg'
import Slider from 'infinite-react-carousel';
import about from '../images/about.jpg'

export default function Gallery(){

  let filas = 2;
  let show = 2;

  function screen(){
    if(window.screen.width < 650){

      if(window.screen.width < 300){
        filas = 4;
        return;
      }
      filas = 3;
      show = 1

      console.log(window.screen.width)
      return;
    }
  }

  screen();


  const settings =  {
    adaptiveHeight: true,
    arrows: false,
    arrowsBlock: false,
    autoplay: true,
    centerMode: true,
    centerPadding: 80,
    className: 'album',
    dots: true,
    initialSlide: true,
    pauseOnHover: false,
    rows: filas,
    slidesToShow: show
  };

    return (
      <div className="gallery">
        <img className="wave3" src={wave} alt="#"/>

        <h3>Nuestros Trabajos</h3>
        <Slider { ...settings }>

          <div className="box">
            <img src={about} alt="#"/>
          </div>
          <div className="box">
            <img src={foto1} alt="#"/>
          </div >
          <div className="box">
            <img src={foto1} alt="#"/>
          </div>
          <div className="box">
            <img src={foto1} alt="#"/>
          </div>
          <div className="box">
            <img src={foto1} alt="#"/>
          </div>
          <div className="box">
            <img src={foto1} alt="#"/>
          </div>
          <div className="box">
            <img src={foto1} alt="#"/>
          </div>
          <div className="box">
            <img src={foto1} alt="#"/>
          </div>
          <div className="box">
            <img src={foto1} alt="#"/>
          </div>
          <div className="box">
            <img src={foto1} alt="#"/>
          </div>
        </Slider>

        <img className="wave4" src={wave2} alt="#"/>

        <div className="fondoVerde"></div>
      
      </div>
    );
  }