import React, { useEffect } from "react";
import logo from "../Images/learn_baseball_logo.jpeg";
import "../Css/Navbar.css";
import {Link, useLocation} from "react-router-dom"

export default function Navbar() {
  let location = useLocation();
  useEffect(() => {
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
                <Link className={`nav-link ${location.pathname==="/chat" || location.pathname==="/chat/"?"active":""}`} to="/chat">
                  Chat
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/quiz" || location.pathname==="/quiz/"?"active":""}`} to="/quiz">
                  Quiz
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
