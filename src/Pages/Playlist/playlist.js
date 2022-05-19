import React, { useState, useEffect } from "react";
import { usePlaylist } from "../../Context/playlist-context";
import { BsPlusSquare,BsFillBookmarkPlusFill,BsFillTrashFill } from "react-icons/bs";
import { ModalForm } from "../../Components/Modal/modalForm";

function Playlists() {
  const [playlistName, setPlaylistName] = useState(null);

  const { openModal, setOpenModal,DeletePlaylist,playlist,videoList,setVideoList,getVideoList,removeVideoFromPlaylist } =
    usePlaylist();

    const deletePlaylistHandler =  (item) =>{
      DeletePlaylist(item)
      setVideoList([])
      setPlaylistName(null)
    }

    const deleteVideoFromPlaylistHandler =(playlistId,item)=>{
      removeVideoFromPlaylist(playlistId,item)
    }

  useEffect(() => {
      getVideoList(playlistName);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playlistName]);


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
                <div>
                <button
                  onClick={() => setPlaylistName(item._id)}
                  className="color-primary btn btn-playlist p-0 text-center mb-1"
                >
                  {item.title}
                </button>
               <span className="btn-playlist p-0 color-danger" onClick={()=>deletePlaylistHandler(item._id)}><BsFillTrashFill/></span>
                </div>

               </>
              );
            })}
        </div>
        <div className="p-1 flex flex-space-center m-1">

          {videoList.length !== 0 ? (
            videoList.map((item) => {
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
            <div className="flex flex-space-center align-item-center h-100">
                <h3>Add videos or Click on your playlist to get all your videos</h3>
            </div>
          )
          }
        </div>
      </div>
    </>
  );
}

export { Playlists };
