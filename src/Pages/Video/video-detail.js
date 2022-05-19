import React, { useEffect} from "react";
import { useAxios } from "../../Hooks/useAxios";
import { useParams } from "react-router-dom";
import "./video-detail.css";
import { BsHeart, BsSuitHeartFill } from "react-icons/bs";
import { useLiked } from "../../Context/liked-context";
import { useWatchLater } from "../../Context/watchlater-context";
import { usePlaylist } from "../../Context/playlist-context";
import { ModalForm } from "../../Components/Modal/modalForm";

export function VideoDetail() {
  const { videoId } = useParams();
  const { response, error, loading, fetchData } = useAxios();
  const { addToLiked, likedVideo, removeFromLiked } = useLiked();
  const { watchLaterVideo, addTowatchLater, removeFromwatchLater } =
    useWatchLater();
  const {addVideoToPlaylist,openModal,setOpenModal} = usePlaylist()


  function removeFromLikedHandler(item) {
    removeFromLiked(item);
  }

  function addToLikeHandler(item) {
    addToLiked(item);
  }

  function removeFromwatchLaterHandler(item) {
    removeFromwatchLater(item);
  }

  function addTowatchLaterHandler(item) {
    addTowatchLater(item);
  }

  // <button onClick={() => setOpenModal(true)} className="btn btn-primary">
  // <BsPlusSquare/>   Add Playlist
  //   </button>


  useEffect(() => {
    fetchData({
      method: "get",
      url: `/api/video/${videoId}`
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  let item = response.video;

  return (
    <>
      {loading &&   <div className="flex flex-space-center align-item-center h-100">loading....</div>}
      {error && <h2>{error}</h2>}
      {response.length !== 0 ? (
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
                    Category:{" "}
                    <span className="color-info"> {item.category}</span>
                  </p>
                  <p>
                    Language: <span className="color-info"> {item.lang}</span>
                  </p>
                  <p>
                    Subtitle:{" "}
                    <span className="color-info"> {item.subtitle}</span>
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
                  {watchLaterVideo.findIndex((i) => i._id === item._id) ===
                  -1 ? (
                    <button
                      onClick={() => addTowatchLaterHandler(item)}
                      className="btn btn-primary"
                    >
                      {" "}
                      + Add To Watchlist{" "}
                    </button>
                  ) : (
                    <button
                      onClick={() => removeFromwatchLaterHandler(item)}
                      className="btn btn-secondary"
                    >
                      {" "}
                      -Remove From Watchlist{" "}
                    </button>
                  )}

                  <button onClick={() => setOpenModal(true)} className="btn btn-primary">
                    {" "}
                    + Create Playlist{" "}
                  </button>
                  {likedVideo.findIndex((i) => i._id === item._id) === -1 ? (
                    <>
                      <span
                        onClick={() => addToLikeHandler(item)}
                        className="text-md"
                      >
                        {" "}
                        <BsHeart />
                      </span>
                      <span>Like</span>
                    </>
                  ) : (
                    <>
                      <span
                        onClick={() => removeFromLikedHandler(item)}
                        className="text-md"
                      >
                        {" "}
                        <BsSuitHeartFill />
                      </span>
                      <span>Unlike</span>
                    </>
                  )}
                </div>
              </div>
              {openModal && (
      <div className="modal-div">
        <ModalForm closeModal={setOpenModal} item={item} />
      </div>
    )}
              <div 
               className="iframe-responsive w-100">
                   <iframe
                     height="100%"
                     width="100%"
                     src={item.trailer}
                     title="YouTube video player"
                     frameBorder="0"
                     allow="accelerometer;
                      autoplay; 
                      clipboard-write; 
                      encrypted-media; 
                      gyroscope; 
                      picture-in-picture"
                    allowFullScreen
                   ></iframe>
                 

              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
