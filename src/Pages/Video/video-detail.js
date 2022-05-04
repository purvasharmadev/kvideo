import React from "react";
import { useParams } from "react-router-dom";
import "./video-detail.css";
import { useVideo } from "../../Context/video-context";
import { BsHeart } from "react-icons/bs";

export function VideoDetail() {
  const { video } = useVideo();
  const { videoId } = useParams();
  const matchId = (item) => item._id === videoId;
  let item = video.find(matchId);

  return (
    <div
      style={{
        backgroundImage: `url(${item.banner})`,
      }}
      className="bg-responsive"
    >
      <div className="flex flex-column bg-div bg-blur">
        {" "}
        <div className="flex vid-desc-flex align-item-center">
          <div className="color-white w-50 vid-desc">
            <h2 className="color-white vid-title">{item.title}</h2>
            {item.season && item.episode ? (
              <h5 className="vid-info">
                {" "}
                {item.season} Season, {item.episode} Episodes
              </h5>
            ) : (
              ""
            )}
            <div className="flex align-item-center vid-data ">
              <p>
                Category: <span className="color-info"> {item.category}</span>
              </p>
              <p>
                Language: <span className="color-info"> {item.lang}</span>
              </p>
              <p>
                Subtitle: <span className="color-info"> {item.subtitle}</span>
              </p>
              <p>
                Year: <span className="color-info"> {item.year}</span>
              </p>
              <p>
                Rating: <span className="color-info"> {item.rating}</span>
              </p>
            </div>
            <p>{item.description}</p>
            <div className="flex align-item-center">
              <button className="btn btn-primary"> + Add To Watchlist </button>
              <button className="btn btn-primary"> + Create Playlist </button>
              <span className="text-md">
                {" "}
                <BsHeart />
              </span>
              <span>Like</span>
            </div>
          </div>
          <iframe
            className="iframe-responsive"
            height="100%"
            src={item.trailer}
            title="YouTube video player"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
