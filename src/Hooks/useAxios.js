import axios from "axios"
import {useState} from "react"

function useAxios() {
    const [response,setResponse] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState("")

  async function fetchData(params){
      try {
          let result = await axios.request(params)
              setResponse(result.data)
      } catch (error) {
          console.error(error.response.data.errors[0])
          setError(error.response.data.errors[0])
      } finally{
        setLoading(false)
      }
    }

  return {response,loading,error,fetchData}
}

export  {useAxios}