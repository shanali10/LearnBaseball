import React, { useState } from "react";
import "../Css/Rules.css";
import noOfPlayers from "../Images/no_of_players.jpeg";
import objectiveOfGame from "../Images/objective_of_game.jpeg";
import gameStructure from "../Images/game_structure.jpeg";
import theField from "../Images/the_field.jpeg";
import theBattersTurn from "../Images/batters_turn.jpeg";
import baseRunning from "../Images/base_running.jpeg";
import scoringRuns from "../Images/scoring_runs.jpeg";
import thePitchersRole from "../Images/pitchers_role.jpeg";
import fieldingTeamsRole from "../Images/fielding_team.jpeg";
import outs from "../Images/outs.jpeg";
import homeRuns from "../Images/home_run.jpeg";
import specialPlays from "../Images/special_plays.jpeg";
import fouls from "../Images/fouls.jpeg";
import umpires from "../Images/umpires.jpeg";
import winningTheGame from "../Images/winning.jpeg";
import { marked } from "marked"; // Import marked for converting markdown to HTML
import RulesTable from "./RulesTable";
import Slider from "./Slider";
import { useTranslation } from "react-i18next";
import Gameplay from "./Gameplay";

const { GoogleGenerativeAI } = require("@google/generative-ai");

export default function Rules() {
  const { t } = useTranslation(); // for the language translation

  const [questions, setQuestions] = useState({
    // state to hold the input field (Questions) values
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    question8: "",
    question9: "",
    question10: "",
    question11: "",
    question12: "",
    question13: "",
    question14: "",
    question15: "",
  });

  const [responses, setResponses] = useState({
    // state to hold the AI responses for different rules section
    response1: "",
    response2: "",
    response3: "",
    response4: "",
    response5: "",
    response6: "",
    response7: "",
    response8: "",
    response9: "",
    response10: "",
    response11: "",
    response12: "",
    response13: "",
    response14: "",
    response15: "",
  });
  const aiJob = `${t("chatAIPrompt")}`;

  const genAI = new GoogleGenerativeAI(
    process.env.API_KEY
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const fetchAIResponse = async (rule) => {
    if (rule === "rule1") {
      setResponses((prev) => ({
        ...prev,
        response1: `${t("aiAnswering")}`,
      }));

      const prompt = questions.question1;
      const result = await model.generateContent(
        aiJob + "\n\nPrompt:\n" + prompt
      );

      setResponses((prev) => ({ ...prev, response1: result.response.text() })); // Set the actual AI response after fetching
    } else if (rule === "rule2") {
      setResponses((prev) => ({
        ...prev,
        response2: `${t("aiAnswering")}`,
      }));
      const prompt = questions.question2;
      const result = await model.generateContent(
        aiJob + "\n\nPrompt:\n" + prompt
      );
      setResponses((prev) => ({ ...prev, response2: result.response.text() })); // Set the actual AI response after fetching
    } else if (rule === "rule3") {
      setResponses((prev) => ({
        ...prev,
        response3: `${t("aiAnswering")}`,
      }));
      const prompt = questions.question3;
      const result = await model.generateContent(
        aiJob + "\n\nPrompt:\n" + prompt
      );
      setResponses((prev) => ({ ...prev, response3: result.response.text() })); // Set the actual AI response after fetching
    } else if (rule === "rule4") {
      setResponses((prev) => ({
        ...prev,
        response4: `${t("aiAnswering")}`,
      }));
      const prompt = questions.question4;
      const result = await model.generateContent(
        aiJob + "\n\nPrompt:\n" + prompt
      );
      setResponses((prev) => ({ ...prev, response4: result.response.text() })); // Set the actual AI response after fetching
    } else if (rule === "rule5") {
      setResponses((prev) => ({
        ...prev,
        response5: `${t("aiAnswering")}`,
      }));
      const prompt = questions.question5;
      const result = await model.generateContent(
        aiJob + "\n\nPrompt:\n" + prompt
      );
      setResponses((prev) => ({ ...prev, response5: result.response.text() })); // Set the actual AI response after fetching
    } else if (rule === "rule6") {
      setResponses((prev) => ({
        ...prev,
        response6: `${t("aiAnswering")}`,
      }));
      const prompt = questions.question6;
      const result = await model.generateContent(
        aiJob + "\n\nPrompt:\n" + prompt
      );
      setResponses((prev) => ({ ...prev, response6: result.response.text() })); // Set the actual AI response after fetching
    } else if (rule === "rule7") {
      setResponses((prev) => ({
        ...prev,
        response7: `${t("aiAnswering")}`,
      }));
      const prompt = questions.question7;
      const result = await model.generateContent(
        aiJob + "\n\nPrompt:\n" + prompt
      );
      setResponses((prev) => ({ ...prev, response7: result.response.text() })); // Set the actual AI response after fetching
    } else if (rule === "rule8") {
      setResponses((prev) => ({
        ...prev,
        response8: `${t("aiAnswering")}`,
      }));
      const prompt = questions.question8;
      const result = await model.generateContent(
        aiJob + "\n\nPrompt:\n" + prompt
      );
      setResponses((prev) => ({ ...prev, response8: result.response.text() })); // Set the actual AI response after fetching
    } else if (rule === "rule9") {
      setResponses((prev) => ({
        ...prev,
        response9: `${t("aiAnswering")}`,
      }));
      const prompt = questions.question9;
      const result = await model.generateContent(
        aiJob + "\n\nPrompt:\n" + prompt
      );
      setResponses((prev) => ({ ...prev, response9: result.response.text() })); // Set the actual AI response after fetching
    } else if (rule === "rule10") {
      setResponses((prev) => ({
        ...prev,
        response10: `${t("aiAnswering")}`,
      }));
      const prompt = questions.question10;
      const result = await model.generateContent(
        aiJob + "\n\nPrompt:\n" + prompt
      );
      setResponses((prev) => ({ ...prev, response10: result.response.text() })); // Set the actual AI response after fetching
    } else if (rule === "rule11") {
      setResponses((prev) => ({
        ...prev,
        response11: `${t("aiAnswering")}`,
      }));
      const prompt = questions.question11;
      const result = await model.generateContent(
        aiJob + "\n\nPrompt:\n" + prompt
      );
      setResponses((prev) => ({ ...prev, response11: result.response.text() })); // Set the actual AI response after fetching
    } else if (rule === "rule12") {
      setResponses((prev) => ({
        ...prev,
        response12: `${t("aiAnswering")}`,
      }));
      const prompt = questions.question12;
      const result = await model.generateContent(
        aiJob + "\n\nPrompt:\n" + prompt
      );
      setResponses((prev) => ({ ...prev, response12: result.response.text() })); // Set the actual AI response after fetching
    } else if (rule === "rule13") {
      setResponses((prev) => ({
        ...prev,
        response13: `${t("aiAnswering")}`,
      }));
      const prompt = questions.question13;
      const result = await model.generateContent(
        aiJob + "\n\nPrompt:\n" + prompt
      );
      setResponses((prev) => ({ ...prev, response13: result.response.text() })); // Set the actual AI response after fetching
    } else if (rule === "rule14") {
      setResponses((prev) => ({
        ...prev,
        response14: `${t("aiAnswering")}`,
      }));
      const prompt = questions.question14;
      const result = await model.generateContent(
        aiJob + "\n\nPrompt:\n" + prompt
      );
      setResponses((prev) => ({ ...prev, response14: result.response.text() })); // Set the actual AI response after fetching
    } else if (rule === "rule15") {
      setResponses((prev) => ({
        ...prev,
        response15: `${t("aiAnswering")}`,
      }));
      const prompt = questions.question15;
      const result = await model.generateContent(
        aiJob + "\n\nPrompt:\n" + prompt
      );
      setResponses((prev) => ({ ...prev, response15: result.response.text() })); // Set the actual AI response after fetching
    }

    // clearing all the input fields
    setQuestions((prev) => ({ ...prev, question1: "" }));
    setQuestions((prev) => ({ ...prev, question2: "" }));
    setQuestions((prev) => ({ ...prev, question3: "" }));
    setQuestions((prev) => ({ ...prev, question4: "" }));
    setQuestions((prev) => ({ ...prev, question5: "" }));
    setQuestions((prev) => ({ ...prev, question6: "" }));
    setQuestions((prev) => ({ ...prev, question7: "" }));
    setQuestions((prev) => ({ ...prev, question8: "" }));
    setQuestions((prev) => ({ ...prev, question9: "" }));
    setQuestions((prev) => ({ ...prev, question10: "" }));
    setQuestions((prev) => ({ ...prev, question11: "" }));
    setQuestions((prev) => ({ ...prev, question12: "" }));
    setQuestions((prev) => ({ ...prev, question13: "" }));
    setQuestions((prev) => ({ ...prev, question14: "" }));
    setQuestions((prev) => ({ ...prev, question15: "" }));
  };

  const onChangeValue = (e, rule) => {
    if (rule === "rule1") {
      setQuestions((prev) => ({ ...prev, question1: e.target.value }));
    } else if (rule === "rule2") {
      setQuestions((prev) => ({ ...prev, question2: e.target.value }));
    } else if (rule === "rule3") {
      setQuestions((prev) => ({ ...prev, question3: e.target.value }));
    } else if (rule === "rule4") {
      setQuestions((prev) => ({ ...prev, question4: e.target.value }));
    } else if (rule === "rule5") {
      setQuestions((prev) => ({ ...prev, question5: e.target.value }));
    } else if (rule === "rule6") {
      setQuestions((prev) => ({ ...prev, question6: e.target.value }));
    } else if (rule === "rule7") {
      setQuestions((prev) => ({ ...prev, question7: e.target.value }));
    } else if (rule === "rule8") {
      setQuestions((prev) => ({ ...prev, question8: e.target.value }));
    } else if (rule === "rule9") {
      setQuestions((prev) => ({ ...prev, question9: e.target.value }));
    } else if (rule === "rule10") {
      setQuestions((prev) => ({ ...prev, question10: e.target.value }));
    } else if (rule === "rule11") {
      setQuestions((prev) => ({ ...prev, question11: e.target.value }));
    } else if (rule === "rule12") {
      setQuestions((prev) => ({ ...prev, question12: e.target.value }));
    } else if (rule === "rule13") {
      setQuestions((prev) => ({ ...prev, question13: e.target.value }));
    } else if (rule === "rule14") {
      setQuestions((prev) => ({ ...prev, question14: e.target.value }));
    } else if (rule === "rule15") {
      setQuestions((prev) => ({ ...prev, question15: e.target.value }));
    }
  };

  // Convert the Markdown response into HTML using marked
  const getHtmlFromMarkdown = (markdown) => {
    return marked(markdown); // Convert Markdown to HTML
  };

  return (
    <>
      <Slider />
      <RulesTable />

      {/* Rule 1: No. of Players  */}
      <div id="rule1" className="container my-5 rules-box">
        <h1
          className="comparison-heading text-start"
          style={{ backgroundColor: "rgb(1, 41, 37)" }}
        >
          {t("rule1")} &nbsp;<b>{t("rule1Title")}</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={noOfPlayers}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />
          <p className="lead">{t("rule1Subtitle")}</p>
          <h2>{t("whenDefending")}</h2>
          <p>
            {t("whenDefendingSubtitle")}
            <br />
            <ol>
              <li>
                <b>{t("pitcher")}</b>
                {t("pitcherDetail")}
              </li>
              <li>
                <b>{t("catcher")}</b>
                {t("catcherDetail")}
              </li>
              <li>
                <b>{t("firstBaseman")}</b>
                {t("firstBasemanDetail")}
              </li>
              <li>
                <b>{t("secondBaseman")}</b>
                {t("secondBasemanDetail")}
              </li>
              <li>
                <b>{t("thirdBaseman")}</b>
                {t("thirdBasemanDetail")}
              </li>
              <li>
                <b>{t("shortstop")}</b>
                {t("shortstopDetail")}
              </li>
              <li>
                <b>{t("leftFielder")}</b>
                {t("leftFielderDetail")}
              </li>
              <li>
                <b>{t("centerFielder")}</b>
                {t("centerFielderDetail")}
              </li>
              <li>
                <b>{t("rightFielder")}</b>
                {t("rightFielderDetail")}
              </li>
            </ol>
          </p>
          <h2>{t("whenattacking")}</h2>
          <p>
            <ul>
              <li>{t("whenattackingSubtitle")}</li>
            </ul>
          </p>
          <h2>{t("howManyPlayers")}</h2>
          <p>
            <ul>
              <li>{t("howManyPlayersDetail")}</li>
            </ul>
          </p>
          <h2>{t("rule1Summary")}</h2>
          <p>
            <ul>
              <li>
                <b>{t("9Players")}</b> {t("9PlayersDetails")}
              </li>
              <li>
                <b>{t("1Player")}</b> {t("1PlayerDetails")}
              </li>
            </ul>
          </p>
          <div className="mb-3">
            <label
              htmlFor="askAI"
              className="form-label"
              style={{ fontFamily: "cursive" }}
            >
              <b>{t("qnawithAI")}</b>
            </label>
            <input
              className="form-control text-form col-auto"
              id="question1"
              name="question1"
              type="text"
              value={questions.question1}
              onChange={(e) => onChangeValue(e, "rule1")}
              onKeyDown={(e) =>
                e.key === "Enter" ? fetchAIResponse("rule1") : ""
              }
              placeholder={t("rule1Hint")}
            />
            <div>
              <button
                disabled={questions.question1.length === 0 ? true : false}
                type="submit"
                onClick={() => fetchAIResponse("rule1")}
                className="btn btn-success mb-1 my-2"
              >
                {t("sendQuestion")}
              </button>
            </div>
          </div>
          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(responses.response1),
            }}
          ></p>
          <Gameplay url="https://www.youtube.com/embed/yJnOv29U7K8" />
        </div>
      </div>

      {/* Rule 2: Objective of the Game  */}
      <div id="rule2" className="container my-5 rules-box">
        <h1
          className="comparison-heading text-start"
          style={{ backgroundColor: "rgb(1, 41, 37)" }}
        >
          {t("rule2")} &nbsp;<b>{t("rule2Title")}</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={objectiveOfGame}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />

          <p className="lead">{t("rule2Subtitle")}</p>
          <h2>{t("scoringRuns")}</h2>
          <p>
            {t("scoringRunsSubtitle")}

            <ul>
              <li>
                <b>{t("theBattersRole")}</b>
                {t("theBattersRoleDetail")}
              </li>
              <li>
                <b>{t("becomingARunner")}</b>
                {t("becomingARunnerDetail")}
              </li>
            </ul>
          </p>
          <h2>{t("runningTheBases")}</h2>
          <p>
            <ul>
              <li>
                <b>{t("basePath")}</b>
                {t("basePathDetail")}
              </li>
              <li>
                <b>{t("stoppingAtBase")}</b>
                {t("stoppingAtBaseDetail")}
              </li>
              <li>
                <b>{t("homePlate")}</b>
                {t("homePlateDetail")}
              </li>
            </ul>
          </p>
          <h2>{t("theFieldingTeamsGoal")}</h2>
          <p>
            {t("theFieldingTeamsGoalSutTitle")}
            <ul>
              <li>
                <b>{t("catching")}</b>
                {t("catchingDetail")}
              </li>
              <li>
                <b>{t("throwing")}</b>
                {t("throwingDetail")}
              </li>
              <li>
                <b>{t("tagging")}</b>
                {t("taggingDetail")}
              </li>
            </ul>
          </p>

          <h2>{t("strategicPlays")}</h2>
          <p>
            <ul>
              <li>
                <b>{t("baseHits")}</b>
                {t("baseHitsDetail")}
              </li>
              <li>
                <b>{t("homeRun")}</b>
                {t("homeRunDetails")}
              </li>
              <li>
                <b>{t("sacrificesAndBunting")}</b>
                {t("sacrificesAndBuntingDetails")}
              </li>
            </ul>
          </p>

          <h2>{t("winningtheGame")}</h2>
          <p>
            <ul>
              <li>{t("winningtheGame1")}</li>
              <li>{t("winningtheGame2")}</li>
              <li>{t("winningtheGame3")}</li>
              <li>{t("winningtheGame4")}</li>
            </ul>
          </p>

          <div className="mb-3">
            <label
              htmlFor="askAI"
              className="form-label"
              style={{ fontFamily: "cursive" }}
            >
              <b>{t("qnawithAI")}</b>
            </label>
            <input
              className="form-control text-form col-auto"
              id="question2"
              name="question2"
              type="text"
              value={questions.question2}
              onChange={(e) => onChangeValue(e, "rule2")}
              onKeyDown={(e) =>
                e.key === "Enter" ? fetchAIResponse("rule2") : ""
              }
              placeholder={t("rule2Hint")}
            />
            <div>
              <button
                disabled={questions.question2.length === 0 ? true : false}
                type="submit"
                onClick={() => fetchAIResponse("rule2")}
                className="btn btn-success mb-1 my-2"
              >
                {t("sendQuestion")}
              </button>
            </div>
          </div>

          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(responses.response2),
            }}
          ></p>
          <Gameplay url="https://www.youtube.com/embed/2NkcYlFXT7A" />
        </div>
      </div>

      {/* Rule 3: Game Structure  */}
      <div id="rule3" className="container my-5 rules-box">
        <h1
          className="comparison-heading text-start"
          style={{ backgroundColor: "rgb(1, 41, 37)" }}
        >
          {t("rule3")} &nbsp;<b>{t("rule3Title")}</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={gameStructure}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />
          <p className="lead">{t("rule3Subtitle")}</p>

          <h2>{t("innings")}</h2>
          <p>
            <ul>
              <li>{t("inningsSubtitle")}</li>
              <li>{t("inningsHalves")}</li>
              <ol>
                <li>
                  <b>{t("topHalf")}</b>
                  {t("topHalfDetail")}
                </li>
                <li>
                  <b>{t("bottomHalf")}</b>
                  {t("bottomHalfDetail")}
                </li>
              </ol>
              <li>{t("mostInnings")}</li>
            </ul>
          </p>
          <h2>{t("turnsBattingAndFielding")}</h2>
          <p>
            <ul>
              <li>{t("turnsBattingAndFielding1")}</li>
              <li>{t("turnsBattingAndFielding2")}</li>
              <li>{t("turnsBattingAndFielding3")}</li>
            </ul>
          </p>
          <h2>{t("theTransitionBetweenRoles")}</h2>
          <p>
            <ul>
              <li>{t("theTransitionBetweenRoles1")}</li>
              <li>{t("theTransitionBetweenRoles2")}</li>
            </ul>
          </p>
          <h2>{t("whyIsTheStructureImportant")}</h2>
          <p>
            <ul>
              <li>{t("whyIsTheStructureImportant1")}</li>
              <li>{t("whyIsTheStructureImportant2")}</li>
              <li>{t("whyIsTheStructureImportant3")}</li>
            </ul>
          </p>

          <div className="mb-3">
            <label
              htmlFor="askAI"
              className="form-label"
              style={{ fontFamily: "cursive" }}
            >
              <b>{t("qnawithAI")}</b>
            </label>
            <input
              className="form-control text-form col-auto"
              id="question3"
              name="question3"
              type="text"
              value={questions.question3}
              onChange={(e) => onChangeValue(e, "rule3")}
              onKeyDown={(e) =>
                e.key === "Enter" ? fetchAIResponse("rule3") : ""
              }
              placeholder={t("rule3Hint")}
            />
            <div>
              <button
                disabled={questions.question3.length === 0 ? true : false}
                type="submit"
                onClick={() => fetchAIResponse("rule3")}
                className="btn btn-success mb-1 my-2"
              >
                {t("sendQuestion")}
              </button>
            </div>
          </div>

          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(responses.response3),
            }}
          ></p>
          <Gameplay url="https://www.youtube.com/embed/mw02OnRcHuA" />
        </div>
      </div>

      {/* Rule 4 - The Field  */}
      <div id="rule4" className="container my-5 rules-box">
        <h1
          className="comparison-heading text-start"
          style={{ backgroundColor: "rgb(1, 41, 37)" }}
        >
          {t("rule4")} &nbsp;<b>{t("rule4Title")}</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={theField}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />

          <p className="lead">{t("rule4Subtitle")}</p>
          <h2>{t("basicLayout")}</h2>
          <p>
            {t("basicLayoutSubtitle")}
            <ul>
              <li>
                <b>{t("infield")}</b>
                {t("infieldDetail")}
              </li>
              <li>
                <b>{t("outfield")}</b>
                {t("outfieldDetail")}
              </li>
            </ul>
          </p>
          <h2>{t("bases")}</h2>
          <p>
            <ul>
              <li>
                <b>{t("basesSubtitle1")}</b> {t("basesSubtitle2")}
              </li>
              <ol>
                <li>
                  <b>{t("homePlate2")}</b>
                  {t("homePlateDetail2")}
                </li>
                <li>
                  <b>{t("firstBase")}</b>
                </li>
                <li>
                  <b>{t("secondBase")}</b>
                </li>
                <li>
                  <b>{t("thirdBase")}</b>
                </li>
              </ol>
              <li>{t("bases3")}</li>
            </ul>
          </p>
          <h2>{t("pitchersMound")}</h2>
          <p>
            <ul>
              <li>{t("pitchersMound1")}</li>
              <li>{t("pitchersMound2")}</li>
              <li>{t("pitchersMound3")}</li>
            </ul>
          </p>
          <h2>{t("rule4Summary")}</h2>
          <p>{t("rule4SummaryDetail")}</p>

          <div className="mb-3">
            <label
              htmlFor="askAI"
              className="form-label"
              style={{ fontFamily: "cursive" }}
            >
              <b>{t("qnawithAI")}</b>
            </label>
            <input
              className="form-control text-form col-auto"
              id="question4"
              name="question4"
              type="text"
              value={questions.question4}
              onChange={(e) => onChangeValue(e, "rule4")}
              onKeyDown={(e) =>
                e.key === "Enter" ? fetchAIResponse("rule4") : ""
              }
              placeholder={t("rule4Hint")}
            />
            <div>
              <button
                disabled={questions.question4.length === 0 ? true : false}
                type="submit"
                onClick={() => fetchAIResponse("rule4")}
                className="btn btn-success mb-1 my-2"
              >
                {t("sendQuestion")}
              </button>
            </div>
          </div>

          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(responses.response4),
            }}
          ></p>
          <Gameplay url="https://www.youtube.com/embed/MAJDweKl7To" />
        </div>
      </div>

      {/* Rule 5: The Batter’s Turn  */}
      <div id="rule5" className="container my-5 rules-box">
        <h1
          className="comparison-heading text-start"
          style={{ backgroundColor: "rgb(1, 41, 37)" }}
        >
          {t("rule5")} &nbsp;<b>{t("rule5Title")}</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={theBattersTurn}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />

          <p className="lead">{t("rule5Subtitle")}</p>
          <h2>{t("hittingTheBall")}</h2>
          <p>
            <ul>
              <li>{t("hittingTheBall1")}</li>
              <li>{t("hittingTheBall2")}</li>
            </ul>
          </p>
          <h2>{t("strikesAndBalls")}</h2>
          <p>
            <ul>
              <li>
                <b>{t("strikes")}</b>
              </li>
              <ul>
                <li>{t("strikes1")}</li>
                <li>{t("strikes2")}</li>
                <li>{t("strikes3")}</li>
              </ul>
              <li>
                <b>{t("Balls")}</b>
              </li>
              <ul>
                <li>{t("Balls1")}</li>
                <li>{t("Balls2")}</li>
              </ul>
            </ul>
          </p>
          <h2>{t("howABatterisOut")}</h2>
          <p>
            {t("howABatterisOutSubtitle")}
            <ul>
              <li>
                <b>{t("threeStrikes")}</b>
                {t("threeStrikesDetail")}
              </li>
              <li>
                <b>{t("caughtBall")}</b>
                {t("caughtBallDetail")}
              </li>
              <li>
                <b>{t("thrownOut")}</b>
                {t("thrownOutDetail")}
              </li>
              <li>
                <b>{t("interference")}</b>
                {t("interferenceDetail")}
              </li>
            </ul>
          </p>
          <h2>{t("rule5Summary")}</h2>
          <p>{t("rule5SummaryDetails")}</p>

          <div className="mb-3">
            <label
              htmlFor="askAI"
              className="form-label"
              style={{ fontFamily: "cursive" }}
            >
              <b>{t("qnawithAI")}</b>
            </label>
            <input
              className="form-control text-form col-auto"
              id="question5"
              name="question5"
              type="text"
              value={questions.question5}
              onChange={(e) => onChangeValue(e, "rule5")}
              onKeyDown={(e) =>
                e.key === "Enter" ? fetchAIResponse("rule5") : ""
              }
              placeholder={t("rule5Hint")}
            />
            <div>
              <button
                disabled={questions.question5.length === 0 ? true : false}
                type="submit"
                onClick={() => fetchAIResponse("rule5")}
                className="btn btn-success mb-1 my-2"
              >
                {t("sendQuestion")}
              </button>
            </div>
          </div>
          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(responses.response5),
            }}
          ></p>
          <Gameplay url="https://www.youtube.com/embed/eVb1w1DYWwQ" />
        </div>
      </div>

      {/* Rule 6: Base Running  */}
      <div id="rule6" className="container my-5 rules-box">
        <h1
          className="comparison-heading text-start"
          style={{ backgroundColor: "rgb(1, 41, 37)" }}
        >
          {t("rule6")} &nbsp;<b>{t("rule6Title")}</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={baseRunning}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />

          <p className="lead">{t("rule6Subtitle")}</p>
          <h2>{t("runningBetweenBases")}</h2>
          <p>
            <ul>
              <li>
                <b>{t("startingPoint")}</b>
                {t("startingPointDetail")}
              </li>
              <li>
                <b>{t("sequence")}</b>
                {t("sequenceDetail")}
              </li>
              <li>
                <b>{t("decisionMaking")}</b>
                {t("decisionMakingDetail")}
              </li>
            </ul>
          </p>
          <h2>{t("rulesforStayingOnBaseOrAdvancing")}</h2>
          <p>
            <ul>
              <li>
                <b>{t("safeOnBase")}</b>
              </li>
              <ul>
                <li>{t("safeOnBase1")}</li>
                <li>{t("safeOnBase2")}</li>
              </ul>
              <li>
                <b>{t("forceOut")}</b>
              </li>
              <ul>
                <li>{t("forceOut1")}</li>
                <li>{t("forceOut2")}</li>
              </ul>
              <li>
                <b>{t("taggingUp")}</b>
              </li>
              <ul>
                <li>{t("taggingUp1")}</li>
              </ul>
              <li>
                <b>{t("stealingBases")}</b>
              </li>
              <ul>
                <li>{t("stealingBases1")}</li>
              </ul>
              <li>
                <b>{t("overrunningFirstBase")}</b>
              </li>
              <ul>
                <li>{t("overrunningFirstBase1")}</li>
              </ul>
            </ul>
          </p>
          <h2>{t("rule6Summary")}</h2>
          <p>{t("rule6SummaryDetail")}</p>

          <div className="mb-3">
            <label
              htmlFor="askAI"
              className="form-label"
              style={{ fontFamily: "cursive" }}
            >
              <b>{t("qnawithAI")}</b>
            </label>
            <input
              className="form-control text-form col-auto"
              id="question6"
              name="question6"
              type="text"
              value={questions.question6}
              onChange={(e) => onChangeValue(e, "rule6")}
              onKeyDown={(e) =>
                e.key === "Enter" ? fetchAIResponse("rule6") : ""
              }
              placeholder={t("rule6Hint")}
            />
            <div>
              <button
                disabled={questions.question6.length === 0 ? true : false}
                type="submit"
                onClick={() => fetchAIResponse("rule6")}
                className="btn btn-success mb-1 my-2"
              >
                {t("sendQuestion")}
              </button>
            </div>
          </div>

          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(responses.response6),
            }}
          ></p>
          <Gameplay url="https://www.youtube.com/embed/aMgc-vlKMpA" />
        </div>
      </div>

      {/* Rule 7: Scoring Runs  */}
      <div id="rule7" className="container my-5 rules-box">
        <h1
          className="comparison-heading text-start"
          style={{ backgroundColor: "rgb(1, 41, 37)" }}
        >
          {t("rule7")} &nbsp;<b>{t("rule7Title")}</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={scoringRuns}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />

          <p className="lead">{t("rule7Subtitle")}</p>
          <h2>{t("completingARun")}</h2>
          <p>
            <ul>
              <li>{t("completingARun1")}</li>
              <li>{t("completingARun2")}</li>
            </ul>
          </p>
          <h2>{t("timingAndStrategy")}</h2>
          <p>
            <ul>
              <li>
                <b>{t("whenToAdvance")}</b>
              </li>
              <ul>
                <li>{t("whenToAdvance1")}</li>
                <li>{t("whenToAdvance2")}</li>
              </ul>
              <li>
                <b>{t("multipleRuns")}</b>
              </li>
              <ul>
                <li>{t("multipleRuns1")}</li>
              </ul>
            </ul>
          </p>
          <h2>{t("homeRuns")}</h2>
          <p>
            <ul>
              <li>{t("homeRuns1")}</li>
              <li>{t("homeRuns2")}</li>
            </ul>
          </p>
          <h2>{t("errors")}</h2>
          <p>
            <ul>
              <li>{t("errors1")}</li>
            </ul>
          </p>
          <h2>{t("rule7Summary")}</h2>
          <p>{t("rule7SummaryDetail")}</p>

          <div className="mb-3">
            <label
              htmlFor="askAI"
              className="form-label"
              style={{ fontFamily: "cursive" }}
            >
              <b>{t("qnawithAI")}</b>
            </label>
            <input
              className="form-control text-form col-auto"
              id="question7"
              name="question7"
              type="text"
              value={questions.question7}
              onChange={(e) => onChangeValue(e, "rule7")}
              onKeyDown={(e) =>
                e.key === "Enter" ? fetchAIResponse("rule7") : ""
              }
              placeholder={t("rule7Hint")}
            />
            <div>
              <button
                disabled={questions.question7.length === 0 ? true : false}
                type="submit"
                onClick={() => fetchAIResponse("rule7")}
                className="btn btn-success mb-1 my-2"
              >
                {t("sendQuestion")}
              </button>
            </div>
          </div>

          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(responses.response7),
            }}
          ></p>
          <Gameplay url="https://www.youtube.com/embed/NULTp_hRnjA" />
        </div>
      </div>

      {/* Rule 8: The Pitcher’s Role  */}
      <div id="rule8" className="container my-5 rules-box">
        <h1
          className="comparison-heading text-start"
          style={{ backgroundColor: "rgb(1, 41, 37)" }}
        >
          {t("rule8")} &nbsp;<b>{t("rule8Title")}</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={thePitchersRole}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />

          <p className="lead">{t("rule8Subtitle")}</p>
          <h2>{t("howPitchingWorks")}</h2>
          <p>
            <ul>
              <li>
                <b>{t("startingThePlay")}</b>
              </li>
              <ul>
                <li>{t("startingThePlay1")}</li>
                <li>{t("startingThePlay2")}</li>
              </ul>
              <li>
                <b>{t("typeOfPitches")}</b>
              </li>
              <ul>
                <li>{t("typeOfPitches1")}</li>
                <ul>
                  <li>
                    <b>{t("fastBalls")}</b>
                    {t("fastBallsDetail")}
                  </li>
                  <li>
                    <b>{t("curveballs")}</b>
                    {t("curveballsDetail")}
                  </li>
                  <li>
                    <b>{t("changeups")}</b>
                    {t("changeupsDetail")}
                  </li>
                </ul>
              </ul>
            </ul>
          </p>
          <h2>{t("legalPitches")}</h2>
          <p>
            <ul>
              <li>{t("legalPitches1")}</li>
              <li>{t("legalPitches2")}</li>
              <ul>
                <li>{t("legalPitches3")}</li>
              </ul>
            </ul>
          </p>
          <h2>{t("illegalPitches")}</h2>
          <p>
            <ul>
              <li>
                <b>{t("balk")}</b>
              </li>
              <ul>
                <li>{t("balk1")}</li>
              </ul>
              <li>
                <b>{t("throwingAtBatter")}</b>
              </li>
              <ul>
                <li>{t("throwingAtBatter1")}</li>
              </ul>
            </ul>
          </p>
          <h2>{t("strategyAndSkill")}</h2>
          <p>
            <ul>
              <li>
                <b>{t("readingBatter")}</b>
              </li>
              <ul>
                <li>{t("readingBatter1")}</li>
              </ul>
              <li>
                <b>{t("maintainControl")}</b>
              </li>
              <ul>
                <li>{t("maintainControl1")}</li>
              </ul>
            </ul>
          </p>

          <h2>{t("rule8Summary")}</h2>
          <p>{t("rule8SummaryDetail")}</p>

          <div className="mb-3">
            <label
              htmlFor="askAI"
              className="form-label"
              style={{ fontFamily: "cursive" }}
            >
              <b>{t("qnawithAI")}</b>
            </label>
            <input
              className="form-control text-form col-auto"
              id="question8"
              name="question8"
              type="text"
              value={questions.question8}
              onChange={(e) => onChangeValue(e, "rule8")}
              onKeyDown={(e) =>
                e.key === "Enter" ? fetchAIResponse("rule8") : ""
              }
              placeholder={t("rule8Hint")}
            />
            <div>
              <button
                disabled={questions.question8.length === 0 ? true : false}
                type="submit"
                onClick={() => fetchAIResponse("rule8")}
                className="btn btn-success mb-1 my-2"
              >
                {t("sendQuestion")}
              </button>
            </div>
          </div>

          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(responses.response8),
            }}
          ></p>
          <Gameplay url="https://www.youtube.com/embed/4PRGg-wxiAU" />
        </div>
      </div>

      {/* Rule 9: The Fielding Team's Role  */}
      <div id="rule9" className="container my-5 rules-box">
        <h1
          className="comparison-heading text-start"
          style={{ backgroundColor: "rgb(1, 41, 37)" }}
        >
          {t("rule9")} &nbsp;<b>{t("rule9Title")}</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={fieldingTeamsRole}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />

          <p className="lead">{t("rule9Subtitle")}</p>
          <h2>{t("gettingBattersAndRunnersOut")}</h2>
          <p>
            {t("gettingBattersAndRunnersOutSub")}
            <ul>
              <li>
                <b>{t("catchings")}</b>
              </li>
              <ul>
                <li>{t("catchingsDetail")}</li>
              </ul>
              <li>
                <b>{t("taggings")}</b>
              </li>
              <ul>
                <li>{t("taggingsDetail")}</li>
              </ul>
              <li>
                <b>{t("forceOuts")}</b>
              </li>
              <ul>
                <li>{t("forceOuts1")}</li>
                <li>{t("forceOuts2")}</li>
              </ul>
            </ul>
          </p>
          <h2>{t("defensivePlayers")}</h2>
          <p>
            {t("defensivePlayersSubtitle")}
            <ul>
              <li>
                <b>{t("pitcherRole")}</b>
                {t("pitcherRoleDetail")}
              </li>
              <li>
                <b>{t("catcherRole")}</b>
                {t("catcherRoleDetail")}
              </li>
              <li>
                <b>{t("infielderRole")}</b>
                {t("infielderRoleDetail")}
              </li>
            </ul>
          </p>
          <h2>{t("teamCoordinates")}</h2>
          <p>
            <ul>
              <li>{t("teamCoordinates1")}</li>
              <li>{t("teamCoordinates2")}</li>
            </ul>
          </p>
          <h2>{t("rule9Summary")}</h2>
          <p>{t("rule9SummaryDetails")}</p>

          <div className="mb-3">
            <label
              htmlFor="askAI"
              className="form-label"
              style={{ fontFamily: "cursive" }}
            >
              <b>{t("qnawithAI")}</b>
            </label>
            <input
              className="form-control text-form col-auto"
              id="question9"
              name="question9"
              type="text"
              value={questions.question9}
              onChange={(e) => onChangeValue(e, "rule9")}
              onKeyDown={(e) =>
                e.key === "Enter" ? fetchAIResponse("rule9") : ""
              }
              placeholder={t("rule9Hint")}
            />
            <div>
              <button
                disabled={questions.question9.length === 0 ? true : false}
                type="submit"
                onClick={() => fetchAIResponse("rule9")}
                className="btn btn-success mb-1 my-2"
              >
                {t("sendQuestion")}
              </button>
            </div>
          </div>

          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(responses.response9),
            }}
          ></p>
          <Gameplay url="https://www.youtube.com/embed/mH8MpOWfmV8" />
        </div>
      </div>

      {/* Rule 10: Outs and Switching Sides  */}
      <div id="rule10" className="container my-5 rules-box">
        <h1
          className="comparison-heading text-start"
          style={{ backgroundColor: "rgb(1, 41, 37)" }}
        >
          {t("rule10")} &nbsp;<b>{t("rule10Title")}</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={outs}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />

          <p className="lead">{t("rule10Subtitle")}</p>
          <h2>{t("threeOutsToEndAHalfInning")}</h2>
          <p>
            <ul>
              <li>
                <b>{t("whatsAnOut")}</b>
              </li>
              <ul>
                <li>{t("whatsAnOut1")}</li>
              </ul>
              <li>
                <b>{t("howManyOut")}</b>
              </li>
              <ul>
                <li>{t("howManyOut1")}</li>
                <li>{t("howManyOut2")}</li>
              </ul>
            </ul>
          </p>
          <h2>{t("switchingSides")}</h2>
          <p>
            <ul>
              <li>
                <b>{t("whenItHappen")}</b>
              </li>
              <ul>
                <li>{t("whenItHappen1")} </li>
                <li>{t("whenItHappen2")}</li>
              </ul>
              <li>
                <b>{t("halfInning")}</b>
              </li>
              <ul>
                <li>{t("halfInning1")}</li>
                <li>{t("halfInning2")}</li>
              </ul>
            </ul>
          </p>
          <h2>{t("whyRuleImportant")}</h2>
          <p>
            <ul>
              <li>{t("whyRuleImportant1")}</li>
              <li>{t("whyRuleImportant2")} </li>
            </ul>
          </p>
          <h2>{t("rule10Summary")}</h2>
          <p>{t("rule10SummaryDetail")}</p>

          <div className="mb-3">
            <label
              htmlFor="askAI"
              className="form-label"
              style={{ fontFamily: "cursive" }}
            >
              <b>{t("qnawithAI")}</b>
            </label>
            <input
              className="form-control text-form col-auto"
              id="question10"
              name="question10"
              type="text"
              value={questions.question10}
              onChange={(e) => onChangeValue(e, "rule10")}
              onKeyDown={(e) =>
                e.key === "Enter" ? fetchAIResponse("rule10") : ""
              }
              placeholder={t("rule10Hint")}
            />
            <div>
              <button
                disabled={questions.question10.length === 0 ? true : false}
                type="submit"
                onClick={() => fetchAIResponse("rule10")}
                className="btn btn-success mb-1 my-2"
              >
                {t("sendQuestion")}
              </button>
            </div>
          </div>

          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(responses.response10),
            }}
          ></p>
          <Gameplay url="https://www.youtube.com/embed/NfUaxYlBdKA" />
        </div>
      </div>

      {/* Rule 11: Home Runs */}
      <div id="rule11" className="container my-5 rules-box">
        <h1
          className="comparison-heading text-start"
          style={{ backgroundColor: "rgb(1, 41, 37)" }}
        >
          {t("rule11")} &nbsp;<b>{t("rule11Title")}</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={homeRuns}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />

          <p className="lead">{t("rule11Subtitle")}</p>
          <h2>{t("whatHappenDuringHomeRun")}</h2>
          <p>
            <ul>
              <li>
                <b>{t("autoScoring")}</b>
              </li>
              <ul>
                <li>{t("autoScoring1")}</li>
                <li>{t("autoScoring2")}</li>
              </ul>
              <li>
                <b>{t("noNeedRunQuickly")}</b>
              </li>
              <ul>
                <li>{t("noNeedRunQuickly1")}</li>
                <li>{t("noNeedRunQuickly2")}</li>
              </ul>
            </ul>
          </p>
          <h2>{t("typeOfHomeRuns")}</h2>
          <p>
            <ul>
              <li>
                <b>{t("soloHomeRun")}</b>
              </li>
              <ul>
                <li>{t("soloHomeRun1")}</li>
              </ul>
              <li>
                <b>{t("twoThreeGrandSlam")}</b>
              </li>
              <ul>
                <li>{t("twoThreeGrandSlam1")}</li>
                <ul>
                  <li>
                    <b>{t("twoRun")}</b>
                    {t("twoRunDetail")}
                  </li>
                  <li>
                    <b>{t("threeRun")}</b>
                    {t("threeRunDetail")}
                  </li>
                  <li>
                    <b>{t("grandSlam")}</b>
                    {t("grandSlamDetail")}
                  </li>
                </ul>
              </ul>
            </ul>
          </p>
          <h2>{t("whyHomeSpecial")}</h2>
          <p>
            <ul>
              <li>{t("whyHomeSpecial1")}</li>
              <li>{t("whyHomeSpecial2")}</li>
              <li>{t("whyHomeSpecial3")}</li>
            </ul>
          </p>
          <h2>{t("rule11Summary")}</h2>
          <p>{t("rule11SummaryDetail")}</p>

          <div className="mb-3">
            <label
              htmlFor="askAI"
              className="form-label"
              style={{ fontFamily: "cursive" }}
            >
              <b>{t("qnawithAI")}</b>
            </label>
            <input
              className="form-control text-form col-auto"
              id="question11"
              name="question11"
              type="text"
              value={questions.question11}
              onChange={(e) => onChangeValue(e, "rule11")}
              onKeyDown={(e) =>
                e.key === "Enter" ? fetchAIResponse("rule11") : ""
              }
              placeholder={t("rule11Hint")}
            />
            <div>
              <button
                disabled={questions.question11.length === 0 ? true : false}
                type="submit"
                onClick={() => fetchAIResponse("rule11")}
                className="btn btn-success mb-1 my-2"
              >
                {t("sendQuestion")}
              </button>
            </div>
          </div>

          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(responses.response11),
            }}
          ></p>
          <Gameplay url="https://www.youtube.com/embed/kJS9FNXmxvI" />
        </div>
      </div>

      {/* Rule 12: Special Plays  */}
      <div id="rule12" className="container my-5 rules-box">
        <h1
          className="comparison-heading text-start"
          style={{ backgroundColor: "rgb(1, 41, 37)" }}
        >
          {t("rule12")} &nbsp;<b>{t("rule12Title")}</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={specialPlays}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />
          <p className="lead">{t("rule12Subtitle")}</p>
          <h2>{t("doublePlays")}</h2>
          <p>
            <ul>
              <li>{t("doublePlays1")}</li>
              <li>{t("doublePlays2")}</li>
            </ul>
          </p>
          <h2>{t("triplePlays")}</h2>
          <p>
            <ul>
              <li>{t("triplePlays1")}</li>
              <li>{t("triplePlays2")}</li>
            </ul>
          </p>
          <h2>{t("theBunt")}</h2>
          <p>
            {t("theBunt1")}
            <ul>
              <li>
                <b>{t("purpose")}</b>
              </li>
              <ul>
                <li>{t("purpose1")}</li>
                <li>{t("purpose2")}</li>
              </ul>
              <li>
                <b>{t("risk")}</b>
                {t("riskDetail")}
              </li>
            </ul>
          </p>
          <h2>{t("stolenBase")}</h2>
          <p>
            <ul>
              <li>{t("stolenBase1")}</li>
              <li>{t("stolenBase2")}</li>
              <li>
                <b>{t("risks")}</b>
                {t("risksDetail")}
              </li>
            </ul>
          </p>
          <h2>{t("sacrifieceFly")}</h2>
          <p>
            <ul>
              <li>{t("sacrifieceFly1")}</li>
              <li>{t("sacrifieceFly2")}</li>
            </ul>
          </p>
          <h2>{t("pickOff")}</h2>
          <p>
            <ul>
              <li>{t("pickOff1")}</li>
            </ul>
          </p>
          <h2>{t("whySpecialImportant")}</h2>
          <p>
            <ul>
              <li>{t("whySpecialImportant1")}</li>
              <li>{t("whySpecialImportant2")}</li>
              <li>{t("whySpecialImportant3")}</li>
            </ul>
          </p>
          <h2>{t("rule12Summary")}</h2>
          <p>{t("rule12SummaryDetail")}</p>
          <div className="mb-3">
            <label
              htmlFor="askAI"
              className="form-label"
              style={{ fontFamily: "cursive" }}
            >
              <b>{t("qnawithAI")}</b>
            </label>
            <input
              className="form-control text-form col-auto"
              id="question12"
              name="question12"
              type="text"
              value={questions.question12}
              onChange={(e) => onChangeValue(e, "rule12")}
              onKeyDown={(e) =>
                e.key === "Enter" ? fetchAIResponse("rule12") : ""
              }
              placeholder={t("rule12Hint")}
            />
            <div>
              <button
                disabled={questions.question12.length === 0 ? true : false}
                type="submit"
                onClick={() => fetchAIResponse("rule12")}
                className="btn btn-success mb-1 my-2"
              >
                {t("sendQuestion")}
              </button>
            </div>
          </div>
          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(responses.response12),
            }}
          ></p>
          <Gameplay url="https://www.youtube.com/embed/-wRAmV0xseY" />
        </div>
      </div>

      {/* Rule 13: Fouls  */}
      <div id="rule13" className="container my-5 rules-box">
        <h1
          className="comparison-heading text-start"
          style={{ backgroundColor: "rgb(1, 41, 37)" }}
        >
          {t("rule13")} &nbsp;<b>{t("rule13Title")}</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={fouls}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />
          <p className="lead">{t("rule13Subtitle")}</p>
          <h2>{t("whatIsAFoulBall")}</h2>
          <p>
            {t("whatIsAFoulBallSubtitle")}
            <ul>
              <li>{t("whatIsAFoulBall1")}</li>
              <li>
                <b>{t("whatIsAFoulBall2")}</b>
              </li>
              <li>{t("whatIsAFoulBall3")}</li>
            </ul>
          </p>
          <h2>{t("whatsFoulLines")}</h2>
          <p>
            <ul>
              <li>{t("whatsFoulLines1")}</li>
              <li>{t("whatsFoulLines2")} </li>
            </ul>
          </p>
          <h2>{t("consequencesOfFoul")}</h2>
          <p>
            <ul>
              <li>
                <b>{t("forBatter")}</b>
              </li>
              <ul>
                <li>{t("forBatter1")}</li>
                <li>{t("forBatter2")} </li>
                <li>{t("forBatter3")}</li>
              </ul>
              <li>
                <b>{t("forRunner")}</b>
              </li>
              <ul>
                <li>{t("forRunner1")}</li>
              </ul>
            </ul>
          </p>
          <h2>{t("specialCases")}</h2>
          <p>
            <ul>
              <li>{t("specialCases1")}</li>
              <li>{t("specialCases2")}</li>
            </ul>
          </p>
          <h2>{t("whyFouldMatter")}</h2>
          <p>
            <ul>
              <li>{t("whyFouldMatter1")} </li>
              <li>{t("whyFouldMatter2")}</li>
              <li>{t("whyFouldMatter3")}</li>
            </ul>
          </p>
          <h2>{t("rule13Summary")}</h2>
          <p>{t("rule13SummaryDetail")} </p>
          <div className="mb-3">
            <label
              htmlFor="askAI"
              className="form-label"
              style={{ fontFamily: "cursive" }}
            >
              <b>{t("qnawithAI")}</b>
            </label>
            <input
              className="form-control text-form col-auto"
              id="question13"
              name="question13"
              type="text"
              value={questions.question13}
              onChange={(e) => onChangeValue(e, "rule13")}
              onKeyDown={(e) =>
                e.key === "Enter" ? fetchAIResponse("rule13") : ""
              }
              placeholder={t("rule13Hint")}
            />
            <div>
              <button
                disabled={questions.question13.length === 0 ? true : false}
                type="submit"
                onClick={() => fetchAIResponse("rule13")}
                className="btn btn-success mb-1 my-2"
              >
                {t("sendQuestion")}
              </button>
            </div>
          </div>
          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(responses.response13),
            }}
          ></p>
          <Gameplay url="https://www.youtube.com/embed/1qxFSALiBMo" />
        </div>
      </div>

      {/* Rule 14: Umpire and Rules Enforcement  */}
      <div id="rule14" className="container my-5 rules-box">
        <h1
          className="comparison-heading text-start"
          style={{ backgroundColor: "rgb(1, 41, 37)" }}
        >
          {t("rule14")} &nbsp;<b>{t("rule14Title")}</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={umpires}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />
          <p className="lead">{t("rule14Subtitle")}</p>
          <h2>{t("rolesOfUmpire")}</h2>
          <p>
            <ul>
              <li>
                <b>{t("enforcingRole")}</b>
              </li>
              <ul>
                <li>{t("enforcingRole1")}</li>
                <li>{t("enforcingRole2")}</li>
              </ul>
              <li>
                <b>{t("callingPitches")}</b>
              </li>
              <ul>
                <li>{t("callingPitches1")}</li>
              </ul>
              <li>
                <b>{t("makeSafeCall")}</b>
              </li>
              <ul>
                <li>{t("makeSafeCall1")}</li>
              </ul>
              <li>
                <b>{t("overseeingPlayer")}</b>
              </li>
              <ul>
                <li>{t("overseeingPlayer1")}</li>
                <li>{t("overseeingPlayer2")}</li>
              </ul>
              <li>
                <b>{t("ensureFairPlay")}</b>
              </li>
              <ul>
                <li>{t("ensureFairPlay1")}</li>
                <li>{t("ensureFairPlay2")}</li>
              </ul>
              <li>
                <b>{t("handleSituation")}</b>
              </li>
              <ul>
                <li>{t("handleSituation1")}</li>
              </ul>
            </ul>
          </p>
          <h2>{t("umpirePosition")}</h2>
          <p>
            <ul>
              <li>
                <b>{t("homePlateUmp")}</b>
                {t("homePlateUmpDetail")}
              </li>
              <li>
                <b>{t("baseUmp")}</b>
                {t("baseUmpDetail")}
              </li>
              <li>
                <b>{t("outUmp")}</b>
                {t("outUmpDetail")}
              </li>
            </ul>
          </p>
          <h2>{t("whyUmpImp")}</h2>
          <p>
            <ul>
              <li>{t("whyUmpImp1")}</li>
              <li>{t("whyUmpImp2")}</li>
            </ul>
          </p>
          <h2>{t("rule14Summary")}</h2>
          <p>{t("rule14SummaryDetail")}</p>
          <div className="mb-3">
            <label
              htmlFor="askAI"
              className="form-label"
              style={{ fontFamily: "cursive" }}
            >
              <b>{t("qnawithAI")}</b>
            </label>
            <input
              className="form-control text-form col-auto"
              id="question14"
              name="question14"
              type="text"
              value={questions.question14}
              onChange={(e) => onChangeValue(e, "rule14")}
              onKeyDown={(e) =>
                e.key === "Enter" ? fetchAIResponse("rule14") : ""
              }
              placeholder={t("rule14Hint")}
            />
            <div>
              <button
                disabled={questions.question14.length === 0 ? true : false}
                type="submit"
                onClick={() => fetchAIResponse("rule14")}
                className="btn btn-success mb-1 my-2"
              >
                {t("sendQuestion")}
              </button>
            </div>
          </div>
          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(responses.response14),
            }}
          ></p>
          <Gameplay url="https://www.youtube.com/embed/qNdNtyLjA94" />
        </div>
      </div>

      {/* Rule 15: Winning the Game  */}
      <div id="rule15" className="container my-5 rules-box">
        <h1
          className="comparison-heading text-start"
          style={{ backgroundColor: "rgb(1, 41, 37)" }}
        >
          {t("rule15")} &nbsp;<b>{t("rule15Title")}</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={winningTheGame}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />
          <p className="lead">{t("rule15Subtitle")}</p>
          <h2>{t("standardGameLength")}</h2>
          <p>
            <ul>
              <li>{t("standardGameLength1")}</li>
              <ul>
                <li>{t("standardGameLength2")} </li>
                <li>{t("standardGameLength3")}</li>
                <li>{t("standardGameLength4")}</li>
                <li>{t("standardGameLength5")}</li>
              </ul>
              <li>{t("standardGameLength6")}</li>
            </ul>
          </p>
          <h2>{t("tiedGame")}</h2>
          <p>
            <ul>
              <li>{t("tiedGame1")}</li>
              <li>{t("tiedGame2")}</li>
              <li>{t("tiedGame3")}</li>
              <li>{t("tiedGame4")}</li>
            </ul>
          </p>
          <h2>{t("winningBefore9Ing")}</h2>
          <p>
            <ul>
              <li>{t("winningBefore9Ing1")}</li>
              <ul>
                <li>{t("winningBefore9Ing10")}</li>
                <li>{t("winningBefore9Ing101")}</li>
              </ul>
            </ul>
          </p>
          <h2>{t("homeAdvantage")}</h2>
          <p>
            <ul>
              <li>{t("homeAdvantage1")}</li>
            </ul>
          </p>
          <h2>{t("rule15Summary")}</h2>
          <p>{t("rule15SummaryDetail")}</p>
          <div className="mb-3">
            <label
              htmlFor="askAI"
              className="form-label"
              style={{ fontFamily: "cursive" }}
            >
              <b>{t("qnawithAI")}</b>
            </label>
            <input
              className="form-control text-form col-auto"
              id="question15"
              name="question15"
              type="text"
              value={questions.question15}
              onChange={(e) => onChangeValue(e, "rule15")}
              onKeyDown={(e) =>
                e.key === "Enter" ? fetchAIResponse("rule15") : ""
              }
              placeholder={t("rule15Hint")}
            />
            <div>
              <button
                disabled={questions.question15.length === 0 ? true : false}
                type="submit"
                onClick={() => fetchAIResponse("rule15")}
                className="btn btn-success mb-1 my-2"
              >
                {t("sendQuestion")}
              </button>
            </div>
          </div>
          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(responses.response15),
            }}
          ></p>
          <Gameplay url="https://www.youtube.com/embed/VnpQECzymVE" />
        </div>
      </div>
    </>
  );
}
