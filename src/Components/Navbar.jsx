import React, { useEffect } from "react";
import logo from "../Images/learn_baseball_logo.jpeg";
import "../Css/Navbar.css";
import {Link, useLocation} from "react-router-dom"

export default function Navbar() {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname)
  }, [location]);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary fixed-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img className="logo" src={logo} alt="logo" width='55px'></img></Link>
          <Link className="navbar-brand navbar-title" to="/"><b>LearnBaseball</b></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/news" || location.pathname==="/news/"?"active":""}`} to="/news">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/about" || location.pathname==="/about/"?"active":""}`} to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/contact" || location.pathname==="/contact/"?"active":""}`} to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/privacy-policy" || location.pathname==="/privacy-policy/"?"active":""}`} to="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
