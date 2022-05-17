import { Routes, Route } from "react-router-dom";
import MockAPI from "./mockman";

// Context
import { useAuth } from "./Auth/auth-context";

// Auth Routes
import { PrivateRoute } from "./Auth/AuthRoutes/PrivateRoutes";
import { RestrictedRoute } from "./Auth/AuthRoutes/RestrictedRoutes";

// pages
import { HomePage } from "./Pages/HomePage/home-page";
import { VideoDetail } from "./Pages/Video/video-detail";
import { LikedVideo } from "./Components/likedVideo/liked";
import PageNotFound from "./Pages/PageNotFound/page-not-found";
import { Explore } from "./Pages/Explore/explore-page";
import { Login } from "./Auth/Login/login";
import { Signin } from "./Auth/Signup/signup";
import { WatchLaterVideo } from "./Pages/WatchLater/watch-later";
import {WatchHistory} from "./Pages/WatchHistory/watch-history";
export default function URLRoutes() {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      {/* MockMan */}
      <Route path="/mockman" element={<MockAPI />} />

      {/* public routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/explore" element={<Explore />} />

      {/* private routes */}
      <Route exact path="/" element={<PrivateRoute login={isLoggedIn} />}>
        <Route path="/explore/:videoId" element={<VideoDetail />} />
        <Route path="/liked-video" element={<LikedVideo />} />
        <Route path="/watch-later" element={<WatchLaterVideo />} />
        <Route path="/watch-history" element={<WatchHistory />} />
      </Route>

      {/* Resticted Route */}
      {/* Auth */}
      <Route path="/" element={<RestrictedRoute login={isLoggedIn} />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signin />} />
      </Route>

      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
