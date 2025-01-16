import React, { useState } from "react";
import "../Css/Chat.css";
import aiLogo from "../Images/ai_logo.jpeg";

import { marked } from "marked"; // Import marked for converting markdown to HTML
const { GoogleGenerativeAI } = require("@google/generative-ai");

export default function Chat() {
  const [questionInput, setQuestionInput] = useState(""); // State to write text in input field
  const [aiResponse, setAIResponse] = useState(""); // State to hold AI response

  const aiJob =
    "You are a baseball expert and teacher. Your role is to guide and educate a new fan who wants to learn about baseball. Always provide clear, accurate, and detailed answers that help the user understand the sport. Respond only as a baseball expert, explaining the rules, history, strategies, and any other aspects related to the game. If the user asks about anything unrelated to baseball, kindly redirect them or let them know you can only discuss baseball or any other sport. Be patient and encouraging, making sure the user feels welcomed and informed on their learning journey. always try to keep your answer short but give full meaningful and required response according to user's question!";

  const genAI = new GoogleGenerativeAI(
    process.env.API_KEY
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });

  const fetchAIResponse = async () => {
    setAIResponse("AI is answering...");
    const prompt = questionInput;
    const result = await model.generateContent(
      aiJob + "\n\nPrompt:\n" + prompt
    );
    setAIResponse(result.response.text()); // Set the actual AI response after fetching
    setQuestionInput(""); // Clear the input field
  };

  const onChangeValue = (e) => {
    setQuestionInput(e.target.value);
  };

  // Convert the Markdown response into HTML using marked
  const getHtmlFromMarkdown = (markdown) => {
    return marked(markdown); // Convert Markdown to HTML
  };

  return (
    <>
      <div className="slider-container container">
        <img className="slider-image img-fluid" src={aiLogo} alt="slider"></img>
      </div>
      <div
        id="rule1"
        className="container my-1 rules-box"
        style={{ marginTop: "100px" }}
      >
        <h1
          className="comparison-heading text-center"
          style={{ backgroundColor: "rgb(1, 41, 37)" }}
        >
          <b>Learn Baseball with our Advance AI</b>
        </h1>

        <div className="clearfix text-start">
          <div className="mb-3">
            <label
              htmlFor="askAI"
              className="form-label"
              style={{ fontFamily: "cursive" }}
            >
              <b>Start Chatting with AI:</b>
            </label>
            <input
              className="form-control text-form col-auto"
              id="question1"
              name="question1"
              type="text"
              value={questionInput}
              onChange={onChangeValue}
              onKeyDown={(e) => (e.key === "Enter" ? fetchAIResponse() : "")}
              placeholder="Ask our AI anything about the Baseball..."
            />
            <div>
              <button
                disabled={questionInput.length === 0 ? true : false}
                type="submit"
                onClick={fetchAIResponse}
                className="btn btn-success mb-1 my-2"
              >
                Send Question
              </button>
            </div>
          </div>

          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(aiResponse),
            }}
          ></p>
        </div>
      </div>
    </>
  );
}
