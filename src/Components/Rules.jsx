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

const { GoogleGenerativeAI } = require("@google/generative-ai");

export default function Rules() {
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

  const aiJob =
    "You are a baseball expert and teacher. Your role is to guide and educate a new fan who wants to learn about baseball. Always provide clear, accurate, and detailed answers that help the user understand the sport. Respond only as a baseball expert, explaining the rules, history, strategies, and any other aspects related to the game. If the user asks about anything unrelated to baseball, kindly redirect them or let them know you can only discuss baseball or any other sport. Be patient and encouraging, making sure the user feels welcomed and informed on their learning journey. always try to keep your answer short but give full meaningful and required response according to user's question!";

  const genAI = new GoogleGenerativeAI(
    process.env.API_KEY
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });

  const fetchAIResponse = async (rule) => {
    if (rule === "rule1") {
      setResponses((prev) => ({
        ...prev,
        response1: "AI is answering...",
      }));

      const prompt = questions.question1;
      const result = await model.generateContent(
        aiJob + "\n\nPrompt:\n" + prompt
      );

      setResponses((prev) => ({ ...prev, response1: result.response.text() })); // Set the actual AI response after fetching
    } else if (rule === "rule2") {
      setResponses((prev) => ({
        ...prev,
        response2: "AI is answering...",
      }));
      const prompt = questions.question2;
      const result = await model.generateContent(
        aiJob + "\n\nPrompt:\n" + prompt
      );
      setResponses((prev) => ({ ...prev, response2: result.response.text() })); // Set the actual AI response after fetching
    } else if (rule === "rule3") {
      setResponses((prev) => ({
        ...prev,
        response3: "AI is answering...",
      }));
      const prompt = questions.question3;
      const result = await model.generateContent(
        aiJob + "\n\nPrompt:\n" + prompt
      );
      setResponses((prev) => ({ ...prev, response3: result.response.text() })); // Set the actual AI response after fetching
    } else if (rule === "rule4") {
      setResponses((prev) => ({
        ...prev,
        response4: "AI is answering...",
      }));
      const prompt = questions.question4;
      const result = await model.generateContent(
        aiJob + "\n\nPrompt:\n" + prompt
      );
      setResponses((prev) => ({ ...prev, response4: result.response.text() })); // Set the actual AI response after fetching
    } else if (rule === "rule5") {
      setResponses((prev) => ({
        ...prev,
        response5: "AI is answering...",
      }));
      const prompt = questions.question5;
      const result = await model.generateContent(
        aiJob + "\n\nPrompt:\n" + prompt
      );
      setResponses((prev) => ({ ...prev, response5: result.response.text() })); // Set the actual AI response after fetching
    } else if (rule === "rule6") {
      setResponses((prev) => ({
        ...prev,
        response6: "AI is answering...",
      }));
      const prompt = questions.question6;
      const result = await model.generateContent(
        aiJob + "\n\nPrompt:\n" + prompt
      );
      setResponses((prev) => ({ ...prev, response6: result.response.text() })); // Set the actual AI response after fetching
    } else if (rule === "rule7") {
      setResponses((prev) => ({
        ...prev,
        response7: "AI is answering...",
      }));
      const prompt = questions.question7;
      const result = await model.generateContent(
        aiJob + "\n\nPrompt:\n" + prompt
      );
      setResponses((prev) => ({ ...prev, response7: result.response.text() })); // Set the actual AI response after fetching
    } else if (rule === "rule8") {
      setResponses((prev) => ({
        ...prev,
        response8: "AI is answering...",
      }));
      const prompt = questions.question8;
      const result = await model.generateContent(
        aiJob + "\n\nPrompt:\n" + prompt
      );
      setResponses((prev) => ({ ...prev, response8: result.response.text() })); // Set the actual AI response after fetching
    } else if (rule === "rule9") {
      setResponses((prev) => ({
        ...prev,
        response9: "AI is answering...",
      }));
      const prompt = questions.question9;
      const result = await model.generateContent(
        aiJob + "\n\nPrompt:\n" + prompt
      );
      setResponses((prev) => ({ ...prev, response9: result.response.text() })); // Set the actual AI response after fetching
    } else if (rule === "rule10") {
      setResponses((prev) => ({
        ...prev,
        response10: "AI is answering...",
      }));
      const prompt = questions.question10;
      const result = await model.generateContent(
        aiJob + "\n\nPrompt:\n" + prompt
      );
      setResponses((prev) => ({ ...prev, response10: result.response.text() })); // Set the actual AI response after fetching
    } else if (rule === "rule11") {
      setResponses((prev) => ({
        ...prev,
        response11: "AI is answering...",
      }));
      const prompt = questions.question11;
      const result = await model.generateContent(
        aiJob + "\n\nPrompt:\n" + prompt
      );
      setResponses((prev) => ({ ...prev, response11: result.response.text() })); // Set the actual AI response after fetching
    } else if (rule === "rule12") {
      setResponses((prev) => ({
        ...prev,
        response12: "AI is answering...",
      }));
      const prompt = questions.question12;
      const result = await model.generateContent(
        aiJob + "\n\nPrompt:\n" + prompt
      );
      setResponses((prev) => ({ ...prev, response12: result.response.text() })); // Set the actual AI response after fetching
    } else if (rule === "rule13") {
      setResponses((prev) => ({
        ...prev,
        response13: "AI is answering...",
      }));
      const prompt = questions.question13;
      const result = await model.generateContent(
        aiJob + "\n\nPrompt:\n" + prompt
      );
      setResponses((prev) => ({ ...prev, response13: result.response.text() })); // Set the actual AI response after fetching
    } else if (rule === "rule14") {
      setResponses((prev) => ({
        ...prev,
        response14: "AI is answering...",
      }));
      const prompt = questions.question14;
      const result = await model.generateContent(
        aiJob + "\n\nPrompt:\n" + prompt
      );
      setResponses((prev) => ({ ...prev, response14: result.response.text() })); // Set the actual AI response after fetching
    } else if (rule === "rule15") {
      setResponses((prev) => ({
        ...prev,
        response15: "AI is answering...",
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
          Rule No. 1: &nbsp;<b>Number of Players in Baseball</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={noOfPlayers}
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
            <ol>
              <li>
                <b>Pitcher</b>: Throws the ball to the batter.
              </li>
              <li>
                <b>Catcher</b>: Catches the ball behind the batter.
              </li>
              <li>
                <b>First Baseman</b>: Guards first base.
              </li>
              <li>
                <b>Second Baseman</b>: Guards second base.
              </li>
              <li>
                <b>Third Baseman</b>: Guards third base.
              </li>
              <li>
                <b>Shortstop</b>: Plays between second and third base.
              </li>
              <li>
                <b>Left Fielder</b>: Covers the left outfield.
              </li>
              <li>
                <b>Center Fielder</b>: Covers the center outfield.
              </li>
              <li>
                <b>Right Fielder</b>: Covers the right outfield.
              </li>
            </ol>
          </p>
          <h2>When Attacking:</h2>
          <p>
            <ul>
              <li>
                Players take turns one at a time to bat and try to score runs by
                hitting the ball and running around the bases.
              </li>
            </ul>
          </p>
          <h2>How Many Players in Total?</h2>
          <p>
            <ul>
              <li>
                Each team has a <b>roster of 25-26 players</b>, but only{" "}
                <b>9 players</b> from the defending team are active on the field
                at any time.
              </li>
            </ul>
          </p>
          <h2>Summary:</h2>
          <p>
            <ul>
              <li>
                <b>9 players</b> are on the field when a team is defending.
              </li>
              <li>
                <b>1 player</b> bats at a time when attacking.
              </li>
            </ul>
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
              id="question1"
              name="question1"
              type="text"
              value={questions.question1}
              onChange={(e) => onChangeValue(e, "rule1")}
              onKeyDown={(e) =>
                e.key === "Enter" ? fetchAIResponse("rule1") : ""
              }
              placeholder="Ask our AI anything about the 1st rule..."
            />
            <div>
              <button
                disabled={questions.question1.length === 0 ? true : false}
                type="submit"
                onClick={() => fetchAIResponse("rule1")}
                className="btn btn-success mb-1 my-2"
              >
                Send Question
              </button>
            </div>
          </div>

          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(responses.response1),
            }}
          ></p>
        </div>
      </div>

      {/* Rule 2: Objective of the Game  */}
      <div id="rule2" className="container my-5 rules-box">
        <h1
          className="comparison-heading text-start"
          style={{ backgroundColor: "rgb(1, 41, 37)" }}
        >
          Rule No. 2: &nbsp;<b>Objective of the Game</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={objectiveOfGame}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />

          <p className="lead">
            The main objective of baseball is to score runs, and the team with
            the most runs at the end of the game wins. Let’s break it down in
            more detail:
          </p>
          <h2>Scoring Runs:</h2>
          <p>
            A run is scored when a player completes a full circuit around the
            four bases (first base, second base, third base, and home plate) and
            touches each one in order.
            <ul>
              <li>
                <b>The Batter’s Role</b>: When it’s their turn, a player steps
                up to the plate as a batter. They must hit the ball pitched to
                them to start the action.
              </li>
              <li>
                <b>Becoming a Runner</b>: Once the batter successfully hits the
                ball, they transition into a runner and try to advance to as
                many bases as possible without getting "out."
              </li>
            </ul>
          </p>
          <h2>Running the Bases:</h2>
          <p>
            <ul>
              <li>
                <b>Base Path</b>: Players must run within a specific path to
                move from one base to the next.
              </li>
              <li>
                <b>Stopping at a Base</b>: A runner can choose to stop at a base
                if advancing further seems too risky (e.g., the ball is being
                fielded close by). They can continue to the next base during a
                future play.
              </li>
              <li>
                <b>Home Plate</b>: Returning to home plate after touching all
                other bases in sequence earns a run for the team.
              </li>
            </ul>
          </p>
          <h2>The Fielding Team's Goal:</h2>
          <p>
            The fielding team’s job is to prevent the batting team from scoring
            by:
            <ul>
              <li>
                <b>Catching</b>: If they catch a hit ball before it touches the
                ground, the batter is out.
              </li>
              <li>
                <b>Throwing</b>: Fielders can throw the ball to a base before a
                runner gets there, making the runner "out."
              </li>
              <li>
                <b>Tagging</b>: A runner can also be tagged out if they are not
                on a base and a fielder touches them with the ball.
              </li>
            </ul>
          </p>

          <h2>Strategic Plays:</h2>
          <p>
            <ul>
              <li>
                <b>Base Hits</b>: A single hit that allows the batter to reach
                first base is a "single," while reaching further bases on one
                hit can result in a "double," "triple," or even a "home run."
              </li>
              <li>
                <b>Home Run</b>: A home run occurs when the batter hits the ball
                out of the playing field in fair territory. The batter and any
                runners on base automatically score runs.
              </li>
              <li>
                <b>Sacrifices and Bunting</b>: Sometimes, batters will
                intentionally make small hits to allow teammates to advance on
                the bases.
              </li>
            </ul>
          </p>

          <h2>Winning the Game:</h2>
          <p>
            <ul>
              <li>A baseball game is typically played over nine innings.</li>
              <li>Each team gets a turn to bat and field in every inning.</li>
              <li>
                At the end of nine innings, the team with the most runs wins.
              </li>
              <li>
                If the score is tied, extra innings are played until a winner is
                determined.
              </li>
            </ul>
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
              id="question2"
              name="question2"
              type="text"
              value={questions.question2}
              onChange={(e) => onChangeValue(e, "rule2")}
              onKeyDown={(e) =>
                e.key === "Enter" ? fetchAIResponse("rule2") : ""
              }
              placeholder="Ask our AI anything about the 2nd rule..."
            />
            <div>
              <button
                disabled={questions.question2.length === 0 ? true : false}
                type="submit"
                onClick={() => fetchAIResponse("rule2")}
                className="btn btn-success mb-1 my-2"
              >
                Send Question
              </button>
            </div>
          </div>

          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(responses.response2),
            }}
          ></p>
        </div>
      </div>

      {/* Rule 3: Game Structure  */}
      <div id="rule3" className="container my-5 rules-box">
        <h1
          className="comparison-heading text-start"
          style={{ backgroundColor: "rgb(1, 41, 37)" }}
        >
          Rule No. 3: &nbsp;<b>Game Structure</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={gameStructure}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />

          <p className="lead">
            Baseball has a unique structure that ensures fairness and flow
            between the two teams. Let’s break this rule into simpler parts:
          </p>
          <h2>Innings:</h2>
          <p>
            <ul>
              <li>A baseball game is divided into innings.</li>
              <li>Each inning has two halves:</li>
              <ol>
                <li>
                  <b>Top Half</b>: One team bats while the other fields.
                </li>
                <li>
                  <b>Bottom Half</b>: The roles switch.
                </li>
              </ol>
              <li>
                Most games are played over nine innings. If the score is tied,
                extra innings are played until one team wins.
              </li>
            </ul>
          </p>
          <h2>Turns: Batting and Fielding:</h2>
          <p>
            <ul>
              <li>
                Each team gets a turn to bat (try to score runs) and field (try
                to stop the other team from scoring).
              </li>
              <li>A turn ends when the batting team gets three outs.</li>
              <li>
                Once both teams have had a turn tobat and field, the inning is
                over.
              </li>
            </ul>
          </p>
          <h2>The Transition Between Roles:</h2>
          <p>
            <ul>
              <li>
                After three outs, the fielding team becomes the batting team,
                and the batting team goes into the field.
              </li>
              <li>
                These transitions keep the game balanced, giving both teams
                equal chances to score runs.
              </li>
            </ul>
          </p>
          <h2>Why is the Structure Important?</h2>
          <p>
            <ul>
              <li>Innings and turns make the game fair and strategic.</li>
              <li>
                Teams plan their moves carefully, whether it’s about scoring
                runs while batting or stopping the other team when fielding.
              </li>
              <li>
                The flow ensures that both teams face the same number of
                opportunities to score, making baseball a game of skill and
                strategy rather than chance.
              </li>
            </ul>
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
              id="question3"
              name="question3"
              type="text"
              value={questions.question3}
              onChange={(e) => onChangeValue(e, "rule3")}
              onKeyDown={(e) =>
                e.key === "Enter" ? fetchAIResponse("rule3") : ""
              }
              placeholder="Ask our AI anything about the 3rd rule..."
            />
            <div>
              <button
                disabled={questions.question3.length === 0 ? true : false}
                type="submit"
                onClick={() => fetchAIResponse("rule3")}
                className="btn btn-success mb-1 my-2"
              >
                Send Question
              </button>
            </div>
          </div>

          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(responses.response3),
            }}
          ></p>
        </div>
      </div>

      {/* Rule 4 - The Field  */}
      <div id="rule4" className="container my-5 rules-box">
        <h1
          className="comparison-heading text-start"
          style={{ backgroundColor: "rgb(1, 41, 37)" }}
        >
          Rule No. 4: &nbsp;<b>The Field</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={theField}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />

          <p className="lead">
            The baseball field is carefully designed to create a fair and
            exciting game. Let’s break it down:
          </p>
          <h2>Basic Layout:</h2>
          <p>
            The field is shaped like a diamond and is divided into two main
            areas:
            <ul>
              <li>
                <b>Infield</b>: The inner part of the field where the bases and
                pitcher’s mound are located.
              </li>
              <li>
                <b>Outfield</b>: The grassy area beyond the infield.
              </li>
            </ul>
          </p>
          <h2>Bases:</h2>
          <p>
            <ul>
              <li>
                <b>There are four bases</b> arranged in a diamond shape:
              </li>
              <ol>
                <li>
                  <b>Home Plate</b>: Where the batter stands and starts their
                  turn.
                </li>
                <li>
                  <b>First Base</b>
                </li>
                <li>
                  <b>Second Base</b>
                </li>
                <li>
                  <b>Third Base</b>
                </li>
              </ol>
              <li>
                The goal is for runners to touch all four bases in sequence to
                score a run.
              </li>
            </ul>
          </p>
          <h2>Pitcher’s Mound:</h2>
          <p>
            <ul>
              <li>A raised area in the center of the infield.</li>
              <li>
                The <b>pitcher</b> stands here to throw the ball toward the
                batter.
              </li>
              <li>
                It is positioned at a specific distance from home plate to
                ensure fairness.
              </li>
            </ul>
          </p>
          <h2>Summary:</h2>
          <p>
            This layout creates a dynamic game environment, with specific roles
            for players and clear objectives for both offense and defense.
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
              id="question4"
              name="question4"
              type="text"
              value={questions.question4}
              onChange={(e) => onChangeValue(e, "rule4")}
              onKeyDown={(e) =>
                e.key === "Enter" ? fetchAIResponse("rule4") : ""
              }
              placeholder="Ask our AI anything about the 4th rule..."
            />
            <div>
              <button
                disabled={questions.question4.length === 0 ? true : false}
                type="submit"
                onClick={() => fetchAIResponse("rule4")}
                className="btn btn-success mb-1 my-2"
              >
                Send Question
              </button>
            </div>
          </div>

          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(responses.response4),
            }}
          ></p>
        </div>
      </div>

      {/* Rule 5: The Batter’s Turn  */}
      <div id="rule5" className="container my-5 rules-box">
        <h1
          className="comparison-heading text-start"
          style={{ backgroundColor: "rgb(1, 41, 37)" }}
        >
          Rule No. 5: &nbsp;<b>The Batter’s Turn</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={theBattersTurn}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />

          <p className="lead">
            The batter’s turn is a key moment in baseball, where the player
            tries to hit the ball and advance their team’s chances of scoring.
            Let’s break it down:
          </p>
          <h2>Hitting the Ball:</h2>
          <p>
            <ul>
              <li>
                The batter’s main job is to hit the ball thrown by the pitcher.
              </li>
              <li>
                If the ball is hit into the field of play, the batter runs
                toward first base and tries to advance as far as possible.
              </li>
            </ul>
          </p>
          <h2>Strikes and Balls:</h2>
          <p>
            <ul>
              <li>
                <b>Strikes:</b>
              </li>
              <ul>
                <li>If the batter swings and misses, it’s a strike.</li>
                <li>
                  If the batter does not swing and the ball passes through the
                  strike zone, it's a strike.
                </li>
                <li>Three strikes result in the batter being “out.”</li>
              </ul>
              <li>
                <b>Balls:</b>
              </li>
              <ul>
                <li>
                  If the pitcher throws the ball outside the strike zone and the
                  batter doesn’t swing, it’s a ball.
                </li>
                <li>
                  Four balls allow the batter to walk to first base (this is
                  called a "walk").
                </li>
              </ul>
            </ul>
          </p>
          <h2>How a Batter is “Out”:</h2>
          <p>
            A batter can be declared out in several ways:
            <ul>
              <li>
                <b>Three Strikes</b>: The batter fails to hit the ball after
                three strikes.
              </li>
              <li>
                <b>Caught Ball</b>: If a fielder catches the ball in the air
                before it touches the ground.
              </li>
              <li>
                <b>Thrown Out:</b> The ball is thrown to first base before the
                batter arrives. Interference: If the batter interferes with the
                catcher or another player.
              </li>
              <li>
                <b>Interference</b>: If the batter interferes with the catcher
                or another player.
              </li>
            </ul>
          </p>
          <h2>Summary:</h2>
          <p>
            Understanding the batter’s turn helps players and fans grasp the
            excitement and strategy behind every pitch and swing!
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
              id="question5"
              name="question5"
              type="text"
              value={questions.question5}
              onChange={(e) => onChangeValue(e, "rule5")}
              onKeyDown={(e) =>
                e.key === "Enter" ? fetchAIResponse("rule5") : ""
              }
              placeholder="Ask our AI anything about the 5th rule..."
            />
            <div>
              <button
                disabled={questions.question5.length === 0 ? true : false}
                type="submit"
                onClick={() => fetchAIResponse("rule5")}
                className="btn btn-success mb-1 my-2"
              >
                Send Question
              </button>
            </div>
          </div>
          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(responses.response5),
            }}
          ></p>
        </div>
      </div>

      {/* Rule 6: Base Running  */}
      <div id="rule6" className="container my-5 rules-box">
        <h1
          className="comparison-heading text-start"
          style={{ backgroundColor: "rgb(1, 41, 37)" }}
        >
          Rule No. 6: &nbsp;<b>Base Running</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={baseRunning}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />

          <p className="lead">
            Base running is a crucial part of baseball where players move around
            the bases to score runs. Let’s break it down:
          </p>
          <h2>Running Between Bases:</h2>
          <p>
            <ul>
              <li>
                <b>Starting Point</b>: After hitting the ball, the batter
                becomes a runner and heads toward first base.
              </li>
              <li>
                <b>Sequence</b>: The runner’s goal is to advance from first base
                to second base, then to third base, and finally to home plate to
                score a run.
              </li>
              <li>
                <b>Decision Making</b>: Runners must decide whether to stop at a
                base or keep running, depending on how far the ball is hit and
                the fielders’ actions.
              </li>
            </ul>
          </p>
          <h2>Rules for Staying on Base or Advancing:</h2>
          <p>
            <ul>
              <li>
                <b>Safe on Base:</b>
              </li>
              <ul>
                <li>
                  A runner is <b>safe</b> if they reach a base before being
                  tagged or if the base is not “forced.”
                </li>
                <li>
                  Once on a base, the runner can stay there until the next play.
                </li>
              </ul>
              <li>
                <b>Force Out:</b>
              </li>
              <ul>
                <li>
                  A runner must advance if another runner is behind them and the
                  bases are full.
                </li>
                <li>
                  If the fielding team throws the ball to the next base before
                  the runner gets there, the runner is <b>out</b>.
                </li>
              </ul>
              <li>
                <b>Tagging Up:</b>
              </li>
              <ul>
                <li>
                  On a caught fly ball, the runner must <b>tag</b> their current
                  base before advancing to the next one.
                </li>
              </ul>
              <li>
                <b>Stealing Bases:</b>
              </li>
              <ul>
                <li>
                  A runner can try to advance to the next base without the ball
                  being hit, known as <b>stealing a base</b>, but risks being
                  tagged out.
                </li>
              </ul>
              <li>
                <b>Overrunning First Base:</b>
              </li>
              <ul>
                <li>
                  Runners can run past <b>first</b> base without being tagged
                  out, as long as they stay within the baseline and don’t
                  attempt to go to second base.
                </li>
              </ul>
            </ul>
          </p>
          <h2>Summary:</h2>
          <p>
            Base running combines speed, timing, and strategy, making it an
            exciting part of the game as players try to outsmart the defense!
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
              id="question6"
              name="question6"
              type="text"
              value={questions.question6}
              onChange={(e) => onChangeValue(e, "rule6")}
              onKeyDown={(e) =>
                e.key === "Enter" ? fetchAIResponse("rule6") : ""
              }
              placeholder="Ask our AI anything about the 6th rule..."
            />
            <div>
              <button
                disabled={questions.question6.length === 0 ? true : false}
                type="submit"
                onClick={() => fetchAIResponse("rule6")}
                className="btn btn-success mb-1 my-2"
              >
                Send Question
              </button>
            </div>
          </div>

          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(responses.response6),
            }}
          ></p>
        </div>
      </div>

      {/* Rule 7: Scoring Runs  */}
      <div id="rule7" className="container my-5 rules-box">
        <h1
          className="comparison-heading text-start"
          style={{ backgroundColor: "rgb(1, 41, 37)" }}
        >
          Rule No. 7: &nbsp;<b>Scoring Runs</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={scoringRuns}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />

          <p className="lead">
            Scoring runs is the ultimate objective in baseball. A team earns
            runs by completing a full circuit around the bases. Here’s how it
            works:
          </p>
          <h2>Completing a Run:</h2>
          <p>
            <ul>
              <li>
                A player starts at home plate as a batter, progresses through
                first base, second base, and third base, and finally returns to
                home plate to score a run.
              </li>
              <li>
                The player must touch each base in order while avoiding being
                tagged or forced out by the fielding team.
              </li>
            </ul>
          </p>
          <h2>Timing and Strategy:</h2>
          <p>
            <ul>
              <li>
                <b>When to Advance:</b>
              </li>
              <ul>
                <li>
                  Players advance based on how far the ball is hit and the
                  positioning of the fielders.
                </li>
                <li>
                  A well-hit ball (e.g., a double, triple, or home run) makes it
                  easier to complete a run.
                </li>
              </ul>
              <li>
                <b>Multiple Runs in One Play:</b>
              </li>
              <ul>
                <li>
                  If there are runners already on base when the ball is hit,
                  those runners can also advance and score if they successfully
                  reach home plate.
                </li>
              </ul>
            </ul>
          </p>
          <h2>Home Runs:</h2>
          <p>
            <ul>
              <li>
                A <b>home</b> run happens when the batter hits the ball out of
                the field of play (over the fence in fair territory).
              </li>
              <li>
                In this case, the batter and all base runners automatically
                score without the risk of being tagged or forced out.
              </li>
            </ul>
          </p>
          <h2>Errors and Extra Opportunities:</h2>
          <p>
            <ul>
              <li>
                Errors by the fielding team (e.g., missed catches or bad throws)
                can give runners additional chances to advance and score.
              </li>
            </ul>
          </p>
          <h2>Summary:</h2>
          <p>
            The goal for each team is to score as many runs as possible during
            their turn at bat, outpacing their opponents to win the game!
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
              id="question7"
              name="question7"
              type="text"
              value={questions.question7}
              onChange={(e) => onChangeValue(e, "rule7")}
              onKeyDown={(e) =>
                e.key === "Enter" ? fetchAIResponse("rule7") : ""
              }
              placeholder="Ask our AI anything about the 7th rule..."
            />
            <div>
              <button
                disabled={questions.question7.length === 0 ? true : false}
                type="submit"
                onClick={() => fetchAIResponse("rule7")}
                className="btn btn-success mb-1 my-2"
              >
                Send Question
              </button>
            </div>
          </div>

          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(responses.response7),
            }}
          ></p>
        </div>
      </div>

      {/* Rule 8: The Pitcher’s Role  */}
      <div id="rule8" className="container my-5 rules-box">
        <h1
          className="comparison-heading text-start"
          style={{ backgroundColor: "rgb(1, 41, 37)" }}
        >
          Rule No. 8: &nbsp;<b>The Pitcher’s Role</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={thePitchersRole}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />

          <p className="lead">
            The pitcher is one of the most crucial players on the field, as they
            control the pace and outcome of each play. Here’s a breakdown of
            their role:
          </p>
          <h2>How Pitching Works:</h2>
          <p>
            <ul>
              <li>
                <b>Starting the Play:</b>
              </li>
              <ul>
                <li>
                  The pitcher throws the ball from the pitcher’s mound towards
                  the batter at home plate.
                </li>
                <li>
                  The goal is to make it difficult for the batter to hit the
                  ball while staying within the rules.
                </li>
              </ul>
              <li>
                <b>Types of Pitches:</b>
              </li>
              <ul>
                <li>
                  Pitchers use a variety of techniques to throw the ball, such
                  as:
                </li>
                <ul>
                  <li>
                    <b>Fastballs</b>: Thrown at high speed.
                  </li>
                  <li>
                    <b>Curveballs</b>: Spin the ball to make it curve mid-air.
                  </li>
                  <li>
                    <b>Changeups</b>: Appear fast but are slower to deceive the
                    batter.
                  </li>
                </ul>
              </ul>
            </ul>
          </p>
          <h2>Legal Pitches</h2>
          <p>
            <ul>
              <li>
                A pitch must be thrown with one foot in contact with the
                pitching rubber.
              </li>
              <li>
                The pitcher must throw the ball overhand or sidearm, aiming for
                the strike zone:
              </li>
              <ul>
                <li>
                  The strike zone is an imaginary box above home plate, from the
                  batter's knees to their chest.
                </li>
              </ul>
            </ul>
          </p>
          <h2>Illegal Pitches:</h2>
          <p>
            <ul>
              <li>
                <b>Balk:</b>
              </li>
              <ul>
                <li>
                  If the pitcher starts a pitching motion but doesn’t throw the
                  ball, or performs deceptive movements, it’s called a balk,
                  allowing base runners to advance.
                </li>
              </ul>
              <li>
                <b>Throwing at the Batter:</b>
              </li>
              <ul>
                <li>
                  Pitchers must not intentionally throw at the batter. Doing so
                  can result in warnings or ejection.
                </li>
              </ul>
            </ul>
          </p>
          <h2>Strategy and Skill:</h2>
          <p>
            <ul>
              <li>
                <b>Reading the Batter:</b>
              </li>
              <ul>
                <li>
                  The pitcher studies the batter’s weaknesses and adjusts their
                  pitches accordingly.
                </li>
              </ul>
              <li>
                <b>Maintaining Control:</b>
              </li>
              <ul>
                <li>
                  A great pitcher must balance speed, accuracy, and deception to
                  keep the batter guessing.
                </li>
              </ul>
            </ul>
          </p>

          <h2>Summary:</h2>
          <p>
            The pitcher sets the stage for every play, blending strategy, skill,
            and precision to challenge the batter while adhering to the rules.
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
              id="question8"
              name="question8"
              type="text"
              value={questions.question8}
              onChange={(e) => onChangeValue(e, "rule8")}
              onKeyDown={(e) =>
                e.key === "Enter" ? fetchAIResponse("rule8") : ""
              }
              placeholder="Ask our AI anything about the 8th rule..."
            />
            <div>
              <button
                disabled={questions.question8.length === 0 ? true : false}
                type="submit"
                onClick={() => fetchAIResponse("rule8")}
                className="btn btn-success mb-1 my-2"
              >
                Send Question
              </button>
            </div>
          </div>

          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(responses.response8),
            }}
          ></p>
        </div>
      </div>

      {/* Rule 9: The Fielding Team's Role  */}
      <div id="rule9" className="container my-5 rules-box">
        <h1
          className="comparison-heading text-start"
          style={{ backgroundColor: "rgb(1, 41, 37)" }}
        >
          Rule No. 9: &nbsp;<b>The Fielding Team's Role</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={fieldingTeamsRole}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />

          <p className="lead">
            The fielding team plays defense, trying to prevent the batting team
            from scoring runs by getting batters and runners out. Here's how it
            works:
          </p>
          <h2>Getting Batters and Runners Out:</h2>
          <p>
            The fielding team has several ways to achieve an out:
            <ul>
              <li>
                <b>Catching:</b>
              </li>
              <ul>
                <li>
                  If a batter hits the ball into the air and a fielder catches
                  it before it touches the ground, the batter is out.
                </li>
              </ul>
              <li>
                <b>Tagging:</b>
              </li>
              <ul>
                <li>
                  A fielder can tag a runner by touching them with the ball (or
                  the glove holding the ball) when the runner is not on a base.
                </li>
              </ul>
              <li>
                <b>Force-Outs:</b>
              </li>
              <ul>
                <li>
                  When a runner is forced to advance to the next base because
                  the batter hits the ball, the fielding team can throw the ball
                  to that base before the runner gets there.
                </li>
                <li>
                  Example: If the batter runs to first base, the fielder at
                  first base just needs to touch the base while holding the ball
                  to record a force-out.
                </li>
              </ul>
            </ul>
          </p>
          <h2>Defensive Players and Their Roles:</h2>
          <p>
            Each player on the fielding team has a specific position and role in
            preventing runs:
            <ul>
              <li>
                <b>Pitcher</b>: Throws the ball to the batter.
              </li>
              <li>
                <b>Catcher</b>: Catches the pitcher’s throws and defends home
                plate.
              </li>
              <li>
                <b>Infielders</b>: Defend the area around the bases (first base,
                second base, third base, and shortstop). Outfielders: Cover the
                outfield to catch long hits and prevent extra bases.
              </li>
            </ul>
          </p>
          <h2>Team Coordination:</h2>
          <p>
            <ul>
              <li>
                Fielders work together to execute plays, such as double plays
                (getting two outs in one sequence).
              </li>
              <li>
                Good communication and awareness are key to efficiently fielding
                the ball and making outs.
              </li>
            </ul>
          </p>
          <h2>Summary:</h2>
          <p>
            The fielding team’s goal is to stop the batter from hitting safely
            and to prevent runners from advancing, using tactics like catching,
            tagging, and force-outs to regain their chance at batting.
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
              id="question9"
              name="question9"
              type="text"
              value={questions.question9}
              onChange={(e) => onChangeValue(e, "rule9")}
              onKeyDown={(e) =>
                e.key === "Enter" ? fetchAIResponse("rule9") : ""
              }
              placeholder="Ask our AI anything about the 9th rule..."
            />
            <div>
              <button
                disabled={questions.question9.length === 0 ? true : false}
                type="submit"
                onClick={() => fetchAIResponse("rule9")}
                className="btn btn-success mb-1 my-2"
              >
                Send Question
              </button>
            </div>
          </div>

          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(responses.response9),
            }}
          ></p>
        </div>
      </div>

      {/* Rule 10: Outs and Switching Sides  */}
      <div id="rule10" className="container my-5 rules-box">
        <h1
          className="comparison-heading text-start"
          style={{ backgroundColor: "rgb(1, 41, 37)" }}
        >
          Rule No. 10: &nbsp;<b>Outs and Switching Sides</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={outs}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />

          <p className="lead">
            The game of baseball is structured into innings, and each inning has
            two halves: one where a team bats and the other where it fields.
            Here’s how outs and side-switching work:
          </p>
          <h2>Three Outs to End a Half-Inning:</h2>
          <p>
            <ul>
              <li>
                <b>What is an Out?</b>
              </li>
              <ul>
                <li>
                  An out occurs when the fielding team successfully stops the
                  batting team through actions like catching a fly ball, tagging
                  a runner, or force-outs.
                </li>
              </ul>
              <li>
                <b>How Many Outs Are Needed?</b>
              </li>
              <ul>
                <li>
                  The batting team continues to hit until the fielding team gets
                  three outs.
                </li>
                <li>
                  Once three outs are made, the batting team's turn ends, and
                  the roles switch. the fielding team goes to bat, and the
                  batting team takes the field.
                </li>
              </ul>
            </ul>
          </p>
          <h2>Switching Sides:</h2>
          <p>
            <ul>
              <li>
                <b>When Does It Happen?</b>
              </li>
              <ul>
                <li>
                  After three outs, both teams change positions on the field.
                </li>
                <li>
                  The fielding team comes to bat, and the batting team takes
                  their places on the field.
                </li>
              </ul>
              <li>
                <b>Half-Inning Completion:</b>
              </li>
              <ul>
                <li>
                  Each team gets one turn to bat and one turn to field per
                  inning.
                </li>
                <li>
                  A full inning is completed once both teams have had their
                  chance to bat.
                </li>
              </ul>
            </ul>
          </p>
          <h2>Why This Rule is Important?</h2>
          <p>
            <ul>
              <li>
                This structure ensures fairness, as each team gets an equal
                opportunity to score runs and defend.
              </li>
              <li>
                The switch between roles keeps the game dynamic, with players
                needing to adapt from batting to fielding and vice versa.
              </li>
            </ul>
          </p>
          <h2>Summary:</h2>
          <p>
            The fielding team aims to get <b>three outs</b> to end the batting
            team’s turn, after which the roles switch, maintaining the balance
            of offense and defense throughout the game.
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
              id="question10"
              name="question10"
              type="text"
              value={questions.question10}
              onChange={(e) => onChangeValue(e, "rule10")}
              onKeyDown={(e) =>
                e.key === "Enter" ? fetchAIResponse("rule10") : ""
              }
              placeholder="Ask our AI anything about the 10th rule..."
            />
            <div>
              <button
                disabled={questions.question10.length === 0 ? true : false}
                type="submit"
                onClick={() => fetchAIResponse("rule10")}
                className="btn btn-success mb-1 my-2"
              >
                Send Question
              </button>
            </div>
          </div>

          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(responses.response10),
            }}
          ></p>
        </div>
      </div>

      {/* Rule 11: Home Runs */}
      <div id="rule11" className="container my-5 rules-box">
        <h1
          className="comparison-heading text-start"
          style={{ backgroundColor: "rgb(1, 41, 37)" }}
        >
          Rule No. 11: &nbsp;<b>Home Runs</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={homeRuns}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />

          <p className="lead">
            A <b>home run</b> is one of the most exciting moments in baseball!
            It occurs when the batter hits the ball so hard and far that it
            leaves the field of play, typically beyond the outfield fence.
          </p>
          <h2>What Happens During a Home Run?</h2>
          <p>
            <ul>
              <li>
                <b>Automatic Scoring:</b>
              </li>
              <ul>
                <li>
                  The batter and any runners already on base automatically
                  score.
                </li>
                <li>
                  This means the team gets one run for the batter and one
                  additional run for each player who was on base when the ball
                  was hit.
                </li>
              </ul>
              <li>
                <b>No Need to Run Quickly:</b>
              </li>
              <ul>
                <li>
                  Since the ball is out of play, no fielders can retrieve it.
                </li>
                <li>
                  The batter and runners can jog around the bases at their own
                  pace, touching each base (first, second, third, and home).
                </li>
              </ul>
            </ul>
          </p>
          <h2>Types of Home Runs:</h2>
          <p>
            <ul>
              <li>
                <b>Solo Home Run:</b>
              </li>
              <ul>
                <li>
                  If there are no runners on base, only the batter scores.
                </li>
              </ul>
              <li>
                <b>Two-Run, Three-Run, or Grand Slam:</b>
              </li>
              <ul>
                <li>If there are runners on base:</li>
                <ul>
                  <li>
                    <b>Two-Run Home Run</b>: One runner on base.
                  </li>
                  <li>
                    <b>Three-Run Home Run</b>: Two runners on base.
                  </li>
                  <li>
                    <b>Grand Slam</b>: Bases are fully loaded, scoring four runs
                    in total!
                  </li>
                </ul>
              </ul>
            </ul>
          </p>
          <h2>Why Are Home Runs Special?</h2>
          <p>
            <ul>
              <li>A home run is the quickest way to score multiple runs.</li>
              <li>
                It often shifts the momentum of the game and excites fans.
              </li>
              <li>
                Some players are known for their ability to hit home runs,
                making it a celebrated skill in baseball.
              </li>
            </ul>
          </p>
          <h2>Summary:</h2>
          <p>
            A home run not only guarantees scoring but also showcases the
            batter's power and skill, making it one of the most thrilling
            aspects of the game!
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
              id="question11"
              name="question11"
              type="text"
              value={questions.question11}
              onChange={(e) => onChangeValue(e, "rule11")}
              onKeyDown={(e) =>
                e.key === "Enter" ? fetchAIResponse("rule11") : ""
              }
              placeholder="Ask our AI anything about the 11th rule..."
            />
            <div>
              <button
                disabled={questions.question11.length === 0 ? true : false}
                type="submit"
                onClick={() => fetchAIResponse("rule11")}
                className="btn btn-success mb-1 my-2"
              >
                Send Question
              </button>
            </div>
          </div>

          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(responses.response11),
            }}
          ></p>
        </div>
      </div>

      {/* Rule 12: Special Plays  */}
      <div id="rule12" className="container my-5 rules-box">
        <h1
          className="comparison-heading text-start"
          style={{ backgroundColor: "rgb(1, 41, 37)" }}
        >
          Rule No. 12: &nbsp;<b>Special Plays</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={specialPlays}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />
          <p className="lead">
            In baseball, special plays are unique situations or strategies that
            can change the outcome of a game. They often require quick thinking
            and teamwork. Let’s explore some key special plays:
          </p>
          <h2>Double Plays:</h2>
          <p>
            <ul>
              <li>
                A double play occurs when the fielding team records two outs
                during a single play.
              </li>
              <li>
                Example: A batter hits a ground ball to the shortstop. The
                shortstop throws to second base for one out, and the second
                baseman throws to first base for the second out.
              </li>
            </ul>
          </p>
          <h2>Triple Plays:</h2>
          <p>
            <ul>
              <li>
                A rare and impressive feat where the fielding team gets three
                outs in a single play.
              </li>
              <li>
                Example: If the bases are loaded and the batter hits a line
                drive that’s caught, runners may be caught off their bases,
                allowing the fielders to tag two more players out.
              </li>
            </ul>
          </p>
          <h2>The Bunt:</h2>
          <p>
            A bunt is when the batter lightly taps the ball with the bat instead
            of swinging.
            <ul>
              <li>
                <b>Purpose: </b>
              </li>
              <ul>
                <li>Advance runners to the next base.</li>
                <li>Catch the fielding team off guard.</li>
              </ul>
              <li>
                <b>Risk</b>: The ball must stay within fair territory and be
                hard enough to avoid an easy out.
              </li>
            </ul>
          </p>
          <h2>Stolen Base:</h2>
          <p>
            <ul>
              <li>
                A stolen base happens when a runner advances to the next base{" "}
                <b>while the pitcher is delivering the ball</b> to the batter.
              </li>
              <li>Success depends on speed and timing.</li>
              <li>
                <b>Risks</b>: The catcher may throw the ball to the base ahead,
                potentially tagging the runner out.
              </li>
            </ul>
          </p>
          <h2>Sacrifice Fly:</h2>
          <p>
            <ul>
              <li>
                When a batter hits a fly ball deep enough for a runner on base
                to tag up and advance, usually scoring a run.
              </li>
              <li>The batter is out, but the team gains a run.</li>
            </ul>
          </p>
          <h2>Pick-Off:</h2>
          <p>
            <ul>
              <li>
                A defensive move where the pitcher or catcher throws the ball to
                a base to tag out a runner who’s leading off too far.
              </li>
            </ul>
          </p>
          <h2>Why Are Special Plays Important?</h2>
          <p>
            <ul>
              <li>
                These plays showcase strategy, skill, and quick decision-making.
              </li>
              <li>They add excitement and unpredictability to the game.</li>
              <li>Mastering these plays can give a team a competitive edge.</li>
            </ul>
          </p>
          <h2>Summary:</h2>
          <p>
            Special plays are what make baseball not just a physical game but a
            mental one, rewarding strategy and teamwork!
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
              id="question12"
              name="question12"
              type="text"
              value={questions.question12}
              onChange={(e) => onChangeValue(e, "rule12")}
              onKeyDown={(e) =>
                e.key === "Enter" ? fetchAIResponse("rule12") : ""
              }
              placeholder="Ask our AI anything about the 12th rule..."
            />
            <div>
              <button
                disabled={questions.question12.length === 0 ? true : false}
                type="submit"
                onClick={() => fetchAIResponse("rule12")}
                className="btn btn-success mb-1 my-2"
              >
                Send Question
              </button>
            </div>
          </div>
          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(responses.response12),
            }}
          ></p>
        </div>
      </div>

      {/* Rule 13: Fouls  */}
      <div id="rule13" className="container my-5 rules-box">
        <h1
          className="comparison-heading text-start"
          style={{ backgroundColor: "rgb(1, 41, 37)" }}
        >
          Rule No. 13: &nbsp;<b>Fouls</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={fouls}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />
          <p className="lead">
            In baseball, a <b>foul ball</b> is a hit ball that lands or is
            touched outside the field's foul lines. Let’s break this rule down
            for clarity:
          </p>
          <h2>What is a Foul Ball?</h2>
          <p>
            A foul ball occurs when the ball:
            <ul>
              <li>
                <b>Touches the ground or a player</b> outside the foul lines.
              </li>
              <li>
                <b>Does not land in fair territory</b>
              </li>
              <li>
                <b>Hits a structure or spectator area</b> outside the foul
                lines.
              </li>
            </ul>
          </p>
          <h2>The Foul Lines:</h2>
          <p>
            <ul>
              <li>
                The foul lines run from home plate to the outfield fence along
                first and third base.
              </li>
              <li>
                A ball is considered fair if it lands on or inside these lines.
              </li>
            </ul>
          </p>
          <h2>Consequences of a Foul Ball:</h2>
          <p>
            <ul>
              <li>
                <b>For the Batter:</b>
              </li>
              <ul>
                <li>
                  A foul counts as a strike unless the batter already has two
                  strikes.
                </li>
                <li>
                  A batter cannot strike out on a foul ball (except on a bunt).
                </li>
                <li>
                  If the foul ball is caught in the air by a fielder, the batter
                  is out.
                </li>
              </ul>
              <li>
                <b>For the Runners:</b>
              </li>
              <ul>
                <li>
                  Runners must return to their bases unless the ball is caught
                  in the air and they are tagging up to advance.
                </li>
              </ul>
            </ul>
          </p>
          <h2>Special Cases:</h2>
          <p>
            <ul>
              <li>
                A ball hit into the air near the foul line may be caught by a
                fielder in foul territory. This results in an out.
              </li>
              <li>
                If a ball initially lands in fair territory but rolls foul
                before passing first or third base and isn’t touched, it’s a
                foul.
              </li>
            </ul>
          </p>
          <h2>Why Do Fouls Matter?</h2>
          <p>
            <ul>
              <li>
                Fouls help pitchers defend against batters by adding strikes.
              </li>
              <li>
                They require batters to adjust their hitting strategy to keep
                the ball in play.
              </li>
              <li>
                Fielders use fouls as opportunities to make catches and secure
                outs.
              </li>
            </ul>
          </p>
          <h2>Summary:</h2>
          <p>
            Fouls are an important aspect of baseball, keeping the game fair and
            challenging for both hitters and defenders!
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
              id="question13"
              name="question13"
              type="text"
              value={questions.question13}
              onChange={(e) => onChangeValue(e, "rule13")}
              onKeyDown={(e) =>
                e.key === "Enter" ? fetchAIResponse("rule13") : ""
              }
              placeholder="Ask our AI anything about the 13th rule..."
            />
            <div>
              <button
                disabled={questions.question13.length === 0 ? true : false}
                type="submit"
                onClick={() => fetchAIResponse("rule13")}
                className="btn btn-success mb-1 my-2"
              >
                Send Question
              </button>
            </div>
          </div>
          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(responses.response13),
            }}
          ></p>
        </div>
      </div>

      {/* Rule 14: Umpire and Rules Enforcement  */}
      <div id="rule14" className="container my-5 rules-box">
        <h1
          className="comparison-heading text-start"
          style={{ backgroundColor: "rgb(1, 41, 37)" }}
        >
          Rule No. 14: &nbsp;<b>Umpire and Rules Enforcement</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={umpires}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />
          <p className="lead">
            In baseball, <b>umpires</b> are the officials responsible for
            ensuring the game is played fairly and according to the rules. They
            play a critical role in maintaining the integrity of the game and
            making important decisions during play:
          </p>
          <h2>Roles of the Umpire:</h2>
          <p>
            <ul>
              <li>
                <b>Enforcing Rules:</b>
              </li>
              <ul>
                <li>
                  Umpires ensure all players and teams follow the official rules
                  of baseball.
                </li>
                <li>
                  They make judgments on plays, such as whether a pitch is a
                  ball or a strike, whether a runner is safe or out, and whether
                  a ball is fair or foul.
                </li>
              </ul>
              <li>
                <b>Calling Pitches:</b>
              </li>
              <ul>
                <li>
                  The home plate umpire determines whether a pitch is a strike
                  (inside the strike zone) or a ball (outside the strike zone).
                </li>
              </ul>
              <li>
                <b>Making Safe/Out Calls:</b>
              </li>
              <ul>
                <li>
                  Umpires on the bases decide if runners are <b>safe</b> or{" "}
                  <b>out</b> when trying to advance.
                </li>
              </ul>
              <li>
                <b>Overseeing Plays:</b>
              </li>
              <ul>
                <li>
                  They monitor and enforce rules for legal pitching, base
                  running, fielding, and hitting.
                </li>
                <li>
                  They ensure substitutions and changes follow proper
                  procedures.
                </li>
              </ul>
              <li>
                <b>Ensuring Fair Play:</b>
              </li>
              <ul>
                <li>
                  Umpires prevent unsportsmanlike behavior, such as arguing
                  excessively, intentional interference, or illegal actions.
                </li>
                <li>
                  They can eject players, coaches, or managers for serious
                  misconduct.
                </li>
              </ul>
              <li>
                <b>Handling Special Situations:</b>
              </li>
              <ul>
                <li>
                  They make decisions in cases of disputed plays, rain delays,
                  or other unusual circumstances.
                </li>
              </ul>
            </ul>
          </p>
          <h2>Umpire Positions:</h2>
          <p>
            <ul>
              <li>
                <b>Home Plate Umpire</b>: Stands behind the catcher and calls
                balls, strikes, and plays at home plate.
              </li>
              <li>
                <b>Base Umpires</b>: Positioned near the bases to oversee base
                running and plays in the infield.
              </li>
              <li>
                <b>Outfield Umpires</b>(in some games): Judge plays in the
                outfield and help with fair/foul calls.
              </li>
            </ul>
          </p>
          <h2>Why the Umpire is Important:</h2>
          <p>
            <ul>
              <li>
                Without umpires, the game could descend into chaos, as players
                and coaches might argue endlessly over decisions.
              </li>
              <li>
                Umpires ensure the game progresses smoothly, fairly, and without
                bias.
              </li>
            </ul>
          </p>
          <h2>Summary:</h2>
          <p>
            <b>Umpires</b> are the guardians of fairness and order in baseball,
            ensuring every play aligns with the spirit and rules of the game.
            They make tough calls under pressure and are an essential part of
            baseball's structure.
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
              id="question14"
              name="question14"
              type="text"
              value={questions.question14}
              onChange={(e) => onChangeValue(e, "rule14")}
              onKeyDown={(e) =>
                e.key === "Enter" ? fetchAIResponse("rule14") : ""
              }
              placeholder="Ask our AI anything about the 14th rule..."
            />
            <div>
              <button
                disabled={questions.question14.length === 0 ? true : false}
                type="submit"
                onClick={() => fetchAIResponse("rule14")}
                className="btn btn-success mb-1 my-2"
              >
                Send Question
              </button>
            </div>
          </div>
          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(responses.response14),
            }}
          ></p>
        </div>
      </div>

      {/* Rule 15: Winning the Game  */}
      <div id="rule15" className="container my-5 rules-box">
        <h1
          className="comparison-heading text-start"
          style={{ backgroundColor: "rgb(1, 41, 37)" }}
        >
          Rule No. 15: &nbsp;<b>Winning the Game</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={winningTheGame}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />
          <p className="lead">
            The ultimate goal of baseball is to{" "}
            <b>score more runs than the opposing team</b> by the end of the
            game. Here’s how winners are determined:
          </p>
          <h2>Standard Game Length:</h2>
          <p>
            <ul>
              <li>
                A baseball game typically consists of <b>9 innings.</b>
              </li>
              <ul>
                <li>Each inning is divided into two halves: </li>
                <li>
                  The <b>top half</b>, where the visiting team bats.
                </li>
                <li>
                  The <b>bottom half</b>, where the home team bats.
                </li>
                <li>
                  The teams take turns batting and fielding, and the inning ends
                  when the fielding team gets <b>three outs</b>.
                </li>
              </ul>
              <li>
                At the end of the <b>9th inning</b>, the team with the most runs
                scored is declared the winner.
              </li>
            </ul>
          </p>
          <h2>Tied Games and Extra Innings:</h2>
          <p>
            <ul>
              <li>
                If the score is tied at the end of 9 innings, the game goes into{" "}
                <b>extra innings</b> to break the tie.
              </li>
              <li>
                Each extra inning follows the same structure as a regular
                inning.
              </li>
              <li>
                The game continues until one team has more runs than the other
                at the end of a complete inning.
              </li>
              <li>
                The goal in extra innings remains the same: outscore the
                opponent during that inning to secure the win.
              </li>
            </ul>
          </p>
          <h2>Winning Before the 9th Inning (Mercy Rule):</h2>
          <p>
            <ul>
              <li>
                In certain leagues, a mercy rule may apply (often in amateur or
                youth baseball):
              </li>
              <ul>
                <li>
                  This rule ends the game early if one team has a very large
                  lead after a certain number of innings.
                </li>
                <li>
                  For example, if a team is ahead by 10 or more runs after 7
                  innings, the game may be called.
                </li>
              </ul>
            </ul>
          </p>
          <h2>Home Team Advantage:</h2>
          <p>
            <ul>
              <li>
                If the <b>home team</b> is ahead in the bottom half of the 9th
                inning (or in any extra inning), the game ends immediately, and
                the home team wins. This is called a <b>walk-off win</b>.
              </li>
            </ul>
          </p>
          <h2>Summary:</h2>
          <p>
            The <b>winner of a baseball game</b> is the team that scores the
            most runs by the end of the game, whether it’s during the standard 9
            innings or through extra innings in the case of a tie. The structure
            ensures fairness and excitement for fans until the very last play.
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
              id="question15"
              name="question15"
              type="text"
              value={questions.question15}
              onChange={(e) => onChangeValue(e, "rule15")}
              onKeyDown={(e) =>
                e.key === "Enter" ? fetchAIResponse("rule15") : ""
              }
              placeholder="Ask our AI anything about the 15th rule..."
            />
            <div>
              <button
                disabled={questions.question15.length === 0 ? true : false}
                type="submit"
                onClick={() => fetchAIResponse("rule15")}
                className="btn btn-success mb-1 my-2"
              >
                Send Question
              </button>
            </div>
          </div>
          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(responses.response15),
            }}
          ></p>
        </div>
      </div>
    </>
  );
}
