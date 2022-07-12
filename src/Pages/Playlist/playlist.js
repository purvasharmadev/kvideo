import React, { useState, useEffect } from "react";
import { usePlaylist } from "../../Context/playlist-context";
import { BsPlusSquare, BsFillTrashFill } from "react-icons/bs";
import { ModalForm } from "../../Components/Modal/modalForm";
import { useNavigate } from "react-router-dom";
import "./playlist.css";

function Playlists() {
  const navigateTo = useNavigate();
  const {
    openModal,
    setOpenModal,
    DeletePlaylist,
    playlist,
    videoList,
    setVideoList,
    getVideoList,
    removeVideoFromPlaylist,
  } = usePlaylist();

  const [playlistId, setPlaylistId] = useState("");
  const [playlistName, setPlaylistName] = useState("");
  const deletePlaylistHandler = (item) => {
    DeletePlaylist(item);
    setVideoList([]);
    // setPlaylistId(null)
    setPlaylistName("");
  };

  const deleteVideoFromPlaylistHandler = (playlistId, item) => {
    removeVideoFromPlaylist(playlistId, item);
  };

  useEffect(() => {
    if (playlist.length !== 0) {
      getVideoList(playlist[0]._id);
      setPlaylistName(playlist[0].title);
      setPlaylistId(playlist[0]._id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getVideoList(playlistId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playlistId]);

  return (
    <>
      <div className="flex flex-space-between align-item-center m-1">
        <h2 className="color-primary text-center">Your Playlists</h2>

        <button onClick={() => setOpenModal(true)} className="btn btn-primary">
          <BsPlusSquare /> Add Playlist
        </button>
        {openModal && (
          <div className="modal-div">
            <ModalForm closeModal={setOpenModal} />
          </div>
        )}
      </div>

      <div className="playlist uppercase">
        <div className="flex align-item-center flex-wrap">
          {playlist &&
            playlist.map((item) => {
              return (
                <>
                  <button
                    onClick={() => (
                      setPlaylistId(item._id), setPlaylistName(item.title)
                    )}
                    className="color-primary btn btn-playlist p-0 text-center m-1"
                  >
                    {item.title}
                  </button>
                </>
              );
            })}
        </div>
        <div className="flex flex-space-between align-item-center">
          <h2 className="color-primary pl-1">{playlistName} </h2>
          {playlist.length !== 0 ? (
            <span
              className="pr-1 color-danger text-small"
              onClick={() => deletePlaylistHandler(playlistId)}
            >
              Delete Playlist
              <BsFillTrashFill />
            </span>
          ) : (
            ""
          )}
        </div>

        <div className="flex p-1">
          {videoList.length !== 0 ? (
            videoList.map((item) => {
              return (
                <div className="video-card transition">
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
                      onClick={() =>
                        deleteVideoFromPlaylistHandler(playlistId, item)
                      }
                      className="btn-watchlist"
                    >
                      <BsFillTrashFill />
                    </span>
                  </div>
                  <div className="video-body">
                    <h2 className="video-name">{item.title}</h2>
                    {item.category === "Drama" ? (
                      <h6 className="video-info">
                        {item.season} Season, {item.episode} Episodes
                      </h6>
                    ) : (
                      <h6 className="video-info">{item.category}</h6>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-1 w-100 text-center">
              <h2 className="color-secondary">
                Add a Video or create a new playlist!
              </h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export { Playlists };
