// import wave from '../images/wave.svg'
// import fondo from '../images/fondo1.png'
import menu from '../images/menu.svg'
import { useState } from 'react';
import bgImage from '../images/gallery/Instagram post - 20.png'


export default function Home() {
    //const bgImageURL = `url(${bgImage})`;

    const [open, setOpen] = useState(false)

    function nav(){
        return(
            <ul className='navMobile'>
                <li><a className="buttonNav" href="#home">INICIO</a></li>
                <li><a className="buttonNav" href="#service">NUESTROS SERVICIOS</a></li>
                <li><a className="buttonNav" href="#about">¿QUIENES SOMOS?</a></li>
                <li className="lastButton"><a href="#contact">SOLICITAR TURNO</a></li>
            </ul>
        )
    }

    

    function handleClick(){
        setOpen(!open);
    }


  return (

    
    <div className="home" id="home">
        <header>
            <div className="containHeader">
                <div className="containerLogo">
                    <h1>RADIADORES <span style={{color:'#ffffff'}} >GRAMAJO MOREIRA</span></h1>
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
            </div>
        </header>


        <section className="sectionHome">
            <div className="bgImage">
                <img src={bgImage} alt="background" />
            </div>
            <div className="bgHome"/>
            <div style={{textAlign: 'center', position: 'relative', top:'25px'}}>
                <h1 style={{margin:'0', color: '#000000', fontSize: '80px', textShadow: '1px 1px 2px white'}} > RADIADORES </h1>
                <h1 style={{margin:'0', color: '#ffffff', fontSize: '80px'}}>GRAMAJO MOREIRA</h1>
                <h3 style={{margin:'0', color: '#ffffff'}}>Venta y reparación</h3>
            </div>

        </section>

    </div>
  );
}

















