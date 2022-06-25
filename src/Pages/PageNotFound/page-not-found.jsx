import React from 'react';
import pageNotFound from "../../Assets/Images/pageNotFound.svg";

function PageNotFound() {
  return (
    <div className='m-auto h-100 w-50 text-center'>
      <img src={pageNotFound} height="300px" alt="404"/>
      <h2>Page Not Found!</h2>
    </div>
  )
}

export  default PageNotFound;