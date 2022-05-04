import React from 'react'
import HeaderCarousel from '../../Components/headerCarousel/headerCarousel';
import {CategoryList} from "../../Components/category/categoryList"

function HomePage() {
  return (
    <>
    <HeaderCarousel/>
    <CategoryList/>
    </>

  )
}

export {HomePage}