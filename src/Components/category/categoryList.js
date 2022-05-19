import '../../Pages/HomePage/home-page.css'
import React from "react";
import {CategoryCard} from "../../Pages/Category/category-card";
import {useCategory} from "../../Context/category-context"

function CategoryList() {
  const {category,loader} = useCategory()
  return (
    <>
                {loader && <h2 className='text-center p-1 m-1'>loading...........</h2>} 

        {/*  CategoryCards */}
        <div className="category-container">
          {category &&
            category.map((item) => (
              <CategoryCard
              key = {item._id}
                Name={item.categoryName}
                Img={item.img}
              />
            ))}
        </div>
    </>
  );
}

export { CategoryList };
