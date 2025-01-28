import React from "react";
import "../Css/Footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="footer text-white text-center py-3">
        <div className="container">
          <p
            className="mb-0 lead"
            style={{
              marginTop: "20px",
              fontFamily: "Lato, cursive",
              fontSize: "20px",
            }}
          >
            <strong>
              Copyright &copy; 2025 | LearnBaseball | All Rights Reserved
            </strong>
          </p>
        </div>
      </footer>
    </div>
  );
}
