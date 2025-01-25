import React, { useEffect, useState } from "react";
import logo from "../Images/learn_baseball_logo.jpeg";
import "../Css/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import i18n from "../i18n";

export default function Navbar() {
  let location = useLocation();
  let [currentLanguage, setCurrentLanguage] = useState("English");

  const setLanguage = (lang) => {
    if (lang === "English") {
      i18n.changeLanguage("en");
      localStorage.setItem("lang", lang);
    } else if (lang === "French") {
      i18n.changeLanguage("fr");
      localStorage.setItem("lang", lang);
    } else if (lang === "German") {
      i18n.changeLanguage("de");
      localStorage.setItem("lang", lang);
    } else if (lang === "Spanish") {
      i18n.changeLanguage("es");
      localStorage.setItem("lang", lang);
    } else if (lang === "Arabic") {
      i18n.changeLanguage("ar");
      localStorage.setItem("lang", lang);
    } else if (lang === "Urdu") {
      i18n.changeLanguage("ur");
      localStorage.setItem("lang", lang);
    } else if (lang === "Hindi") {
      i18n.changeLanguage("hi");
      localStorage.setItem("lang", lang);
    }
  };
  useEffect(() => {
    let lang = localStorage.getItem("lang");
    if (lang === null) {
      setLanguage("English");
    } else {
      setCurrentLanguage(lang);
    }
  }, [location]);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary fixed-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="logo" src={logo} alt="logo" width="55px"></img>
          </Link>
          <Link className="navbar-brand navbar-title" to="/">
            <b>LearnBaseball</b>
          </Link>
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
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/chat" ||
                    location.pathname === "/chat/"
                      ? "active"
                      : ""
                  }`}
                  to="/chat"
                >
                  Chat
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/quiz" ||
                    location.pathname === "/quiz/"
                      ? "active"
                      : ""
                  }`}
                  to="/quiz"
                >
                  Quiz
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/privacy-policy" ||
                    location.pathname === "/privacy-policy/"
                      ? "active"
                      : ""
                  }`}
                  to="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>

            <li className="nav-item dropdown d-flex">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "white", marginRight: "75px" }}
              >
                {currentLanguage === "English" ? (
                  <span>
                    <span className="fi fi-us"></span> English
                  </span>
                ) : currentLanguage === "French" ? (
                  <span>
                    <span className="fi fi-fr"></span> French
                  </span>
                ) : currentLanguage === "German" ? (
                  <span>
                    <span className="fi fi-de"></span> German
                  </span>
                ) : currentLanguage === "Spanish" ? (
                  <span>
                    <span className="fi fi-es"></span> Spanish
                  </span>
                ) : currentLanguage === "Arabic" ? (
                  <span>
                    <span className="fi fi-ae"></span> Arabic
                  </span>
                ) : currentLanguage === "Urdu" ? (
                  <span>
                    <span className="fi fi-pk"></span> Urdu
                  </span>
                ) : currentLanguage === "Hindi" ? (
                  <span>
                    <span className="fi fi-in"></span> Hindi
                  </span>
                ) : (
                  <span>
                    <span className="fi fi-us"></span> English
                  </span>
                )}
              </Link>
              <ul className="dropdown-menu">
                {currentLanguage !== "English" ? (
                  <li>
                    <Link
                      className="dropdown-item"
                      href="#"
                      onClick={() => setLanguage("English")}
                    >
                      <span class="fi fi-us"></span> English
                    </Link>
                  </li>
                ) : (
                  ""
                )}

                {currentLanguage !== "French" ? (
                  <li>
                    <Link
                      className="dropdown-item"
                      href="#"
                      onClick={() => setLanguage("French")}
                    >
                      <span class="fi fi-fr"></span> French
                    </Link>
                  </li>
                ) : (
                  ""
                )}

                {currentLanguage !== "German" ? (
                  <li>
                    <Link
                      className="dropdown-item"
                      href="#"
                      onClick={() => setLanguage("German")}
                    >
                      <span class="fi fi-de"></span> German
                    </Link>
                  </li>
                ) : (
                  ""
                )}

                {currentLanguage !== "Spanish" ? (
                  <li>
                    <Link
                      className="dropdown-item"
                      href="#"
                      onClick={() => setLanguage("Spanish")}
                    >
                      <span class="fi fi-es"></span> Spanish
                    </Link>
                  </li>
                ) : (
                  ""
                )}

                {currentLanguage !== "Arabic" ? (
                  <li>
                    <Link
                      className="dropdown-item"
                      href="#"
                      onClick={() => setLanguage("Arabic")}
                    >
                      <span class="fi fi-ae"></span> Arabic
                    </Link>
                  </li>
                ) : (
                  ""
                )}

                {currentLanguage !== "Urdu" ? (
                  <li>
                    <Link
                      className="dropdown-item"
                      href="#"
                      onClick={() => setLanguage("Urdu")}
                    >
                      <span class="fi fi-pk"></span> Urdu
                    </Link>
                  </li>
                ) : (
                  ""
                )}

                {currentLanguage !== "Hindi" ? (
                  <li>
                    <Link
                      className="dropdown-item"
                      href="#"
                      onClick={() => setLanguage("Hindi")}
                    >
                      <span class="fi fi-in"></span> Hindi
                    </Link>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}
