import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import Rules from "./Components/Rules";
import ScrollTop from "./Components/ScrollTop";
import Chat from "./Components/Chat";

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AppContent/>
    </div>
  );
}

function AppContent() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {<Navbar />}
      <ScrollTop/>
      <div className="container flex-grow-1">
        <Routes>
          <Route exact path="/" element={<Rules />} />
          <Route exact path="/chat" element={<Chat />} />
          <Route exact path="/playersChat" element={<Rules />} />
        </Routes>
      </div>

      {/* <footer className="footer mt-auto py-3 bg-light">
        <Footer />
      </footer> */}
    </div>
  );
}

export default App;
