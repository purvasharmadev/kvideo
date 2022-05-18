import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";

import { useAuth } from "../../Auth/auth-context";

function Nav() {
  const { isLoggedIn, logOut } = useAuth();

  // function to toggle on small screen
  function ClickHandler() {
    const navList = document.getElementsByClassName("navbar-list")[0];
    return navList.classList.toggle("toggle-active");
  }

  return (
    <nav className="color-white nav-resp">
      {/* Logo */}
      <h2 className="nav-brand">
        <img
          src={logo}
          className="nav-logo img-responsive img-rounded"
          alt=""
          srcset=""
        />
        <Link to="/" className="nav-link link">
          Kvideo
        </Link>
      </h2>
      {/* Toggle */}
      <span onClick={ClickHandler} className="nav-toggle nav-link">
        &#9776;
      </span>

      {/* Navbar-list */}

      <ul className="navbar-list bg-primary">
        {/* Explore */}
        <li className="nav-item">
          <Link to="/explore" className=" nav-link link">
            Explore
          </Link>
        </li>
        {isLoggedIn ? (
          <>
            <li className="nav-item">
              <Link to="/liked-video" className="nav-link link">
                ❤
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/watch-later" className="nav-link link">
                watch later
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/watch-history" className="nav-link link">
                Watch History
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/playlist" className="nav-link link">
               Playlist
              </Link>
            </li>
            <li className="nav-item">
              <span onClick={logOut} className=" nav-link link">
                Logout
              </span>
            </li>
          </>
        ) : (
          <li className="nav-item">
            <Link to="/login" className=" nav-link link">
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
