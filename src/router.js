import { Routes, Route } from "react-router-dom";
import MockAPI from "./mockman";

// pages
import { HomePage } from "./Pages/HomePage/home-page";
import { VideoDetail } from "./Pages/Video/video-detail";
import PageNotFound from "./Pages/PageNotFound/page-not-found";
import { Explore } from "./Pages/Explore/explore-page";



export default function URLRoutes() {
    return (
      <Routes>
        <Route path="/mockman" element={<MockAPI />} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/explore/:videoId" element={<VideoDetail />} />
        <Route path="*" element={<PageNotFound/>}/>

      </Routes>
    );
  }
  