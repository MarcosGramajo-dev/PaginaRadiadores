
//import Slide from './slider'

import point1 from '../images/point1.svg'
import point2 from '../images/point2.svg'
import point3 from '../images/point3.svg'

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
                <div style={{width:'100%', maxWidth:'1100px', display:'flex', margin:'auto'}}>
                    <div className="point">
                        <img src={point1} alt="point1"/>
                        <p >Contactenos por <a href="#contact">Aqui</a></p>
                    </div>
                    <div className="point">
                        <img src={point2} alt="point2"/>
                        <p  >Realizamos la cotizacion</p>
                    </div>
                    <div className="point">
                        <img src={point3} alt="point3"/>
                        <p>Todos nuestros trabajos tienen una garantia de 6 meses</p>

                    </div>
                </div>
            </div>


        </div>
    )
}









