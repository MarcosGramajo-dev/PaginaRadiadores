import about from '../images/about.jpg'


import Slide from '../components/slider'

export default function About(){
    return(
        <div className="about" id="about">

            <div className="marcas">
                <Slide/>
            </div>

            <div className="info">
                <div className="imageAbout">
                    <img src={about} alt="#"/>
                </div>
                <div>
                    <h3>¿QUIENES SOMOS?</h3>
                    <p>
                    Más de 50 años en el mercado especializado en Refrigeración de Vehículos, livianos y pesados. Hoy, hemos incorporado la línea de equipos de acondicionadores de aire (repuestos) y todo lo necesario para abastecer a Respuesteros, Talleres y público en general. <br/>
                    Visite nuestro renovado local…
                    </p>
                </div>
            </div>


        </div>
    )
}