import React, { useState } from "react";
import quizLogo from "../Images/quiz_logo.jpeg";

import { marked } from "marked"; // Import marked for converting markdown to HTML
const { GoogleGenerativeAI } = require("@google/generative-ai");

export default function Quiz() {
  const [questionInput, setQuestionInput] = useState(""); // State to write text in input field
  const [aiQuestion, setAIQuestion] = useState(
    "Congratulations on learning the rules and gameplay of the baseball with the help of AI! 🎉 Now, let’s put your knowledge to the test. I’m your AI coach, ready to quiz you with some exciting questions about baseball. Each question will have four possible answers—choose the right one and show off your understanding of the game. Let’s see how well you know your baseball! 🏟️⚾"
  );

  const [aiResponse, setAIResponse] = useState(""); // State to hold AI response
  const [buttonText, setButtonText] = useState("Start Quiz"); // button text for Starting Quiz and submitting the answer of the question
  const [quizQuestionNumber, setQuizQuestionNumber] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const aiQuizPrompt = `You are a seasoned baseball expert and enthusiastic teacher. A new baseball fan has just learned the key rules of the game, including:  
  
  1. Number of Players: The team setup and player roles.  
  2. Objective of the Game: Scoring runs by hitting the ball and running bases.  
  3. Game Structure: Innings, turns, and the dynamic switch between batting and fielding.  
  4. The Field: A closer look at the infield, outfield, bases, and pitcher’s mound.  
  5. The Batter’s Turn: Mastering hits, strikes, balls, and outs.  
  6. Base Running: Rules for advancing and staying safe on the bases.  
  7. Scoring Runs: Completing a run around all bases to score.  
  8. The Pitcher’s Role: The art of pitching, legal moves, and avoiding illegal ones.  
  9. The Fielding Team's Role: Getting batters and runners out with catches, tags, and force plays.  
  10. Outs and Switching Sides: How three outs wrap up a half-inning and switch team roles.  
  11. Home Runs: The thrill of hitting the ball out of the field.  
  12. Special Plays: Double plays, triple plays, bunts, stolen bases, and more.  
  13. Fouls: Identifying foul balls and their consequences.  
  14. Umpire and Rules Enforcement: Ensuring fair play on the field.  
  15. Winning the Game: Deciding the victor after 9 innings or extra innings if needed.  
  
  Your mission is to test their understanding of these rules with insightful questions. Provide four answer choices for each question (each possible answer should be coming in line by line ont in one line) guiding them toward mastery of the game. Make it fun, engaging, and informative! Important Note: Ask only 1 question at a time!!!`;

  const aiCheckingAnswerPrompt = `You are a baseball expert and enthusiastic teacher, engaging in a quiz challenge with me, a new baseball fan who has been learning the rules and gameplay of baseball. You just asked the question: ${aiQuestion}\n I responded with: ${questionInput}\n  Now, your task is to evaluate my answer. If it’s correct, celebrate my achievement with an applause and positive reinforcement. If it’s incorrect, gently explain why the answer is not right, provide the correct answer with a brief and helpful explanation. Keep it fun and encouraging to make the learning experience enjoyable! don't give titles in the response like 'applause and positive reinforcement' or something like that. just answer in pure coach way with realistic coach's approach!!`;

  const analyzeCorrectAnswerPrompt = `You are a passionate baseball expert and quizmaster engaging with me, a new baseball fan. You previously asked the question: ${aiQuestion}\n I answered: ${questionInput}\n Your task now is simple: Check my answer and the question provided, If my answer is correct, respond with "correct." If it's not, respond with "incorrect." Provide no additional details or commentary!`;

  const genAI = new GoogleGenerativeAI(
    process.env.API_KEY
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });

  const getAIQuizQuestion = async () => {
    setAIQuestion("AI is Generating Question...");
    setAIResponse("");
    const result = await model.generateContent(aiQuizPrompt);
    setAIQuestion(result.response.text()); // Set the actual AI response after fetching
    setButtonText("Submit Answer");
    setQuizQuestionNumber(quizQuestionNumber + 1);

    if (quizQuestionNumber === 10) {
      setQuizQuestionNumber(1);
      setCorrectAnswers(0);
    }
  };

  const fetchAIResponse = async () => {
    setAIResponse("AI is analyzing your answer...");
    const result = await model.generateContent(aiCheckingAnswerPrompt);
    // getting the correct answer and updating the score!
    correctAnswerAiResponse();

    setAIResponse(result.response.text()); // Set the actual AI response after fetching
    setQuestionInput(""); // Clear the input field
    setButtonText("Next Question");

    if (quizQuestionNumber === 3) {
      setButtonText("Start New Quiz");
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
        <div className="container rules-box">
          <h1
            className="comparison-heading text-start"
            style={{ backgroundColor: "rgb(1, 41, 37)" }}
          >
            <b>Baseball Quiz with AI</b>
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
                __html: getHtmlFromMarkdown(aiQuestion),
              }}
            ></p>

            <div className="mb-3">
              <input
                className="form-control text-form col-auto"
                id="question"
                name="question"
                type="text"
                value={questionInput}
                onChange={buttonText === "Submit Answer" ? onChangeValue : () => {}}
                onKeyDown={(e) => (e.key === "Enter" ? fetchAIResponse() : null)}
                placeholder="Enter your answer here..."
              />
              <div>
                <button
                  disabled={
                    buttonText === "Submit Answer"
                      ? questionInput.length === 0
                        ? true
                        : false
                      : null
                  }
                  type="submit"
                  onClick={
                    buttonText === "Start Quiz" ||
                    buttonText === "Next Question" ||
                    buttonText === "Start New Quiz"
                      ? getAIQuizQuestion
                      : fetchAIResponse
                  }
                  className="btn btn-success mb-1 my-2"
                >
                  {buttonText}
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
              Quiz: {quizQuestionNumber}/10
            </h2>
            <h2
              style={{
                fontSize: "20px",
                fontFamily: "Lato",
                fontWeight: 700,
              }}
            >
              Correct Answers:{" "}
              {correctAnswers < 10 ? ` 0${correctAnswers}` : correctAnswers}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
