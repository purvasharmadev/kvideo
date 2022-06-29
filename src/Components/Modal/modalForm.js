import "./modalForm.css";
import { useState } from "react";
import { usePlaylist } from "../../Context/playlist-context";
import { v4 } from "uuid";
import { BsFillXSquareFill } from "react-icons/bs";
import { toast } from "react-toastify";

export function ModalForm({ closeModal, item }) {
  const { CreatePlaylist, PlaylistVideo, addVideoToPlaylist } = usePlaylist();
  const [playlistData, setPlaylistData] = useState({
    title: "",
  });

  const addToPlaylistHandler = (id, item) => {
    addVideoToPlaylist(id, item);
  };
  const submitHandle = (e) => {
    if (playlistData.title !== "") {
      CreatePlaylist({
        _id: v4,
        title: playlistData.title,
      });
      setPlaylistData({
        title: "",
      });
    } else {
      toast.error("Please enter something", {
        id: "playlist-remove-success",
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    }

    closeModal(true);
    e.preventDefault();
  };

  return (
    <>
      <div className="modal">
        <div className="modal-body">
          <form onSubmit={submitHandle}>
            <div className="modal-header">
              <span
                onClick={() => closeModal(false)}
                className="alert-close-btn"
              >
                <BsFillXSquareFill />
              </span>
              <h3 className="color-primary">Add a Playlist</h3>
            </div>
            <div className="modal-text">
              <input
                value={playlistData.title}
                onChange={(e) => {
                  setPlaylistData((prev) => ({
                    ...prev,
                    title: e.target.value,
                  }));
                }}
                type="text"
                placeholder="enter title"
              />
            </div>
            <div className="modal-footer">
              <button type="submit" className="modal-btn">
                {" "}
                Add{" "}
              </button>
            </div>
          </form>

          <div className="flex flex-column">
            {PlaylistVideo &&
              PlaylistVideo.map((playlist) => {
                return (
                  <button
                    disabled={item ? false : true}
                    onClick={() => {
                      addToPlaylistHandler(playlist._id, item);
                    }}
                    className={
                      item
                        ? "color-primary btn btn-playlist p-0 text-center m-1"
                        : "btn-disabled color-primary btn btn-playlist p-0 text-center m-1"
                    }
                  >
                    {playlist.title}
                  </button>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

