import React from 'react';
import { useLiked } from "../../Context/liked-context";
import { BsFillTrashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

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
        {likedVideo.length > 0 ?
          likedVideo.map((item) => {
            return (
              <div className="video-card"
              >
                <div 
                              onClick={() => {
                                console.log("clicked!!")
                                navigateTo(`/explore/${item._id}`);
                              }}
                
                className="video-img">
                  <img
                    className="img-responsive video-img"
                    src={item.poster}
                    alt={item.title}
                  />{" "}
                </div>
                <div className="video-operation">
                  <span onClick={()=>removeFromLikedHandler(item)} className="btn-watchlist">
                    <BsFillTrashFill />
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
          <div className="flex flex-space-center align-item-center h-100">
              <h2>You dont have any liked video! </h2>
          </div>
          
          }
      </div>

      </>
  )
}

export {LikedVideo}