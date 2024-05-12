//import about from '../images/about.jpg'
import bgImage1 from '../images/services/Instagram post - 7.webp'
import bgImage2 from '../images/services/Instagram post - 48.webp'
import bgImage3 from '../images/services/Instagram post - 3.webp'
import bgImage4 from '../images/services/Instagram post - 29.webp'


//import Slide from '../components/slider'

export default function About(){
    

    return(

        <div className="about" id="about">

            {/* <div className="marcas">
                <Slide/>
            </div> */}

            <div className="aboutTitle">
                SERVICIOS
            </div>

            <div className="service">
                    <div className='containerCard'>
                        <div className="card">
                            <img src={bgImage1} alt="bgImage1"/>
                            <div>
                                <p style={{color: '#ffffff', margin: '0', fontSize: '20px', fontWeight: '800',padding: '0 10px'}} >CAMBIOS DE PANEL</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={bgImage2} alt="bgImage2"/>
                            <div>
                                <p style={{color: '#ffffff', margin: '0', fontSize: '20px', fontWeight: '800',padding: '0 10px'}} >COLOCACION DE RADIADORES</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={bgImage3} alt="bgImage3"/>
                            <div>
                                <p style={{color: '#ffffff', margin: '0', fontSize: '20px', fontWeight: '800',padding: '0 10px'}} >FABRICACION DE CAJAS EN ALUMINIO</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={bgImage4} alt="bgImage4"/>
                            <div>
                                <p style={{color: '#ffffff', margin: '0', fontSize: '20px', fontWeight: '800',padding: '0 10px'}} >LIMPIEZA DE RADIADORES</p>
                            </div>
                        </div>
                    </div>
            </div>


        </div>
    )
}









