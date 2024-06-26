import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
  } from "@material-tailwind/react";
  //import { HomeIcon, BellIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

import point1 from '../images/point1.svg'
import point2 from '../images/point2.svg'
import point3 from '../images/point3.svg'
   
const BannerMobile = () => {
    return (
      <div className="w-[32rem] block md:hidden px-4">
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2 bg-[#7fb26f]">
                <LazyLoadImage alt="point1" src={point1}  className="w-12"/>
                {/* <HomeIcon className="h-4 w-4" /> */}
              </TimelineIcon>
              <Typography variant="h5" color="white">
                <p >Contactenos por <a href="#contact">Aqui</a></p>
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">

            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2 bg-[#7fb26f]">
                <LazyLoadImage src={point2} alt="point2" className="w-12"/>
                {/* <BellIcon className="h-4 w-4" /> */}
              </TimelineIcon>
              <Typography variant="h5" color="white">
              <p  >Realizamos la cotizacion</p>
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">

            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader>
              <TimelineIcon className="p-2 bg-[#7fb26f]">
                <LazyLoadImage src={point3} alt="point3" className="w-12"/>
              </TimelineIcon>
              <Typography variant="h5" color="white">
                <p>Todos nuestros trabajos tienen una garantia de 6 meses</p>
              </Typography>
            </TimelineHeader>
            <TimelineBody>

            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    );
  }

  export default React.memo( BannerMobile)