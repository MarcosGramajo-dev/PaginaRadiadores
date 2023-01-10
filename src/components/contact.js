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
                        <h3>TE ESPERAMOS!</h3>
                    </div>
                    <div className="local">
                        <p>LOCAL:</p>
                        <p>AV JUAN B JUSTO 2649</p>
                        <p>SAN MIGUEL DE TUCUMÁN - TUCUMÁN</p>
                    </div>
                    <div className="telefono">
                        <p>TELEFONOS</p>
                        <p>381-4552069 | 381-5355689</p>
                    </div>
                    <div className="contacto">
                        <p>HORARIOS:</p>
                        <p>LUNEA A VIERNES</p>
                        <p>8 A 18 HS</p>
                    </div>
                    <div className="iconsContact">
                        <a href="https://wa.me/5493815355689" target="_blank" rel="noreferrer"><img src={whatsapp} alt="whatsapp"/></a>
                        <a href="google.com" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook"/></a>
                        <a href="https://www.google.com/search?q=radiadores+gramajo+moreira&rlz=1C1ALOY_esAR1034AR1034&sxsrf=AJOqlzW5H7-gd-2cd4Gyv2IbSgtrapKWOQ%3A1673372419662&ei=A6O9Y7eNKPC_5OUPsviHqAI&gs_ssp=eJzj4tZP1zcsyU42LzapNGC0UjWosDQxMjJNtTAwM01KNU8zTrMyqEizNLJIS0w0T0kzSDExMrT0kipKTMlMTMkvSi1WSC9KzE3MylfIBfIyixIBrqwZIg&oq=radiado&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgBMgQIIxAnMgoILhDHARCvARAnMgQIIxAnMgUIABCABDILCC4QgAQQxwEQrwEyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDITCC4QxwEQrwEQ3AQQ3QQQ4AQYAjoHCCMQsAMQJzoKCAAQRxDWBBCwAzoECAAQQzoLCC4QgAQQxwEQ0QM6CgguEMcBENEDEEM6BQguEIAEOgcIABCABBAKOgcIIxDqAhAnOg0ILhDHARDRAxDqAhAnOgwIABDqAhC0AhBDGAE6DggAEOoCELQCEAoQQxgBOggILhCABBDUAkoECEEYAEoECEYYAVDHA1j8GWDJKGgGcAF4AIABkQGIAb8JkgEEMC4xMJgBAKABAbABEcgBCsABAdoBBggBEAEYAdoBBggCEAEYFA&sclient=gws-wiz-serp" target="_blank" rel="noreferrer"><img src={location} alt="ubicacion"/></a>
                    </div>
                </div>
                <></>

            </div>
        </div>
    )
}