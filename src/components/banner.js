
//import Slide from './slider'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import point1 from '../images/point1.svg'
import point2 from '../images/point2.svg'
import point3 from '../images/point3.svg'

import BannerMobile from './bannerMobile'

export default function About(){
    

    return(

        <div className="banner">

            {/* <div className="marcas">
                <Slide/>
            </div> */}

            <div className="aboutTitle">
            ¿COMO SOLICITAR UN TURNO?
            </div>

            <div>
                <div className='w-full max-w-[1100px] m-auto hidden md:flex'>
                    <div className="point">
                        <LazyLoadImage src={point1} alt="point1"/>
                        <p >Contactenos por <a href="#contact">Aqui</a></p>
                    </div>
                    <div className="point">
                        <LazyLoadImage src={point2} alt="point2"/>
                        <p  >Realizamos la cotizacion</p>
                    </div>
                    <div className="point">
                        <LazyLoadImage src={point3} alt="point3"/>
                        <p>Todos nuestros trabajos tienen una garantia de 6 meses</p>

                    </div>
                </div>
                <BannerMobile className=""/>
            </div>


        </div>
    )
}









