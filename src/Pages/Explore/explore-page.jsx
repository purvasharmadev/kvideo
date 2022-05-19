import "./explore-page.css";
import { useEffect,useState } from "react";

import { useVideo } from "../../Context/video-context";
import { useWatchLater } from "../../Context/watchlater-context";
import { BsFillBookmarkPlusFill, BsFillTrashFill } from "react-icons/bs";
import {useWatchHistory} from "../../Context/watchhistory-context";
import { useNavigate } from "react-router-dom";
import {useCategory} from "../../Context/category-context"


function Explore() {
  // const [categories,setCategories] = useState()

  


  const navigateTo = useNavigate();
  const { video, loading,filterState,filterDispatch } = useVideo();
  // console.log("categoryId ",categoryId)
  const [allVideos,setAllVideos]= useState(video)
  const {category} = useCategory()
  // console.log("cate ", category)
  console.log("all video ", allVideos)
  // console.log("state ", filterState)
  // console.log("video ", video)

  const { watchLaterVideo, addTowatchLater, removeFromwatchLater } =
    useWatchLater();
    const {addToWatchHistory} = useWatchHistory()


    const applyFilter = ()=>{
     const filteredVideo = video.filter((item)=>item.category === filterState.categoryName)
     setAllVideos(filteredVideo)
    }

    function addToWatchHistoryHandler(item){
      addToWatchHistory(item)
    }
  

  function addTowatchLaterHandler(item) {
    addTowatchLater(item);
  }

  function removeFromwatchLaterHandler(item) {
    removeFromwatchLater(item);
  }

  // useEffect(()=>{
  //   setAllVideos(video)

  // },[])

  useEffect(()=>{
    console.log("useEffect for applyFilters")
    if(filterState.categoryName){
      applyFilter()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps

  },[filterState])


  return (
    <>
      <h2 className="text-center color-primary">Explore</h2>
      <div className="flex flex-space-between w-50 m-auto flex-wrap">
      <button style={{backgroundColor : filterState.categoryName === "" ? "var(--PRIMARY-COLOR)" : "", color:filterState.categoryName === "" ? "var(--TEXT-COLOR)" : ""}} onClick={()=>{
          filterDispatch({type:"Category",payload:""})
          setAllVideos(video)
        }} className="category-btn">All</button>
      {category && category.map((item)=>{
        return <button style={{backgroundColor:item.categoryName === filterState.categoryName ? "var(--PRIMARY-COLOR)":"",color:item.categoryName === filterState.categoryName ? "var(--TEXT-COLOR)":""}} onClick={()=>{
          applyFilter()
          filterDispatch({type:"Category",payload:item.categoryName})
        }} className="category-btn">{item.categoryName}</button>
      } )}
      </div>
   
      <div className="card-container mb-1">
        {loading &&             <div className="flex flex-space-center align-item-center h-100">loading.....</div>}
        {allVideos &&
          allVideos.map((item) => {
            return (
              <div className="video-card">
                <div
                  onClick={() => {
                    navigateTo(`/explore/${item._id}`);
                    addToWatchHistoryHandler(item)
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
                  {watchLaterVideo.findIndex((i) => i._id === item._id) !==
                  -1 ? (
                    <span
                      onClick={() => removeFromwatchLaterHandler(item)}
                      className="btn-watchlist"
                    >
                      <BsFillTrashFill />
                    </span>
                  ) : (
                    <span
                      onClick={() => addTowatchLaterHandler(item)}
                      className="btn-watchlist"
                    >
                      <BsFillBookmarkPlusFill />
                    </span>
                  )}
                </div>
                <div className="video-body">
                  <h2 className="video-name">{item.title}</h2>
                  {item.category === "Movie" || "Reality" ? (
                    <h6 className="video-info">{item.category}</h6>
                  ) : (
                    <h6 className="video-info">
                      {item.season} Season, {item.episode} Episodes
                    </h6>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export { Explore };
