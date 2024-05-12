import shopBanner from '../images/shopBanner.svg'
import facebanner from '../images/facebanner.svg'
import toolsBanner from '../images/toolsBanner.svg'

import shopBannerM from '../images/shopBannerM.svg'
import facebannerM from '../images/facebannerM.svg'
import toolsBannerM from '../images/toolsBannerM.svg'


export default function services(){
    return(
        <div className="services flex justify-center" >
            <div className="hidden justify-center items-center px-4 py-6 gap-2 md:flex md:max-w-[1100px] md:justify-between md:gap-16">
                <article className='relative'>
                    <img src={shopBanner} alt=""/>
                </article>

                <article>
                    <img src={facebanner} alt=""/>
                </article>

                <article>
                    <img src={toolsBanner} alt=""/>
                </article>
            </div>

            <div className="flex justify-center items-center px-4 py-6 gap-2 md:hidden">
                <article className='relative'>
                    <img src={shopBannerM} alt=""/>
                </article>

                <article>
                    <img src={facebannerM} alt=""/>
                </article>

                <article>
                    <img src={toolsBannerM} alt=""/>
                </article>
            </div>
        </div>
    )
}


















