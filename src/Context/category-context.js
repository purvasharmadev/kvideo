import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CategoryContext = createContext();

function CategoryProvider({ children }) {
  const [category, setCategory] = useState();
  const [loader, setLoader] = useState(true);

  async function getCategories() {
    try {
      const res = await axios.get("/api/categories");
      setCategory(res.data.categories);
    } catch (error) {
      toast.error(error.response.data.errors[0], {
        id: "category-error",
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    } finally {
      setLoader(false);
    }
  }

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CategoryContext.Provider value={{ category, loader }}>
      {children}
    </CategoryContext.Provider>
  );
}

const useCategory = () => useContext(CategoryContext);

export { CategoryProvider, useCategory };
