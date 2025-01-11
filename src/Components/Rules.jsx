import React, { useEffect, useState } from "react";
import "../Css/Rules.css";
import srcImage from "../Images/learn_baseball_logo.jpeg";
import { marked } from "marked"; // Import marked for converting markdown to HTML
const { GoogleGenerativeAI } = require("@google/generative-ai");

export default function Comparison() {
  const [text, setText] = useState(""); // State to write text in input field
  const [aiResponse, setAIResponse] = useState(""); // State to hold AI response
  const [displayedText, setDisplayedText] = useState(""); // To store the displayed text

  const aiJob =
    "You are a baseball expert and teacher. Your role is to guide and educate a new fan who wants to learn about baseball. Always provide clear, accurate, and detailed answers that help the user understand the sport. Respond only as a baseball expert, explaining the rules, history, strategies, and any other aspects related to the game. If the user asks about anything unrelated to baseball, kindly redirect them or let them know you can only discuss baseball or anyother sport. Be patient and encouraging, making sure the user feels welcomed and informed on their learning journey. always try to keep your answer short but give full meaningful and required response according to user's question!";

  const genAI = new GoogleGenerativeAI(
    process.env.API_KEY
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = text;

  const fetchAIResponse = async () => {
    setAIResponse("AI is typing..."); // Clear previous displayed text
    const result = await model.generateContent(aiJob+"\n\nPrompt:\n"+prompt);
    setAIResponse(result.response.text()); // Set the actual AI response after fetching
    setText(""); // Clear the input field
  };

  // useEffect(() => {
  //   if (aiResponse === "") return; // Don't do anything if AI response is empty

  //   const words = aiResponse.split(" "); // Split response into words
  //   let index = -1;

  //   // Function to update displayed text word by word
  //   const interval = setInterval(() => {
  //     if (index < words.length) {
  //       setDisplayedText(
  //         (prevText) =>
  //           prevText + (index === 0 ? words[index] : " " + words[index])
  //       ); // Ensure first word is added correctly
  //       index++;
  //     } else {
  //       clearInterval(interval); // Stop the interval when all words are displayed
  //     }
  //   }, 100); // Adjust the speed of typing (in ms)

  //   return () => clearInterval(interval); // Clean up the interval on unmount
  // }, [aiResponse]); // Only trigger when aiResponse changes

  const onChangeValue = (e) => {
    setText(e.target.value);
  };

  // Convert the Markdown response into HTML using marked
  const getHtmlFromMarkdown = (markdown) => {
    return marked(markdown); // Convert Markdown to HTML
  };

  return (
    <>
      <div className="container my-2 rules-box">
        <h1 className="comparison-heading text-start">
          Rule No. 1: <b>Number of Players in Baseball</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={srcImage}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />

          <p className="lead">
            Baseball is played between two teams, and here's how the players are
            divided:
          </p>
          <h2>When Defending:</h2>
          <p>
            The team on the field has <b>9 players</b>, each with a specific
            role:
            <br />
            1. <b>Pitcher</b>: Throws the ball to the batter. <br />
            2. <b>Catcher</b>: Catches the ball behind the batter. <br />
            3. <b>First Baseman</b>: Guards first base. <br />
            4. <b>Second Baseman</b>: Guards second base. <br />
            5. <b>Third Baseman</b>: Guards third base. <br />
            6. <b>Shortstop</b>: Plays between second and third base. <br />
            7. <b>Left Fielder</b>: Covers the left outfield. <br />
            8. <b>Center Fielder</b>: Covers the center outfield. <br />
            9. <b>Right Fielder</b>: Covers the right outfield. <br />
          </p>
          <h2>When Attacking:</h2>
          <p>
            Players take turns one at a time to bat and try to score runs by
            hitting the ball and running around the bases.
          </p>
          <h2>How Many Players in Total?</h2>
          <p>
            Each team has a <b>roster of 25-26 players</b>, but only{" "}
            <b>9 players</b> from the defending team are active on the field at
            any time.
          </p>
          <h2>In Simple Words:</h2>
          <p>
            1. <b>9 players</b> are on the field when a team is defending.
            <br />
            2. <b>1 player</b> bats at a time when attacking.
          </p>

          <div className="mb-3">
            <label
              htmlFor="askAI"
              className="form-label"
              style={{ fontFamily: "cursive" }}
            >
              <b>QnA with AI:</b>
            </label>
            <input
              className="form-control text-form col-auto"
              id="question"
              name="question"
              type="text"
              value={text}
              onChange={onChangeValue}
              placeholder="Ask our AI anything about the first rule..."
            />
            <div>
              <button
                disabled={text.length === 0 ? true : false}
                type="submit"
                onClick={fetchAIResponse}
                className="btn btn-success mb-1 my-2"
              >
                Send Question
              </button>
            </div>
          </div>

          {/* Render AI Response Word by Word */}
          <p
            className="lead my-2 ai-response"
            // dangerouslySetInnerHTML={{
            //   __html: getHtmlFromMarkdown(
            //     displayedText.replace("undefined", "")
            //   ), // Convert the markdown response to HTML
            // }}
          >{aiResponse}</p>
        </div>
      </div>
    </>
  );
}
