import hearth from '../images/hearth.svg'
import stock from '../images/stock.svg'
import location from '../images/location.svg'
import wave from '../images/wave2.svg'


export default function services(){
    return(
        <div className="services" id="service">
            <img className="secondWave" src={wave} alt=""/>
            <div className="articles">
                <article>
                    <img src={location} alt=""/>
                    <h3>Servicio de puerta a puerta</h3>
                    <p>Contamos con servicio de envíos a todo san miguel de Tucumán sin costo alguno, además realizamos envíos a todo el interior y norte Argentino</p>
                </article>

                <article>
                    <img src={stock} alt=""/>
                    <h3>Gran variedad de Stock</h3>
                    <p>Tenemos un stock bastante diverso de todo tipo de radiadores, enfriadores de aceite, condensadores, compresores para AA y electroventiladores</p>
                </article>

                <article>
                    <img src={hearth} alt=""/>
                    <h3>La mejor atencion</h3>
                    <p>Podrás compartir la información que te interese con tus contactos fácilmente. !!!!!!!</p>
                </article>
            </div>
        </div>
    )
}


















