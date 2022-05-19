import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";

// VideoProvider
import { VideoProvider } from "./Context/video-context";
// import category provide
import { CategoryProvider } from "./Context/category-context";

// import liked videos provider
import { LikedProvider } from "./Context/liked-context";

// import watchlater provider
import { WatchLaterProvider } from "./Context/watchlater-context";

import { WatchHistoryProvider } from "./Context/watchhistory-context";

// AuthProvider
import { AuthProvider } from "./Auth/auth-context";

// import playlist proivder
import { PlaylistProvider } from "./Context/playlist-context";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <VideoProvider>
          <PlaylistProvider>
          <LikedProvider>
            <WatchLaterProvider>
              <WatchHistoryProvider>
                <CategoryProvider>
                <App />
                </CategoryProvider>
              </WatchHistoryProvider>
            </WatchLaterProvider>
          </LikedProvider>
          </PlaylistProvider>
        </VideoProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
