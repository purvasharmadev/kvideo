import { Routes, Route } from "react-router-dom";
import MockAPI from "./mockman";

// pages
import { HomePage } from "./Pages/HomePage/home-page";
import { Explore } from "./Pages/Explore/explore-page";
import PageNotFound from "./Pages/PageNotFound/page-not-found";

export default function URLRoutes() {
    return (
      <Routes>
        <Route path="/mockman" element={<MockAPI />} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    );
  }
  