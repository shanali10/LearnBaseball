import React, { useEffect, useState } from "react";
import quizLogo from "../Images/quiz_logo.jpeg";

import { marked } from "marked"; // Import marked for converting markdown to HTML
import { useTranslation } from "react-i18next";
const { GoogleGenerativeAI } = require("@google/generative-ai");

export default function Quiz() {
  const { t } = useTranslation(); // for language translation
  const [questionInput, setQuestionInput] = useState(""); // State to write text in input field
  const [aiQuestion, setAIQuestion] = useState("");

  const [aiResponse, setAIResponse] = useState(""); // State to hold AI response
  const [buttonText, setButtonText] = useState(""); // button text for Starting Quiz and submitting the answer of the question
  const [quizQuestionNumber, setQuizQuestionNumber] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [previousQuizQuestions, setPreviousQuizQuestions] = useState(""); // This state will hold the previous asked questions data
  const [isQuizNull, setIsQuizNull] = useState(true); // This state will check either the quiz array is null or not
  const [highScore, setHighScore] = useState(0); // This state will check either the high score element should be shown or not
  const [isHighScore, setIsHighScore] = useState(false); // This state will check either the high score element should be shown or not
  const [congratsMessage, setCongratsMessage] = useState(false); // We will show a congrats message after quiz if it's true

  const aiQuizPrompt = `${t("quizPrompt")}`;

  const aiCheckingAnswerPrompt = `You are a baseball expert and enthusiastic teacher, engaging in a quiz challenge with me, a new baseball fan who has been learning the rules and gameplay of baseball. You just asked the question: ${aiQuestion}\n I responded with: ${questionInput}\n  Now, your task is to evaluate my answer. If it’s correct, celebrate my achievement with an applause and positive reinforcement. If it’s incorrect, gently explain why the answer is not right, provide the correct answer with a brief and helpful explanation. Keep it fun and encouraging to make the learning experience enjoyable! don't give titles in the response like 'applause and positive reinforcement' or something like that. just answer in pure coach way with realistic coach's approach!!`;

  const analyzeCorrectAnswerPrompt = `You are a passionate baseball expert and quizmaster engaging with me, a new baseball fan. You previously asked the question: ${aiQuestion}\n I answered: ${questionInput}\n Your task now is simple: Check my answer and the question provided, If my answer is correct, respond with "correct." If it's not, respond with "incorrect." read the question and answer with focus according to baseball rules and then answer!! Provide no additional details or commentary!`;

  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const getAIQuizQuestion = async () => {
    setAIQuestion(t("aiGeneratingQuestion"));
    setAIResponse("");
    getPreviousQuizes();

    let result;
    if (isQuizNull) {
      result = await model.generateContent(aiQuizPrompt);
    } else {
      result = await model.generateContent(
        `${aiQuizPrompt}\n  ${t("impNote")}\n${previousQuizQuestions}`
      );
    }
    setAIQuestion(result.response.text()); // Set the actual AI response after fetching
    setButtonText(t("submitAnswer"));

    // updating the question number of the quiz
    setQuizQuestionNumber(quizQuestionNumber + 1);

    if (quizQuestionNumber === 10) {
      setQuizQuestionNumber(1);
      setCorrectAnswers(0);
      setCongratsMessage(false);
    }
  };

  const fetchAIResponse = async () => {
    setAIResponse(t("aiAnalyzingResponse"));

    try {
      const result = await model.generateContent(aiCheckingAnswerPrompt);
      // Getting the correct answer and updating the score

      const aiResponseText = result.response.text();
      setAIResponse(aiResponseText); // Set the actual AI response after fetching
      setQuestionInput(""); // Clear the input field
      setButtonText(t("nextQuestion"));

      // Check if the user has completed 10 questions
      if (quizQuestionNumber === 10) {
        setButtonText(t("startNewQuiz"));
        setCongratsMessage(true);
      }

      storeQuestionAnswer(
        `Question:\n${aiQuestion}`,
        `Answer:\n${result.response.text()}`
      );

      setIsQuizNull(false);
      correctAnswerAiResponse();
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setAIResponse("Something went wrong. Please try again.");
    }
  };

  const correctAnswerAiResponse = async () => {
    const result = await model.generateContent(analyzeCorrectAnswerPrompt);
    if (
      result.response.text() === "correct" ||
      result.response.text() === "Correct"
    ) {
      setCorrectAnswers(correctAnswers + 1);
    }

    if (
      quizQuestionNumber === 10 &&
      (result.response.text() === "correct" ||
        result.response.text() === "Correct")
    ) {
      if (highScore < correctAnswers) {
        localStorage.setItem("highScore", correctAnswers + 1);
        setHighScore(correctAnswers + 1);
      }
      localStorage.setItem("isHighScore", true);
    } else if (quizQuestionNumber === 10) {
      if (highScore < correctAnswers) {
        localStorage.setItem("highScore", correctAnswers);
        setHighScore(correctAnswers);
      }
      localStorage.setItem("isHighScore", true);
    }
  };

  // Function to store question and answer in local storage
  const storeQuestionAnswer = (question, answer) => {
    const existingData = JSON.parse(localStorage.getItem("quizData")) || [];
    const newEntry = { question, answer };
    existingData.push(newEntry);
    localStorage.setItem("quizData", JSON.stringify(existingData));
  };

  const onChangeValue = (e) => {
    setQuestionInput(e.target.value);
  };

  // Convert the Markdown response into HTML using marked
  const getHtmlFromMarkdown = (markdown) => {
    return marked(markdown); // Convert Markdown to HTML
  };

  // function to get all the previous quizes
  const getPreviousQuizes = () => {
    const quizData = JSON.parse(localStorage.getItem("quizData"));
    if (quizData !== null) {
      // Initialize a letiable to build the string
      let allQuestions = "";

      // Loop through the quiz data to concatenate questions
      for (let i = 0; i < quizData.length; i++) {
        allQuestions += `<br/> ${quizData[i].question}`;
      }

      // Update the state after constructing the full string
      setPreviousQuizQuestions(allQuestions);

      setIsQuizNull(false);
    } else {
      setIsQuizNull(true);
    }
  };

  useEffect(() => {
    getPreviousQuizes();
    // get high score from local storage if available
    let getHighScore = localStorage.getItem("highScore");
    let getIsHighScore = localStorage.getItem("isHighScore");
    if (getHighScore !== null) {
      setHighScore(getHighScore);
    }
    if (getIsHighScore !== null) {
      setIsHighScore(getIsHighScore);
    }
  }, []);

  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <div className="container rules-box">
          <h1
            className="comparison-heading text-start"
            style={{ backgroundColor: "rgb(1, 41, 37)" }}
          >
            <b>{t("quizTitle")}</b>
          </h1>

          <div className="clearfix text-start">
            <img
              src={quizLogo}
              className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
              alt="side_image"
            />

            <p
              className="lead"
              dangerouslySetInnerHTML={{
                __html: getHtmlFromMarkdown(
                  aiQuestion === "" ? t("quizDescription") : aiQuestion
                ),
              }}
            ></p>

            <div className="mb-3">
              <input
                className="form-control text-form col-auto"
                id="question"
                name="question"
                type="text"
                value={questionInput}
                onChange={
                  buttonText === t("submitAnswer") ? onChangeValue : () => {}
                }
                onKeyDown={(e) =>
                  e.key === "Enter" ? fetchAIResponse() : null
                }
                placeholder={t("quizHint")}
              />
              <div>
                <button
                  disabled={
                    buttonText === t("submitAnswer")
                      ? questionInput.length === 0
                        ? true
                        : false
                      : null
                  }
                  type="submit"
                  onClick={
                    buttonText === t("startQuiz") ||
                    buttonText === t("nextQuestion") ||
                    buttonText === t("startNewQuiz")
                      ? getAIQuizQuestion
                      : fetchAIResponse
                  }
                  className="btn btn-success mb-1 my-2"
                >
                  {buttonText === ""
                    ? setButtonText(t("startQuiz"))
                    : buttonText}
                </button>
              </div>
            </div>

            <p
              className="lead my-2 ai-response"
              dangerouslySetInnerHTML={{
                __html: getHtmlFromMarkdown(aiResponse),
              }}
            ></p>

            <h2
              style={{
                fontSize: "20px",
                fontFamily: "Lato",
                fontWeight: 700,
              }}
            >
              {t("questions")} {quizQuestionNumber}/10
            </h2>
            <h2
              style={{
                fontSize: "20px",
                fontFamily: "Lato",
                fontWeight: 700,
              }}
            >
              {t("correctAnswers")}
              {correctAnswers < 10 ? ` 0${correctAnswers}` : correctAnswers}
            </h2>

            {isHighScore && (
              <h2
                style={{
                  fontSize: "20px",
                  fontFamily: "Lato",
                  fontWeight: 700,
                  color: "orange",
                }}
              >
                {t("highScore")}
                {` ${highScore}/10`}
              </h2>
            )}
            <br />
            {congratsMessage && (
              <p
                style={{
                  fontSize: "20px",
                  fontFamily: "Lato",
                  fontWeight: 700,
                  color: "yellow",
                }}
              >
                {t("congratsMessage")}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
