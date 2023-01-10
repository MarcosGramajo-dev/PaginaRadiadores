import icon from '../images/icon.png'
import wave from '../images/wave.svg'
import fondo from '../images/fondo1.png'
import menu from '../images/menu.svg'
import { useState } from 'react';


export default function Home() {

    const [open, setOpen] = useState(false)

    function nav(){
        return(
            <ul>
                <li><a className="buttonNav" href="#home">INICIO</a></li>
                <li><a className="buttonNav" href="#service">NUESTROS SERVICIOS</a></li>
                <li><a className="buttonNav" href="#about">¿QUIENES SOMOS?</a></li>
                <li className="lastButton"><a href="#contact">CONTACTENOS</a></li>
            </ul>
        )
    }

    

    function handleClick(){
        setOpen(!open);
    }


  return (

    
    <div className="home" id="home">
        <header>
            <div className="containerLogo">
                <img src={icon} alt="icon"/>
                <h1>RADIADORES GRAMAJO MOREIRA</h1>
            </div>

            <nav className="navDesktop">
                {nav()}
            </nav>

            {open ? <div className="closeMenu" open={open} onClick={handleClick}>
                        <img src={menu} alt="close"/>
                        {nav()}
                    </div>
                :   
                    <div className="menu" open={open} onClick={handleClick}>
                        <img src={menu} alt="menu"/>
                    </div>
            }
            </header>


        <section className="sectionHome">

            <img className="wave" src={wave} alt="onda"/>

            <div className="conteinerHome">
                <img src={fondo} alt="#"/>

                <div>
                    <h2>
                        VENTA Y REPARACIÓN
                    </h2>

                    <p>Venta, reparación de radiadores y enfriadores de todo tipo</p>

                    <a href="#contact">CONTACTENOS</a>
                </div>
            </div>

        </section>

    </div>
  );
}

















