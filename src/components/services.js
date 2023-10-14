import shopBanner from '../images/shopBanner.svg'
import facebanner from '../images/facebanner.svg'
import toolsBanner from '../images/toolsBanner.svg'


export default function services(){
    return(
        <div className="services" id="service">
            <div className="articles">
                <article>
                    <img src={shopBanner} alt="" style={{width:'100%'}}/>
                </article>

                <article>
                    <img src={facebanner} alt="" style={{width:'100%'}}/>
                </article>

                <article>
                    <img src={toolsBanner} alt="" style={{width:'100%'}}/>
                </article>
            </div>
        </div>
    )
}


















