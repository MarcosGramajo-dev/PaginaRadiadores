import { LazyLoadImage } from 'react-lazy-load-image-component';
import menu from '../images/menu.svg'
import { useState } from 'react';
import bgImage from '../images/banner/bannerP.webp'
import bgImageM from '../images/banner/bannerPM.webp'


export default function Home() {
    //const bgImageURL = `url(${bgImage})`;

    const [open, setOpen] = useState(false)

    function nav(){
        return(
            <ul className='navMobile'>
                <li><a className="buttonNav" href="#home">INICIO</a></li>
                <li><a className="buttonNav" href="#service">NUESTROS SERVICIOS</a></li>
                <li><a className="buttonNav" href="#faq">PREGUNTAS FRECUENTES</a></li>
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
                    <h1 className='' >RADIADORES <span className='text-white' >GRAMAJO MOREIRA</span></h1>
                </div>

                <nav className="navDesktop">
                    {nav()}
                </nav>

                {open ? <div className="closeMenu" open={open} onClick={handleClick}>
                            <LazyLoadImage src={menu} alt="close"/>
                            {nav()}
                        </div>
                    :   
                        <div className="menu" open={open} onClick={handleClick}>
                            <LazyLoadImage src={menu} alt="menu"/>
                        </div>
                }
            </div>
        </header>


        <section className="sectionHome" id="home">
            <div className='mt-20 py-5 md:h-80 md:flex md:justify-center md:items-center' style={{backgroundColor: '#8B8B8B', opacity: '80%'}}>
                <div className="bgImage">
                    <img src={bgImage} alt="background" className='hidden md:flex' />
                    <img src={bgImageM} alt="background" className='flex md:hidden'/>
                </div>
                <div className="bgHome"/>
                <div className='text-center'>
                    <h1 className='m-0 text-black text-4xl font-semibold md:text-8xl' style={{textShadow: '1px 1px 2px white'}} > RADIADORES </h1>
                    <h1 className='m-0 text-white text-2xl font-semibold md:text-6xl'>GRAMAJO MOREIRA</h1>
                    <h2 className="m-0 text-white md:text-3xl">Venta y reparación</h2>
                </div>
            </div>

        </section>

    </div>
  );
}

















