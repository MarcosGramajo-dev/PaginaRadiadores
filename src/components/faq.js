import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
export default function Faq() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <div>
        <div className="flex justify-center py-8 min-h-[60vh] p-4" id='faq'>
            <div className="max-w-[1100px]">
                <div>
                    <h3 className="aboutTitle">
                    PREGUNTAS FRECUENTES
                    </h3>
                </div>  
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(1)}>¿QUÉ TIPOS DE RADIADORES PUEDO ENCONTRAR EN SU TALLER?</AccordionHeader>
                    <AccordionBody className='text-lg'>
                        En nuestro taller, ofrecemos una amplia variedad de radiadores para autos y camionetas, fabricados tanto en plástico como en aluminio. Además, realizamos mantenimiento y reparación de radiadores para maquinaria agrícola y generadores, incluyendo radiadores de cobre y bronce.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(2)}>
                    ¿QUÉ SERVICIOS DE REPARACIÓN OFRECEN PARA LOS RADIADORES?
                    </AccordionHeader>
                    <AccordionBody className='text-lg'>
                    En nuestro taller, nos especializamos en servicios completos para radiadores, incluyendo limpieza, reparaciones por pinchaduras, cambios de caja, fabricación de radiadores especiales y colocación de radiadores en los vehículos.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(3)}>
                    ¿CUÁNTO TIEMPO TARDA EN REPARARSE UN RADIADOR EN SU TALLER?
                    </AccordionHeader>
                    <AccordionBody className='text-lg'>
                    Entendemos la importancia de una reparación rápida. Por ello, nos esforzamos por completar todos los trabajos en menos de 24 horas. Sin embargo, en algunos casos complejos, puede llevar un poco más de tiempo.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(4)}>
                    ¿QUÉ CONSEJOS ME PUEDEN DAR PARA MANTENER MI RADIADOR EN BUEN ESTADO?
                    </AccordionHeader>
                    <AccordionBody className='text-lg'>
                    Es fundamental evitar el uso de agua común o aditivos sin la supervisión de un experto. Recomendamos realizar una limpieza superficial del radiador cada 2 años, especialmente si el vehículo se utiliza para trabajos pesados.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(5)}>
                    ¿MI VEHÍCULO PUEDE BENEFICIARSE DE SUS SERVICIOS DE REPARACIÓN DE RADIADORES?
                    </AccordionHeader>
                    <AccordionBody className='text-lg'>
                    Ofrecemos servicios para una amplia gama de vehículos, desde automóviles y camionetas hasta maquinaria agrícola y generadores. Sea cual sea tu necesidad, estamos aquí para ayudarte con tu radiador.
                    </AccordionBody>
                </Accordion>
            </div>
        </div>
        <div style={{backgroundColor: '#18181B', color: '#ffffff', width: '100%', textAlign: 'center', marginTop: '30px'}}>
            <p>Marcos Gramajo desarrollador Front-End. <a style={{color:'#ffffff'}} href='https://marcosgramajo.com.ar/' target='_blanck'>Portfolio</a></p>
        </div>
    </div>
  );
}