import { createContext, useContext, useEffect, useReducer } from "react";
import { useAxios } from "../Hooks/useAxios";

const VideoContext = createContext();

function VideoProvider({ children }) {
  const { response, error, loading, fetchData } = useAxios();

  function filterReducer(state, action) {
    switch (action.type) {
      case "Category":
        return {
          ...state,
          categoryName: action.payload,
        };

      default:
        return state;
    }
  }
  //  Filter Reducer
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    search_query: "",
    categoryName: "",
  });

  //   console.log("filterState: ", filterState);

  useEffect(() => {
    fetchData({
      method: "get",
      url: "/api/videos",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  return (
    <VideoContext.Provider
      value={{
        video: response.videos,
        error,
        loading,
        filterDispatch,
        filterState,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
}

const useVideo = () => useContext(VideoContext);

export { VideoProvider, useVideo };
