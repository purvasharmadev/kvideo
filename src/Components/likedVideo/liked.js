import React from 'react';
import { useLiked } from "../../Context/liked-context";
import { BsFillBookmarkPlusFill,BsSuitHeart } from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import { useAxios } from '../../Hooks/useAxios';

function LikedVideo() {
    const navigateTo = useNavigate();
    const { likedVideo, removeFromLiked } = useLiked();
  
    function removeFromLikedHandler(item){
      removeFromLiked(item)
    }
  return (
      <>
    <h2 className="text-center color-primary">Liked Videos</h2>
      <div className="card-container mb-1">
        {/* {loading && <h1>loading.....</h1>} 
        onClick={() => {
                navigateTo(`/explore/${item._id}`);
              }}*/}
        {likedVideo.length > 0 ?
          likedVideo.map((item) => {
            return (
              <div className="video-card"
              >
                <div className="video-img">
                  <img
                    className="img-responsive video-img"
                    src={item.poster}
                    alt={item.title}
                  />{" "}
                </div>
                <div className="video-operation">
                  <span onClick={()=>removeFromLikedHandler(item)} className="btn-watchlist">
                    <BsFillBookmarkPlusFill />
                  </span>
                  <span onClick={()=>removeFromLikedHandler(item)} className="btn-watchlist">
                    <BsSuitHeart />
                  </span>
                </div>
                <div className="video-body">
                  <h2 className="video-name">{item.title}</h2>
                  {item.category === "Movie" || "Reality" ? (
                    <h6 className="video-info">{item.category}</h6>
                  ) : (
                    <h6 className="video-info">
                      {item.season} Season, {item.episode} Episodes
                    </h6>
                  )}
                </div>

              </div>
            );
          }):
          <div>
              <h2>You dont have any liked video! </h2>
          </div>
          
          }
      </div>

      </>
  )
}

export {LikedVideo}