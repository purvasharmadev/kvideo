import { createContext,useContext,useEffect,useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";


const CategoryContext = createContext()

function CategoryProvider({children}){
    const [category,setCategory] = useState()
    const [loader,setLoader] = useState(true)



    async function getCategories(){
        try{
            const res = await axios.get("/api/categories")
            setCategory(res.data.categories)
            // console.log("category from context ", res)
        }catch(error){
            toast.error(error.response.data.errors[0], {
                id: "category-error",
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
              });
        }finally{
            setLoader(false)
        }

    }

//     function filterReducer(state,action){
//         switch (action.type) {
//             case "Category":
//                 return {
//                     ...state,categoryName:action.payload
//                 }
        
//             default:
//                 return state
//         }

//     }
//       //  Filter Reducer
//   const [filterState, filterDispatch] = useReducer(filterReducer, {
//     sort: "",
//     range: 0,
//     rating: "",
//     search_query: "",
//     categoryName:"",
//     filteredCategory:[]

//   });

//   console.log("filterState: ", filterState);
    

    useEffect(()=>{
    getCategories()
// eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    
  
    return(
        <CategoryContext.Provider value={{category,loader}}>
            {children}
        </CategoryContext.Provider>
    )
}

const useCategory = ()=> useContext(CategoryContext)

export {CategoryProvider,useCategory}