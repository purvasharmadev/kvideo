import { createContext,useContext,useEffect } from "react";
import {useAxios} from "../Hooks/useAxios"

const VideoContext = createContext()

function VideoProvider({children}){
    const {response,error,loading,fetchData} = useAxios()
    

    useEffect(()=>{
        fetchData({
         method:"get",
         url:"/api/videos"
        })
// eslint-disable-next-line react-hooks/exhaustive-deps
    },[response])
  
    return(
        <VideoContext.Provider value={{video:response.videos,error,loading}}>
            {children}
        </VideoContext.Provider>
    )
}

const useVideo = ()=> useContext(VideoContext)

export {VideoProvider,useVideo}