import React from "react";
import { useWatchLater } from "../../Context/watchlater-context";
import { BsFillTrashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function WatchLaterVideo() {
  const navigateTo = useNavigate();
  const { watchLaterVideo, removeFromwatchLater } = useWatchLater();

  function removeFromwatchLaterHandler(item) {
    removeFromwatchLater(item);
  }
  return (
    <>
      <h2 className="text-center color-primary">watchLater Videos</h2>
      <div className="card-container mb-1">
        {watchLaterVideo.length > 0 ? (
          watchLaterVideo.map((item) => {
            return (
              <div className="video-card">
                <div
                  onClick={() => {
                    console.log("clicked!!");
                    navigateTo(`/explore/${item._id}`);
                  }}
                  className="video-img"
                >
                  <img
                    className="img-responsive video-img"
                    src={item.poster}
                    alt={item.title}
                  />{" "}
                </div>
                <div className="video-operation">
                  <span
                    onClick={() => removeFromwatchLaterHandler(item)}
                    className="btn-watchlist"
                  >
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
          })
        ) : (
          <div className="flex flex-space-center align-item-center h-100">
            <h2>You dont have any watchLater video! </h2>
          </div>
        )}
      </div>
    </>
  );
}

export { WatchLaterVideo };
