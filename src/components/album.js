import PopUpImage from './popUpImage'


export default function Gallery() {
  return (
    <div className="m-auto mb-6" style={{width:'100%', maxWidth:'1100px'}}>
        <div className="aboutTitle">
            NUESTROS TRABAJOS
            </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="grid gap-4">
          <div>
            <PopUpImage src={'https://res.cloudinary.com/dyjkycesi/image/upload/f_auto,q_auto/v1/album/webp/czsst34fk6balnaxty38'} alt={'Panel para generar estatico'} />
          </div>
          <div>
            <PopUpImage src={'https://res.cloudinary.com/dyjkycesi/image/upload/f_auto,q_auto/v1/album/webp/d8xhxcmpvgajzlidsyn6'} alt={'Cambio de panel para radiador de tractor'}/>
          </div>
          <div>
            <PopUpImage src={'https://res.cloudinary.com/dyjkycesi/image/upload/f_auto,q_auto/v1/album/webp/wjeyxg1gwkn7s7lat4es'} alt={'Radiador de camion Ivecco, consecuencia de usar agua comun'}/>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <PopUpImage src={'https://res.cloudinary.com/dyjkycesi/image/upload/v1715049193/album/wp9t7if1ltwj8grii5cx.jpg'} alt={'Limpieza de enfriador de aceite para CAT'}/>
          </div>
          <div>
            <PopUpImage src={'https://res.cloudinary.com/dyjkycesi/image/upload/f_auto,q_auto/v1/album/webp/nspnv3mzjigulxf30s6v'} alt={'Fabricacion de radiador de calefaccion especial'}/>
          </div>
          <div>
            <PopUpImage src={'https://res.cloudinary.com/dyjkycesi/image/upload/f_auto,q_auto/v1/album/webp/mobhhswns8hp5p3qlfn9'} alt={'Panel recien ensamblado, listo para ser horneado'}/>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <PopUpImage src={'https://res.cloudinary.com/dyjkycesi/image/upload/f_auto,q_auto/v1/album/webp/gtthipf6zuqxu6ihfehs'} alt={'Cambio de caja supuerio en bronce para radiador de camioneta'}/>
          </div>
          <div>
            <PopUpImage src={'https://res.cloudinary.com/dyjkycesi/image/upload/f_auto,q_auto/v1/album/webp/s6pdl0pf3wowtbqhtkz7'} alt={'Gol trend recien desarmado para cambio de radiador'}/>
          </div>
          <div>
            <PopUpImage src={'https://res.cloudinary.com/dyjkycesi/image/upload/f_auto,q_auto/v1/album/webp/vs4jai7m7ht80faaelgb'} alt={'Armado de radiador nuevo para un Ford Cargo 1722'}/>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <PopUpImage src={'https://res.cloudinary.com/dyjkycesi/image/upload/v1715049617/album/cwdhbfwq1syav5ssvdut.jpg'} alt={'Cambio de raidador para VW Suran'} />
          </div>
          <div>
            <PopUpImage src={'https://res.cloudinary.com/dyjkycesi/image/upload/f_auto,q_auto/v1/album/webp/dq6xacdmhtqbjk9zgi1q'} alt={'Cambio de planel en aluminio para radiador moto enduro'}/>
          </div>
        </div>
      </div>
    </div>
  );
}
