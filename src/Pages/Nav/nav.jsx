import React from "react";
import './nav.css'
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import { HomePage } from "../HomePage/home-page";

function Nav() {

    // function to toggle on small screen
  function ClickHandler() {
    const navList = document.getElementsByClassName("navbar-list")[0];
    return navList.classList.toggle("toggle-active");
  }

  return (
    <nav className="bg-primary color-white nav-resp">
      <h2 className="nav-brand">
        <img
          src={logo}
          className="nav-logo img-responsive img-rounded"
          alt=""
          srcset=""
        />
        <Link to={<HomePage/>} className="nav-link link">
          Kvideo
        </Link>
      </h2>
      <span onClick={ClickHandler} className="nav-toggle nav-link">
        &#9776;
      </span>
      <ul className="navbar-list bg-primary">
        <li className="nav-item">
          <Link to={<HomePage/>} className=" nav-link link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to={<HomePage/>} className=" nav-link link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to={<HomePage/>} className=" nav-link link">
          Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
