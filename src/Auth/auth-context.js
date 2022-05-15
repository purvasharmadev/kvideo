import { createContext, useContext, useState, useEffect } from "react";
import { getDataFromLocal } from "../Hooks/useLocalStorage";
import { toast } from "react-toastify";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    getDataFromLocal("isLoggedIn", false)
  );

  const logOut = ()=>{
    localStorage.clear();
    setIsLoggedIn(false);
    toast.error("User Logged out Succesfully!", {
      id: "signOut-success",
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });

  }

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  console.log("isLOggedIn ", isLoggedIn)
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn,logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };