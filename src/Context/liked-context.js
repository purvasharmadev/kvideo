import { createContext,useContext,useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const LikedContext = createContext()

function LikedProvider({children}){
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
            setLikedVideo(res.data.likes);
            toast.success("You liked!",{id:"like-success",position: toast.POSITION.TOP_RIGHT,
            autoClose:2000})
      
          }
  
      }
     catch (error) {
      toast.error(error.response.data.errors[0],{id:"like-error",position: toast.POSITION.TOP_RIGHT,
      autoClose:2000})
    }
  }


  async function removeFromLiked(item) {
    try {
      const res = await axios.delete(`/api/user/likes/${item._id}`, {
        headers: {
          "content-type": "text/json",
          authorization: localStorage.getItem("userToken"),
        },
      });
      if (res.status === 200) {
        setLikedVideo(res.data.likes);
        toast.success("You unliked!",{id:"like-remove-success",position: toast.POSITION.TOP_RIGHT,
        autoClose:2000})
      }
    } catch (error) {
      toast.error(error.response.data.errors[0],{id:"like-remove-error",position: toast.POSITION.TOP_RIGHT,
      autoClose:2000})

    }
  }


    return(
        <LikedContext.Provider value={{likedVideo,addToLiked,removeFromLiked}}>
            {children}
        </LikedContext.Provider>
    )
}

const useLiked = ()=> useContext(LikedContext)

export {LikedProvider,useLiked}