import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const[number,setnumber]=useState(0);

    function Handleleftarrow(){
        setnumber((prevnumber)=>(prevnumber===0? images.length-1 : prevnumber-1))
    }

   function Handlerightarrow(){
        setnumber((prevnumber)=>(prevnumber===images.length-1? 0 : prevnumber+1))
    }

    const presentimg = images[number]

    return(
        <div className="total">
    <div className="arrange">
        <div className="title">{presentimg.title}</div>
        <div className="subtitle">{presentimg.subtitle}</div>
    </div>
        <ArrowBackIosIcon onClick={Handleleftarrow} className="first arrow"/>
        <img src={presentimg.img} alt="" className="image"/>
        <ArrowForwardIosIcon onClick={Handlerightarrow} className="second arrow"/>
        </div>
    )
}

export default Carousel;