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

    alert(
      "Congratulations🎉 Way to go! You scored ${correctAnswers}/10 – an impressive achievement for a New Fan! ⚾🌟 Keep shining! 🌟🙌"
    );
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
      <div style={{ marginTop: "100px" }}>
        <div
          className="container my-1 rules-box"
          style={{ marginTop: "100px" }}
        >
          <h1
            className="comparison-heading text-start"
            style={{ backgroundColor: "rgb(1, 41, 37)" }}
          >
            <b>Learn Baseball with our Advance AI</b>
          </h1>

          <div className="clearfix text-start">
            <img
              src={aiLogo}
              className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
              alt="side_image"
            />

            <p>
              I’m your AI coach, here to unlock the world of baseball for you!
              ⚾ Whether you’re a total rookie or aiming to master advanced
              strategies, I’ve got your back. From explaining the rules to
              diving into the nitty-gritty of gameplay, I’ll make sure you’re
              ready to step up to the plate. Got questions? Feeling curious?
              Let’s swing into action and chat about anything baseball—let’s
              make it a grand slam! 🚀
            </p>

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
                placeholder="Ask me anything about the Baseball..."
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
      </div>
    </>
  );
}
