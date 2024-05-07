import { useState } from 'react';
import Slider from "react-slick";
//import wave from '../images/wave3.svg'
import close from '../images/close.png'


function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../images/gallery', false, /\.(png|jpe?g|svg)$/));
let imgSelect;

export default function Gallery() {
  let row = 2;
  let slidesToShow = 3;
  
  const [toggleShadow, setToggleShadow] = useState(false)

  function slide(){
    if(window.screen.width < 650){
      row = 2
      slidesToShow = 2
    }
  }

  slide();

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      className: 'album',
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
      cssEase: "linear",
      rows: row,
      arrows: false
    };

    function modal(e){
      setToggleShadow(!toggleShadow);
      console.log("click", toggleShadow)
      imgSelect = e;
    }

    return (
      <div className="gallery">
          {/* <img className="wave3" src={wave} alt="#"/> */}

          <h3>Nuestros Trabajos</h3>
          <Slider { ...settings }>
          
            {
              images.map(element => <div className="box" key={element} onClick={() => modal(element)}><img src={element} alt="#"/></div>)
            }

          </Slider>

         
        {/* <div className="fondoGris"></div> */}
        { toggleShadow ? <div className="modal"> <img className="close" src={close} onClick={() => modal()} alt="#"/> <div> <img className="imgSelect" src={imgSelect} alt="#"/> </div> </div> : ""}

       </div>
    );
  
}