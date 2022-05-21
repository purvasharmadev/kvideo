import React from 'react';
import './headerCarousel.css';
import { headCarousel } from '../../backend/db/carousel';

import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill
  } from "react-icons/bs";
  import { useState } from "react";

function HeaderCarousel() {
    const [index, setIndex] = useState(0);
      setTimeout(()=>{
        index < 2 ? setIndex(index+1):setIndex(0)
      },3000)

    return (
      <>
        <div
          style={{
            backgroundImage: `url(${headCarousel[index].img})`
          }}
          className="carousel-container flex flex-space-between align-item-center"
        >
          <div
            onClick={() => {
              index === 0 ? setIndex(0) : setIndex(() => index - 1);
            }}
            className="carousel-left p-1"
          >
            <button className="btn-float color-white">
              {" "}
              <BsFillArrowLeftCircleFill />
            </button>
          </div>
          <div style={{}} className="carousel-center">
            <span className="ecom-badge m-1">{headCarousel[index].category}</span>
            <h2 className="carousel-text">{headCarousel[index].title}</h2>
          </div>
          <div
            onClick={() => {
              index === headCarousel.length - 1
                ? setIndex(0)
                : setIndex(() => index + 1);
            }}
            className="carousel-right p-1 "
          >
            <button className="btn-float color-white">
              {" "}
              <BsFillArrowRightCircleFill />
            </button>
          </div>
        </div>
  </>
  )
}

export default HeaderCarousel