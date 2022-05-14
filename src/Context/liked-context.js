import { createContext,useContext,useEffect,useState } from "react";
// import {useAxios} from "../Hooks/useAxios"
import axios from "axios";
import { toast } from "react-toastify";

const LikedContext = createContext()

function LikedProvider({children}){
    // const {response,error,loading,fetchData} = useAxios();
    const [likedVideo, setLikedVideo] = useState([])

    const api = "/api/user/likes"
  // Function to handle items addition to Liked
  async function addToLiked(item) {
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
            console.log("ress ", res.data.likes)
            setLikedVideo(res.data.likes);
            toast.success("You liked!",{id:"like-success",position: toast.POSITION.TOP_RIGHT,
            autoClose:2000})
      
          }
  
      }
     catch (error) {
      console.log("error is: ", error);
      toast.error(error.response.data.errors[0],{id:"like-error",position: toast.POSITION.TOP_RIGHT,
      autoClose:2000})
    }
  }


  async function removeFromLiked(item) {
    try {
      const res = await axios.delete(`api/user/likes/${item._id}`, {
        headers: {
          "content-type": "text/json",
          authorization: localStorage.getItem("userToken"),
        },
      });
      if (res.status === 200) {
        console.log("ress ", res.data.likes)
        setLikedVideo(res.data.likes);
        toast.success("You unliked!",{id:"like-remove-success",position: toast.POSITION.TOP_RIGHT,
        autoClose:2000})
      }
    } catch (error) {
      console.log("error is :", error);
      toast.error(error.response.data.errors,{id:"like-remove-error",position: toast.POSITION.TOP_RIGHT,
      autoClose:2000})

    }
  }




// function addToLiked(item){
//         fetchData({
//             method:"post",
//             url:api,
//             data:{ video: item },
//             headers: {
//                 "content-type": "text/json",
//                 authorization: localStorage.getItem("userToken"),
//             },
//         });
//         setLikedVideo(response.likes)
//         console.log("res addToLike ", response.likes)
// }

// useEffect(()=>{
//     if(likedVideo.length > 0){
//         return likedVideo
//     }
// },[likedVideo])

console.log("likedVideo ", likedVideo)


    return(
        <LikedContext.Provider value={{likedVideo,addToLiked,removeFromLiked}}>
            {children}
        </LikedContext.Provider>
    )
}

const useLiked = ()=> useContext(LikedContext)

export {LikedProvider,useLiked}