import React from "react";
import "../Css/RulesTable.css";

export default function RulesTable() {
  return (
    <>
      {/* Table of content (Rules)  */}
      <div className="container my-2">
        <h1
          style={{
            backgroundColor: "black",
            border: "2px solid white",
            padding: "1%",
            color: "yellow",
            marginTop: "50px",
          }}
        >
          Table of Content (Baseball Rules)
        </h1>
      </div>
      <div className="list-group container my-2 list-group-horizontal">
        <a
          href="#rule1"
          id="rule1"
          className="list-group-item list-group-item-action"
          aria-current="true"
          style={{ backgroundColor: "black", color: "white" }}
        >
          1. &nbsp; No. of Players
        </a>
        <a
          href="#rule2"
          className="list-group-item list-group-item-action"
          aria-current="true"
          style={{ backgroundColor: "black", color: "white" }}
        >
          2. &nbsp; Objective of the Game
        </a>
        <a
          href="#rule3"
          className="list-group-item list-group-item-action"
          style={{ backgroundColor: "black", color: "white" }}
        >
          3. &nbsp; Game Structure
        </a>
        <a
          href="#rule4"
          className="list-group-item list-group-item-action"
          style={{ backgroundColor: "black", color: "white" }}
        >
          4. &nbsp; The Field
        </a>
        <a
          href="#rule5"
          className="list-group-item list-group-item-action"
          style={{ backgroundColor: "black", color: "white" }}
        >
          5. &nbsp; The Batter’s Turn
        </a>
      </div>
      <div className="list-group container my-2 list-group-horizontal">
        <a
          href="#rule6"
          className="list-group-item list-group-item-action"
          style={{ backgroundColor: "black", color: "white" }}
        >
          6. &nbsp; Base Running
        </a>
        <a
          href="#rule7"
          className="list-group-item list-group-item-action"
          style={{ backgroundColor: "black", color: "white" }}
        >
          7. &nbsp; Scoring Runs
        </a>
        <a
          href="#rule8"
          className="list-group-item list-group-item-action"
          style={{ backgroundColor: "black", color: "white" }}
        >
          8. &nbsp; The Pitcher’s Role
        </a>
        <a
          href="#rule9"
          className="list-group-item list-group-item-action"
          style={{ backgroundColor: "black", color: "white" }}
        >
          9. &nbsp; Fielding Team's Role
        </a>
        <a
          href="#rule10"
          className="list-group-item list-group-item-action"
          aria-current="true"
          style={{ backgroundColor: "black", color: "white" }}
        >
          10. &nbsp; Outs, Switching Sides
        </a>
      </div>
      <div className="list-group container list-group-horizontal">
        <a
          href="#rule11"
          className="list-group-item list-group-item-action"
          style={{ backgroundColor: "black", color: "white" }}
        >
          11. &nbsp; Home Runs
        </a>
        <a
          href="#rule12"
          className="list-group-item list-group-item-action"
          style={{ backgroundColor: "black", color: "white" }}
        >
          12. &nbsp; Special Plays
        </a>
        <a
          href="#rule13"
          className="list-group-item list-group-item-action"
          style={{ backgroundColor: "black", color: "white" }}
        >
          13. &nbsp; Fouls
        </a>
        <a
          href="#rule14"
          className="list-group-item list-group-item-action"
          style={{ backgroundColor: "black", color: "white" }}
        >
          14. &nbsp; Umpire and Rules
        </a>
        <a
          href="#rule15"
          className="list-group-item list-group-item-action"
          style={{ backgroundColor: "black", color: "white" }}
        >
          15. &nbsp; Winning the Game
        </a>
      </div>
    </>
  );
}
