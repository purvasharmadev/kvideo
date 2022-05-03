import React from "react";
import { useParams } from "react-router-dom";
import { useVideo } from "../../Context/video-context";

export function VideoDetail() {
    const { video } = useVideo()
  const { videoId } = useParams();
  const matchId = (item) => item._id === videoId;

  console.log("here it is...", video)
  return (
    <div className="m-top">
      {" "}
      {video.filter(matchId).map((item) => {
        return (
          <>
            <h6>{item.title}</h6>
            <img className="img-responsive" src={item.poster} alt={item.title}/>
          </>
        );
      })}
    </div>
  );
}
