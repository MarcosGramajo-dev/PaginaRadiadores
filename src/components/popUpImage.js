import React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogBody,
  Card,
  DialogHeader,
} from "@material-tailwind/react";
import close from '../images/close.svg'
 
export default function PopUpImage(props) {
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen((cur) => !cur);
 
  return (
    <>
      <Card
        // className="h-64 w-96 cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
        onClick={handleOpen}
      >
        <img
          alt="nature"
          className="h-full w-full object-cover object-center cursor-pointer"
          src={props.src}
        />
      </Card>
       <Dialog size="xl" open={open} handler={handleOpen}>
       <DialogHeader className="justify-between">
            <h2>{props.alt}</h2>
            <img className="h-10 cursor-pointer" src={close} alt='close' onClick={handleOpen}/>
       </DialogHeader>
        <DialogBody className="flex justify-center items-center">
          <img
            alt="nature"
            className="h-full rounded-lg object-cover object-center"
            src={props.src}
          />
        </DialogBody>
      </Dialog>
    </>
  );
}