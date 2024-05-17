import { LazyLoadImage } from 'react-lazy-load-image-component';

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
                    <LazyLoadImage src={shopBanner} alt=""/>
                </article>

                <article>
                    <LazyLoadImage src={facebanner} alt=""/>
                </article>

                <article>
                    <LazyLoadImage src={toolsBanner} alt=""/>
                </article>
            </div>

            <div className="flex justify-center items-center px-4 py-6 gap-2 md:hidden">
                <article className='relative'>
                    <LazyLoadImage src={shopBannerM} alt=""/>
                </article>

                <article>
                    <iLazyLoadImagemg src={facebannerM} alt=""/>
                </article>

                <article>
                    <LazyLoadImage src={toolsBannerM} alt=""/>
                </article>
            </div>
        </div>
    )
}


















