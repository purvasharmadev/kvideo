import axios from "axios"
import {useState,useEffect} from "react"

function useAxios(url) {
    const [response,setResponse] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState("")

  async function fetchData(){
      try {
          let result = await axios.get(url)
          if(result.status === 200){
              setResponse(result.data)
          }
          setLoading(false)
      } catch (error) {
          console.error(error)
          setError("Something went wrong!, try again later!")
      }
    }

    useEffect(()=>{
        setTimeout(() => {
            fetchData()
        }, 2000);
        setLoading(true)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[url])

  return {response,loading,error}
}

export  {useAxios}