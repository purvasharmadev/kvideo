import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";

// VideoProvider
import {VideoProvider} from "./Context/video-context";

// import liked videos provider
import {LikedProvider} from "./Context/liked-context";
// AuthProvider
import {AuthProvider} from "./Auth/auth-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <VideoProvider>
      <LikedProvider>
      <App />
      </LikedProvider>
    </VideoProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
