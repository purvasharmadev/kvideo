import "./modalForm.css";
import { useState } from "react";
import { usePlaylist } from "../../Context/playlist-context";
import { v4 } from "uuid";

export function ModalForm({ closeModal,item }) {
  const { CreatePlaylist,PlaylistVideo,addVideoToPlaylist} = usePlaylist()
  const [playlistData,setPlaylistData] = useState({
    title:""
  })
  const addToPlaylistHandler = (id,item)=>{
    addVideoToPlaylist(id,item)
}
  const submitHandle = (e)=>{
    CreatePlaylist({
      _id:v4,
      title:playlistData.title,
  }
  );
  setPlaylistData({
    title:""
  })
  closeModal(true)
e.preventDefault()
  }

  return (
    <>
    <div className="modal">
      <div className="modal-body">
      <form onSubmit={submitHandle}>
        <div className="modal-header">
        <span onClick={() => closeModal(false)} className="alert-close-btn">
            {" "}
            ×{" "}
          </span>
          <h3 className="color-primary">Add a Playlist</h3>
        </div>
        <div className="modal-text">
          <input 
          value={playlistData.title}
          onChange={(e)=>
            setPlaylistData((prev) => ({ ...prev, title: e.target.value }))
          } 
          type="text" placeholder="enter title"/>
          {/* <input 
          onChange={(e)=>
            setPlaylistData((prev) => ({ ...prev, description: e.target.value }))
          } 
          type="text" placeholder="enter descriptiond"/> */}

        </div>
        <div className="modal-footer">
          <button type="submit" className="modal-btn"> Add </button>
        </div>
        </form>

      </div>
      <div className="flex flex-space-between">
            {
              PlaylistVideo && PlaylistVideo.map((playlist)=>{
                return(
                  <button onClick={()=>addToPlaylistHandler(playlist._id,item)} className='color-primary btn btn-playlist p-0 text-center mr-1'>{playlist.title}</button>
                )
              })
            }
  
            </div>
    </div>

            </>
  );
}
