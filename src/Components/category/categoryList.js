import '../../Pages/HomePage/home-page.css'
import React from "react";
import { useAxios } from "../../Hooks/useAxios";
import {CategoryCard} from "../../Pages/Category/category-card"

function CategoryList() {
  const { response, error, loading } = useAxios("/api/categories");

  // const [category,setCategory] = useState([])

  // async function getCategory(){
  //     let res = await axios.get("/api/categories")
  //     setCategory(res.data.categories)
  // }

  // useEffect(() => {
  //   getCategory()
  // }, [])

  return (
    <>
        {error && <h2>{error}</h2>}
        {loading && <h2>loading...........</h2>}
        {/*  CategoryCards */}
        <div className="category-container gutter-x gutter-y">
          {response.categories &&
            response.categories.map((item) => (
              <CategoryCard
                Name={item.categoryName}
                Img={item.img}
              />
            ))}
        </div>
    </>
  );
}

export { CategoryList };
