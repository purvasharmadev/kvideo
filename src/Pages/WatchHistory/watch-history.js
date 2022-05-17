import React from "react";
import { useWatchHistory } from "../../Context/watchhistory-context";
import { BsFillTrashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function WatchHistory() {
  const navigateTo = useNavigate();
  const { WatchHistoryVideo,removeFromWatchHistory,deleteHistory} = useWatchHistory();

  function removeFromWatchHistoryHandler(item) {
    removeFromWatchHistory(item);
  }


  return (
    <>
      <h2 className="text-center color-primary">Videos you watched!</h2>
      <div className="flex flex-space-center w-50 m-1">
      <button className="btn btn-icon" onClick={()=>deleteHistory()}>Clear All</button>
      </div>
      <div className="card-container mb-1">
        {WatchHistoryVideo.length > 0 ? (
          WatchHistoryVideo.map((item) => {
            return (
              <div className="video-card">
                <div
                  onClick={() => {
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
                    onClick={() => removeFromWatchHistoryHandler(item)}
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
          <div>
            <h2>You dont have any video! </h2>
          </div>
        )}
      </div>
    </>
  );
}

export { WatchHistory };
