import { LazyLoadImage } from 'react-lazy-load-image-component';

import map from '../images/map.svg'
import { useState } from 'react';
import company from '../images/image 10.webp'


export default function Contact(){

    const [formData, setFormData] = useState({
        nombre: '',
        asunto: '',
        detalle: '',
      });

    const [alertMessage, setAlertMessage] = useState(false)

    const saveData = (event) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [id]: value,
        }));    
      };

      const sendData = (event) => {
        event.preventDefault()

        const message = `Nombre: ${formData.nombre}\nAsunto: ${formData.asunto}\nDetalle: ${formData.detalle}`;
        const encodedMessage = encodeURIComponent(message);
        const waBaseUrl = 'https://wa.me/+543814675299';
        const whatsappLink = `${waBaseUrl}?text=${encodedMessage}`;

        if(formData.nombre !== '' && formData.detalle !== ''){
            window.open(whatsappLink, '_blank');
            setAlertMessage(false)
        } else {
            setAlertMessage(true)
        }

        setFormData({
          nombre: '',
          asunto: '',
          detalle: '',
        });
      };

    return(
        <div className="contact pb-8" id="contact">

            <div className="bgBlur">
                <div className="containForm">
                    <div>
                        <h3 className="aboutTitle">
                        SOLICITA UN TURNO POR WHATSAPP
                        </h3>
                        <form style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '308px'}}>
                        <label htmlFor="nombre" className="inp">
                            <input type="text" id="nombre" placeholder=" " value={formData.nombre} onChange={saveData} />
                            <span className="label">Nombre</span>
                            <span className="focus-bg"></span>
                        </label>
                        <label htmlFor="asunto" className="inp">
                            <input type="text" id="asunto" placeholder=" " value={formData.asunto} onChange={saveData} />
                            <span className="label">Asunto</span>
                            <span className="focus-bg"></span>
                        </label>
                        <label htmlFor="detalle" className="inp">
                            <input type="text" id="detalle" placeholder=" " value={formData.detalle} onChange={saveData} />
                            <span className="label">Detalle</span>
                            <span className="focus-bg"></span>
                        </label>

                            <button className='btnWp' onClick={(event) =>sendData(event)}>SOLICITAR TURNO</button>
                            {alertMessage && <span style={{color: 'red', textAlign:'center', margin: '0'}} >Quedaron campos sin completar</span>}
                        </form>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <h3 className="aboutTitle">
                            ¿DONDE ESTAMOS?                        
                        </h3>
                        <LazyLoadImage src={map} alt="map" />
                    </div>
                </div>
                <div className='containForm'>
                    <div style={{textAlign:'center'}}>
                        <LazyLoadImage src={company} alt="map" />
                    </div>
                    <div>
                        <h3 className="aboutTitle">
                            TE ESPERAMOS                       
                        </h3>
                        <p>AV. JUAN B JUSTO 2649</p>
                        <p>SAN MIGUEL DE TUCUMÁN - TUCUMÁN</p>
                        <p>TELEFONOS    381-4552069 | 381-5355689</p>
                        <p>HORARIOS:  LUNEA A VIERNES  8 A 18 HS</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}