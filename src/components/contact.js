//import wave from '../images/wave5.svg'
// import Maps from './map'
import whatsapp from '../images/iconWhatsapp.svg'
import facebook from '../images/iconFacebook.svg'
import map from '../images/map.svg'


export default function Contact(){

    return(
        <div className="contact" id="contact">

            <div className="bgBlur">
                <div className="containForm">
                    <div>
                        <h3 className="aboutTitle">
                        SOLICITA UN TURNO POR WHATSAPP
                        </h3>
                        <form style={{display: 'flex', flexDirection: 'column'}}>
                            <input type="text"/>
                            <input type="text"/>
                            <textarea/>
                            <button>SOLICITAR TURNO</button>
                        </form>
                    </div>
                    <div>
                        <h3 className="aboutTitle">
                        SOLICITA UN TURNO POR WHATSAPP
                        </h3>
                        <img src={map} alt="map" />
                    </div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            
        </div>
    )
}