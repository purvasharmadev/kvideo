import { createContext,useContext } from "react";
import {useAxios} from "../Hooks/useAxios"

const VideoContext = createContext()

function VideoProvider({children}){
    const {response,error,loading} = useAxios("/api/videos")

    console.log("response from context ", response)
    
    return(
        <VideoContext.Provider value={{video:response.videos,error,loading}}>
            {children}
        </VideoContext.Provider>
    )
}

const useVideo = ()=> useContext(VideoContext)

export {VideoProvider,useVideo}