import React,{useState,useEffect} from 'react';
import './headerCarousel.css';
import { headCarousel } from '../../backend/db/carousel';

import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill
  } from "react-icons/bs";


function HeaderCarousel() {
    const [index, setIndex] =useState(0) 
    let timer;
    const stopTimeout = ()=>{
      window.clearTimeout(timer)
    }
   

    useEffect(()=>{
      timer = setTimeout(()=>{
        index < 2 ? setIndex(index+1):setIndex(0)
      },4500)
    },[index])

    return (
      <>
        <div
          style={{
            backgroundImage: `url(${headCarousel[index].img})`,
            transition:"all 2s"
          }}
          className="carousel-container flex flex-space-between align-item-center"
        >
          <div
            onClick={() => {
              index === 0 ? setIndex(0) : setIndex(() => index - 1);
              stopTimeout()
            }}
            className="carousel-left p-1"
          >
            <button className="btn-float">
              {" "}
              <BsFillArrowLeftCircleFill />
            </button>
          </div>
          <div className="carousel-center">
            <span className="ecom-badge m-1">{headCarousel[index].category}</span>
            <h2 className="carousel-text">{headCarousel[index].title}</h2>
          </div>
          <div
            onClick={() => {
              index === headCarousel.length - 1
                ? setIndex(0)
                : setIndex(() => index + 1);
                stopTimeout()
            }}
            className="carousel-right p-1 "
          >
            <button className="btn-float">
              {" "}
              <BsFillArrowRightCircleFill />
            </button>
          </div>
        </div>
  </>
  )
}

export default HeaderCarousel