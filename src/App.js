import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import Rules from "./Components/Rules";
import ScrollTop from "./Components/ScrollTop";
import Chat from "./Components/Chat";
import Quiz from "./Components/Quiz";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import "./Css/Footer.css";

import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import History from "./Components/History";

function App() {
  return (
    <div className="App">
      <AppContent />
    </div>
  );
}

function AppContent() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {<Navbar />}
      <ScrollTop />
      <div className="container flex-grow-1">
        <Routes>
          <Route exact path="/" element={<Rules />} />
          <Route exact path="/chat" element={<Chat />} />
          <Route exact path="/history" element={<History/>} />
          <Route exact path="/quiz" element={<Quiz />} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
