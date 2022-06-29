import "./App.css";
import Nav from "./Pages/Nav/nav"
import Footer from "./Pages/Footer/footer";
import URLRoutes from "./router";

// import toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast-configuration method,
// it is compulsory method.
toast.configure();


const apiKey = process.env.REACT_APP_JWT_SECRET



function App() {
  return (
    <>
      <Nav/>
      <div className="h-100">
      <URLRoutes/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
