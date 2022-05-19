import React from "react";
import { useNavigate } from "react-router-dom";
import { useVideo } from "../../Context/video-context";

function CategoryCard(props) {
  const navigateTo = useNavigate();
  const { filterDispatch } = useVideo();

  const navigateToExplorePage = () => {
    filterDispatch({ type: "Category", payload: props.Name });
    navigateTo(`/explore/`);
  };
  return (
    <>
      <div onClick={navigateToExplorePage} className="card card-overlay">
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
  );
}

export { CategoryCard };
