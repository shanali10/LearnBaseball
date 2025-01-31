import React, { useState } from "react";
import "../Css/Chat.css";
import aiLogo from "../Images/ai_logo.jpeg";
import { marked } from "marked"; // Import marked for converting markdown to HTML
import { useTranslation } from "react-i18next";
const { GoogleGenerativeAI } = require("@google/generative-ai");

export default function Chat() {
  const { t } = useTranslation(); // for language translation

  const [questionInput, setQuestionInput] = useState(""); // State to write text in input field
  const [aiResponse, setAIResponse] = useState(""); // State to hold AI response

  const aiJobPrompt = `${t("chatAIPrompt")}`;

  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const fetchAIResponse = async () => {
    setAIResponse(t("aiAnswering"));

    let prompt = questionInput;
    let result = await model.generateContent(
      `${aiJobPrompt} <br/> Prompt: ${prompt}`
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
      <div style={{ marginTop: "100px" }}>
        <div
          className="container my-1 rules-box"
          style={{ marginTop: "100px" }}
        >
          <h1
            className="comparison-heading text-start"
            style={{ backgroundColor: "rgb(1, 41, 37)" }}
          >
            <b>{t("chatTitle")}</b>
          </h1>

          <div className="clearfix text-start">
            <img
              src={aiLogo}
              className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
              alt="side_image"
            />

            <p>{t("chatDescription")}</p>

            <div className="mb-3">
              <label
                htmlFor="askAI"
                className="form-label"
                style={{ fontFamily: "cursive" }}
              >
                <b>{t("chatLabel")}</b>
              </label>
              <input
                className="form-control text-form col-auto"
                id="question1"
                name="question1"
                type="text"
                value={questionInput}
                onChange={onChangeValue}
                onKeyDown={(e) => (e.key === "Enter" ? fetchAIResponse() : "")}
                placeholder={t("chatHint")}
              />
              <div>
                <button
                  disabled={questionInput.length === 0 ? true : false}
                  type="submit"
                  onClick={fetchAIResponse}
                  className="btn btn-success mb-1 my-2"
                >
                  {t("sendQuestion")}
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
