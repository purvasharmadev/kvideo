import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import "./footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="flex flex-space-evenly align-item-center flex-wrap">
          <Link to="/" className="nav-link link">
            Home
          </Link>

          <Link to="/product" className="nav-link link">
            Trending Movies
          </Link>

          <Link to="/" className="nav-link link">
            Popular Shows
          </Link>

          <Link to="/login" className="nav-link link">
            Login / Signup
          </Link>

          <p className="text-center color-white">
            Follow me on :
            <a
              href="https://www.instagram.com/purva.codes/"
              className="p-1 color-white link"
            >
              <BsInstagram />
            </a>
            <a
              href="https://twitter.com/Purva_Sharma__"
              className="p-1 color-white"
            >
              <BsTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/purva-sharma1999/"
              className="p-1 color-white"
            >
              <BsLinkedin />
            </a>
          </p>
        </div>
        <p className="color-white text-center mb-1">
          Kvideo | Made with React | ©{" "}
          <a
            href="https://purvasharma.netlify.app/"
            className="link color-white"
          >
            Purva Sharma{" "}
          </a>
          |
        </p>
      </footer>
    </>
  );
}

export default Footer;
