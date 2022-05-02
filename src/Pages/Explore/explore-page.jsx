import "./explore-page.css";
import {useVideo} from "../../Context/video-context";
import {
  BsFillBookmarkPlusFill
} from "react-icons/bs";


function Explore() {
    const {video,loading,error} = useVideo()

  return (
    <>
    <h2 className="text-center color-primary">Explore</h2>
    <div className="card-container mb-1">
        {loading && <h1>loading.....</h1>}
        {
            video && video.map((item)=>{
                return(
                    <div className="video-card">
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
                      <h6 className="video-info">
                        {item.season} season, {item.episode} episodes
                      </h6>
                    </div>
                  </div>
                )
            }
            )
        }
    </div>
    </>
  );
}

export {Explore};
