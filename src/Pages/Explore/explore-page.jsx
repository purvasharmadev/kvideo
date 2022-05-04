import "./explore-page.css";
import { useVideo } from "../../Context/video-context";
import { BsFillBookmarkPlusFill } from "react-icons/bs";

import { useNavigate } from "react-router-dom";

function Explore() {
  const navigateTo = useNavigate();
  const { video, loading } = useVideo();

  return (
    <>
      <h2 className="text-center color-primary">Explore</h2>
      <div className="card-container mb-1">
        {loading && <h1>loading.....</h1>}
        {video &&
          video.map((item) => {
            return (
              <div
                onClick={() => {
                  navigateTo(`/explore/${item._id}`);
                }}
                className="video-card"
              >
                <div className="video-img">
                  <img
                    className="img-responsive video-img"
                    src={item.poster}
                    alt={item.title}
                  />{" "}
                </div>
                <div className="video-operation">
                  <span className="btn-watchlist">
                    <BsFillBookmarkPlusFill />
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
          })}
      </div>
    </>
  );
}

export { Explore };
