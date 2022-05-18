import React, { useState, useEffect } from "react";
import { usePlaylist } from "../../Context/playlist-context";
import { BsPlusSquare,BsFillBookmarkPlusFill } from "react-icons/bs";
import { ModalForm } from "../../Components/Modal/modalForm";
// import axios from "axios";
// import {VideoCard} from "../../Components/videos/videoCard";

function Playlists() {
  const [playlistName, setPlaylistName] = useState(null);
  // const [playlist, setPlaylist] = useState([]);
  // const [videoList,setVideoList]= useState([])
  const { openModal, setOpenModal,DeletePlaylist,playlist,videoList,setVideoList,getVideoList,removeVideoFromPlaylist } =
    usePlaylist();

    const deletePlaylistHandler =  (item) =>{
      DeletePlaylist(item)
      setVideoList([])
    }

    const deleteVideoFromPlaylistHandler =(playlistId,item)=>{
      removeVideoFromPlaylist(playlistId,item)
    }

  //   async function getPlaylist() {
  //     try {
  //       const res = await axios.get("/api/user/playlists", {
  //         headers: {
  //           "content-type": "text/json",
  //           authorization: localStorage.getItem("userToken"),
  //         },
  //       });
  //       setPlaylist(res.data.playlists);
  //       // console.log("res ", res)
  //     } catch (error) {
  //       console.error("error ", error.response.data.errors[0]);
  //     }
  //   }

  // async function getVideoList(id) {
  //   try {
  //     const res = await axios.get(`/api/user/playlists/${id}`, {
  //       headers: {
  //         "content-type": "text/json",
  //         authorization: localStorage.getItem("userToken"),
  //       },
  //     });
  //     setVideoList(res.data.playlist.videos);
  //   } catch (error) {
  //     console.error("error ", error.response.data.errors[0]);
  //   }
  // }

  useEffect(() => {
      getVideoList(playlistName);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playlistName]);

  // useEffect(()=>{
  //   getPlaylist()
  // },[playlist])
  return (
    <>
      <div className="playlist">
        <div className="flex flex-space-between align-item-center m-1">
          <h2 className="color-primary text-center">Your Playlists</h2>
          <button
            onClick={() => setOpenModal(true)}
            className="btn btn-primary"
          >
            <BsPlusSquare /> Add Playlist
          </button>
          {openModal && (
            <div className="modal-div">
              <ModalForm closeModal={setOpenModal} />
            </div>
          )}
        </div>
        <div className="playlist-sidebar flex flex-space-evenly flex-wrap w-100">
          {playlist &&
            playlist.map((item) => {
              return (
                <>
                <button
                  onClick={() => setPlaylistName(item._id)}
                  className="color-primary btn btn-playlist p-0 text-center mb-1"
                >
                  {item.title}
                </button>
               <span onClick={()=>deletePlaylistHandler(item._id)}>Delete</span>
               </>
              );
            })}
        </div>
        <div className="p-1 flex flex-space-center m-1">
          {videoList ? (
            videoList.map((item) => {
              // console.log("item ",item)
              return (
                <div className="video-card">
                <div className="video-img">
                  <img
                    className="img-responsive video-img"
                    src={item.poster}
                    alt={item.title}
                  />{" "}
                </div>
                <div className="video-operation">
                  <span onClick={()=>deleteVideoFromPlaylistHandler(playlistName,item)} className="btn-watchlist">
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
            })
          ) : (
            <h6>Add videos or Click on you playlist to get all your videos</h6>
          )
          }
        </div>
      </div>
    </>
  );
}

export { Playlists };
