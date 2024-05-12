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
            <PopUpImage src={'https://res.cloudinary.com/dyjkycesi/image/upload/v1715048856/album/mpvgpcydwswztknssy4k.jpg'} alt={'Panel para generar estatico'} />
          </div>
          <div>
            <PopUpImage src={'https://res.cloudinary.com/dyjkycesi/image/upload/v1715043908/album/xtugvcmxm57d4bdzfbhv.jpg'} alt={'Cambio de panel para radiador de tractor'}/>
          </div>
          <div>
            <PopUpImage src={'https://res.cloudinary.com/dyjkycesi/image/upload/v1715049101/album/xvfljcnmcmbhvewc7x2y.jpg'} alt={'Radiador de camion Ivecco, consecuencia de usar agua comun'}/>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <PopUpImage src={'https://res.cloudinary.com/dyjkycesi/image/upload/v1715049193/album/wp9t7if1ltwj8grii5cx.jpg'} alt={'Limpieza de enfriador de aceite para CAT'}/>
          </div>
          <div>
            <PopUpImage src={'https://res.cloudinary.com/dyjkycesi/image/upload/v1715049194/album/qdd9vsfgwqat5sef4ipp.jpg'} alt={'Fabricacion de radiador de calefaccion especial'}/>
          </div>
          <div>
            <PopUpImage src={'https://res.cloudinary.com/dyjkycesi/image/upload/v1715049195/album/v967p9jyxebym2sy5apf.jpg'} alt={'Panel recien ensamblado, listo para ser horneado'}/>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <PopUpImage src={'https://res.cloudinary.com/dyjkycesi/image/upload/v1715049441/album/b0xxxgrr19o4x1jvf0ft.jpg'} alt={'Cambio de caja supuerio en bronce para radiador de camioneta'}/>
          </div>
          <div>
            <PopUpImage src={'https://res.cloudinary.com/dyjkycesi/image/upload/v1715049441/album/apmxo7ntg8mmpfkn1cuf.jpg'} alt={'Gol trend recien desarmado para cambio de radiador'}/>
          </div>
          <div>
            <PopUpImage src={'https://res.cloudinary.com/dyjkycesi/image/upload/v1715049195/album/xesbrkeklxqmhkarw6li.jpg'} alt={'Armado de radiador nuevo para un Ford Cargo 1722'}/>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <PopUpImage src={'https://res.cloudinary.com/dyjkycesi/image/upload/v1715049617/album/cwdhbfwq1syav5ssvdut.jpg'} alt={'Cambio de raidador para VW Suran'} />
          </div>
          <div>
            <PopUpImage src={'https://res.cloudinary.com/dyjkycesi/image/upload/f_auto,q_auto/v1/album/yggtmlvabrotxezscqez'} alt={'Cambio de planel en aluminio para radiador moto enduro'}/>
          </div>
        </div>
      </div>
    </div>
  );
}
