import { createContext, useContext, useState } from "react";
import axios from "axios";


const WatchHistoryContext = createContext();

function WatchHistoryProvider({ children }) {
  const [WatchHistoryVideo, setWatchHistoryVideo] = useState([]);

  const api = "/api/user/history";
  // Function to handle items addition to WatchHistory
  async function addToWatchHistory(item) {
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
        setWatchHistoryVideo(res.data.history);
      }
    } catch (error) {
      console.error(error.response.data.errors[0])
    }
  }

  async function removeFromWatchHistory(item) {
    try {
      const res = await axios.delete(`/api/user/history/${item._id}`, {
        headers: {
          "content-type": "text/json",
          authorization: localStorage.getItem("userToken"),
        },
      });
      if (res.status === 200) {
        setWatchHistoryVideo(res.data.history);
      }
    } catch (error) {
      console.error(error.response.data.errors[0])
    }
  }

  async function deleteHistory() {
    try {
      const res = await axios.delete(
        "/api/user/history/all",
        {
          headers: {
            "content-type": "text/json",
            authorization: localStorage.getItem("userToken"),
          },
        }
      );
      if (res.status === 200) {
        setWatchHistoryVideo(res.data.history);
      }
    } catch (error) {
      console.error(error.response.data.errors[0])
    }
  }


  return (
    <WatchHistoryContext.Provider
      value={{ WatchHistoryVideo, addToWatchHistory, removeFromWatchHistory,deleteHistory }}
    >
      {children}
    </WatchHistoryContext.Provider>
  );
}

const useWatchHistory = () => useContext(WatchHistoryContext);

export { WatchHistoryProvider, useWatchHistory };
