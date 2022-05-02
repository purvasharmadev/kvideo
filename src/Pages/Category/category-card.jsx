import React from 'react';

function CategoryCard(props){
    return (
        <>
        <div className="card card-overlay">
          <img
            className="img-responsive w-100"
            src={props.Img}
            alt={props.Name}
          />
          <div className="card-body">
            <h3 className="card-text">{props.Name}</h3>
          </div>
        </div>        
        </>
    )
}

export {CategoryCard};
