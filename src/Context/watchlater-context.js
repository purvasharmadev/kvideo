import { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const WatchLaterContext = createContext();

function WatchLaterProvider({ children }) {
  const [watchLaterVideo, setwatchLaterVideo] = useState([]);

  const api = "/api/user/watchlater";
  // Function to handle items addition to watchLater
  async function addTowatchLater(item) {
    try {
      const res = await axios.post(
        api,
        { video: item },
        {
          headers: {
            "content-type": "text/json",
            authorization: localStorage.getItem("userToken"),
          },
        }
      );
      if (res.status === 201) {
        setwatchLaterVideo(res.data.watchlater);
        toast.success("Added to watch later", {
          id: "watchLater-success",
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error(error.response.data.errors[0], {
        id: "watchLater-error",
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    }
  }

  async function removeFromwatchLater(item) {
    try {
      const res = await axios.delete(`/api/user/watchlater/${item._id}`, {
        headers: {
          "content-type": "text/json",
          authorization: localStorage.getItem("userToken"),
        },
      });
      if (res.status === 200) {
        setwatchLaterVideo(res.data.watchlater);
        toast.success("Removed from watch later", {
          id: "watchLater-remove-success",
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error(error.response.data.errors[0], {
        id: "watchLater-remove-error",
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    }
  }

  return (
    <WatchLaterContext.Provider
      value={{ watchLaterVideo, addTowatchLater, removeFromwatchLater }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
}

const useWatchLater = () => useContext(WatchLaterContext);

export { WatchLaterProvider, useWatchLater };
