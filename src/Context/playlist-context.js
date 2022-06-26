import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const PlaylistContext = createContext();

function PlaylistProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const [PlaylistVideo, setPlaylistVideo] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [videoList, setVideoList] = useState([]);


  // Get Playlist
  async function getPlaylist() {
    try {
      const res = await axios.get("/api/user/playlists", {
        headers: {
          "content-type": "text/json",
          authorization: localStorage.getItem("userToken"),
        },
      });
      setPlaylist(res.data.playlists);
    } catch (error) {
      toast.error(error.response.data.errors[0], {
        id: "Playlist-error",
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });

    }
  }

  
  // Get the videos in playlist
  async function getVideoList(id) {
    try {
      const res = await axios.get(`/api/user/playlists/${id}`, {
        headers: {
          "content-type": "text/json",
          authorization: localStorage.getItem("userToken"),
        },
      });

      setVideoList(res.data.playlist.videos);
    } catch (error) {
      toast.error(error.response.data.errors[0], {
        id: "Playlist-error",
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });

    }
  }

  // Function to handle items addition to Playlist
  async function CreatePlaylist(item) {
    try {
      const res = await axios.post(
        "/api/user/playlists",
        { playlist: item },
        {
          headers: {
            "content-type": "text/json",
            authorization: localStorage.getItem("userToken"),
          },
        }
      );
      setPlaylistVideo(res.data.playlists);
      toast.success("Playlist created successfully!", {
        id: "Playlist-success",
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    } catch (error) {
      toast.error(error.response.data.errors[0], {
        id: "Playlist-error",
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    }
  }

  // Delete playlist
  async function DeletePlaylist(playlistId) {
    console.log("id ", playlistId);
    try {
      const res = await axios.delete(
        `/api/user/playlists/${playlistId}`,
        // { playlist: item },
        {
          headers: {
            "content-type": "text/json",
            authorization: localStorage.getItem("userToken"),
          },
        }
      );
      setPlaylistVideo(res.data.playlists);
      // setVideoList(res.data.playlists)
      toast.error("Delete Successfull", {
        id: "Playlist-error",
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    } catch (error) {
      toast.error(error.response.data.errors[0], {
        id: "Playlist-error",
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    }
  }

  // add video to playlist
  async function addVideoToPlaylist(playlistId, item) {
    try {
      await axios.post(
        `/api/user/playlists/${playlistId}`,
        { video: item },
        {
          headers: {
            "content-type": "text/json",
            authorization: localStorage.getItem("userToken"),
          },
        }
      );
      toast.success("Video Added!", {
        id: "PlaylistAddVideo-error",
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      setOpenModal(false)
    } catch (error) {
      toast.error(error.response.data.errors[0], {
        id: "PlaylistAddVideo-error",
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    }
  }

  // remove video from playlist
  async function removeVideoFromPlaylist(playlistId, item) {
    try {
      const res = await axios.delete(
        `/api/user/playlists/${playlistId}/${item._id}`,
        {
          headers: {
            "content-type": "text/json",
            authorization: localStorage.getItem("userToken"),
          },
        }
      );
        setVideoList(res.data.playlist.videos);
        toast.error("Removed from playlist", {
          id: "Playlist-remove-success",
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
    } catch (error) {
      toast.error(error.response.data.errors[0], {
        id: "Playlist-remove-error",
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    }
  }

  useEffect(() => {
    getPlaylist();
  }, [PlaylistVideo]);

  return (
    <PlaylistContext.Provider
      value={{
        PlaylistVideo,
        CreatePlaylist,
        DeletePlaylist,
        removeVideoFromPlaylist,
        addVideoToPlaylist,
        openModal,
        setOpenModal,
        playlist,
        setPlaylist,
        videoList,
        setVideoList,
        getVideoList,
        getPlaylist,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
}

const usePlaylist = () => useContext(PlaylistContext);

export { PlaylistProvider, usePlaylist };
