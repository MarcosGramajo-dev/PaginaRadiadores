import React from "react";
import { useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  Dialog,
  DialogBody,
  Card,
  DialogHeader,
} from "@material-tailwind/react";
import close from '../images/close.svg'
 
const PopUpImage = (props) => {
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen((cur) => !cur);
 
  return (
    <>
      <Card
        // className="h-64 w-96 cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
        onClick={handleOpen}
      >
        <LazyLoadImage
          alt="nature"
          className="h-full w-full object-cover object-center cursor-pointer"
          src={props.src}
        />
      </Card>
       <Dialog size="xl" open={open} handler={handleOpen}>
       <DialogHeader className="justify-between">
            <h2>{props.alt}</h2>
            <LazyLoadImage className="h-10 cursor-pointer" src={close} alt='close' onClick={handleOpen}/>
       </DialogHeader>
        <DialogBody className="flex justify-center items-center">
          <LazyLoadImage
            alt="nature"
            className="h-full rounded-lg object-cover object-center"
            src={props.src}
          />
        </DialogBody>
      </Dialog>
    </>
  );
}

export default React.memo(PopUpImage)