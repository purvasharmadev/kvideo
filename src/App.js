import "./App.css";
import Nav from "./Pages/Nav/nav"
import Footer from "./Pages/Footer/footer";
import URLRoutes from "./router";

function App() {
  return (
    <div>
      <Nav/>
      <URLRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
