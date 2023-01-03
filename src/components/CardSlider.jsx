import React, { useState, useRef } from "react";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Box from "@mui/material/Box";

import OneCard from "./OneCard";
import cardData from "../data/cardData";

function CardSlider() {

    let scrl = useRef(null);
    const [scrollStart, setScrollStart] = useState(0);
    const [scrollEnd, setScrollEnd] = useState(false);

    const slide = (shift) => {
        scrl.current.scrollLeft += shift;
        setScrollStart(scrollStart + slide); //update lates scroll start position
        (Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) ?
        setScrollEnd(true) : setScrollEnd(false);
      };

    const handleLeftArrowClick = () => slide(-1000);
    const handleRightArrowClick = () => slide(+1000);

    //Check scroll event
    const checkScroll = () => {
        setScrollStart(scrl.current.scrollLeft);
        (Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) ?
        setScrollEnd(true) : setScrollEnd(false);
    }

    function CreateCard(cardData, index) {
        return (
            <OneCard 
              key={index}
              id={cardData.id}
              title={cardData.title}  
              text={cardData.text}
              image={cardData.image}
              actionText={cardData.actionText}
              cardHref={cardData.cardHref}
            />
        );
    }

    return (
            <div>
                <h2>Slider with cards example</h2> 
                <div className="slider-container"> 
                    {scrollStart !==0 && (
                    <Box className="left-button-box" sx={{display: {xs: "none", md: "block"} }}>
                        <button 
                        className="slider-button-left"
                        onClick={handleLeftArrowClick} >
                            <i><ChevronLeftIcon fontSize="inherit"></ChevronLeftIcon></i>
                        </button>
                    </Box>    
                    )}
                    {!scrollEnd && (
                    <Box className="right-button-box" 
                    sx={{display: {xs: "none", md: "block"} }}
                    >
                        <button 
                        className="slider-button-right"
                        onClick={handleRightArrowClick} >
                            <i><ChevronRightIcon fontSize="inherit"></ChevronRightIcon></i>
                        </button>
                    </Box> )}
                    <div className="slider" ref={scrl} onScroll={checkScroll}>   
                       {cardData.map(CreateCard)}  
                    </div>
                </div>
            </div>
    );
}

export default CardSlider;