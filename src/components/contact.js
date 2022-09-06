import wave from '../images/wave5.svg'
// import Maps from './map'
import whatsapp from '../images/iconWhatsapp.svg'
import facebook from '../images/iconFacebook.svg'
import location from '../images/iconLocation.png'


export default function Contact(){

    return(
        <div className="contact" id="contact">
            <img className="wave4" src={wave} alt="#"/>
            <div className="contenedorContact">
                <div className="mapa">
                <div>
                    {/* <Maps/> */}
                </div>
                </div>
                <div className="infoContact">
                    <div className="titleContact">
                        <h3>Te esperamos!</h3>
                    </div>
                    <div className="local">
                        <p>LOCAL</p>
                        <p>AV JUAN B JUSTO 2649</p>
                        <p>SAN MIGUEL DE TUCUMÁN - TUCUMÁN</p>
                    </div>
                    <div className="telefono">
                        <p>TELEFONOS</p>
                        <p>0381-4552069</p>
                        <p>0381-1111111</p>
                        <p>EMAIL: CONTACTS@COMPANY.COM</p>
                    </div>
                    <div className="contacto">
                        <p>HORARIO</p>
                        <p>LUNEA A VIERNES</p>
                        <p>8 A 18 HS</p>
                    </div>
                    <div className="iconsContact">
                        <a href="google.com"><img src={whatsapp} alt="whatsapp"/></a>
                        <a href="google.com"><img src={facebook} alt="facebook"/></a>
                        <a href="google.com"><img src={location} alt="ubicacion"/></a>
                    </div>
                </div>

            </div>
        </div>
    )
}