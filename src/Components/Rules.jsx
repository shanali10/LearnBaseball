import React, { useState } from "react";
import "../Css/Rules.css";
import srcImage from "../Images/learn_baseball_logo.jpeg";
import { marked } from "marked"; // Import marked for converting markdown to HTML

const { GoogleGenerativeAI } = require("@google/generative-ai");

export default function Rules() {
  // question inputs from different rules sections
  const [questionInput1, setQuestionInput1] = useState(""); // State to write text in input field
  const [questionInput2, setQuestionInput2] = useState(""); // State to write text in input field
  // ai responses from different rules sections
  const [aiResponse1, setAIResponse1] = useState(""); // State to hold AI response
  const [aiResponse2, setAIResponse2] = useState(""); // State to hold AI response

  const aiJob =
    "You are a baseball expert and teacher. Your role is to guide and educate a new fan who wants to learn about baseball. Always provide clear, accurate, and detailed answers that help the user understand the sport. Respond only as a baseball expert, explaining the rules, history, strategies, and any other aspects related to the game. If the user asks about anything unrelated to baseball, kindly redirect them or let them know you can only discuss baseball or anyother sport. Be patient and encouraging, making sure the user feels welcomed and informed on their learning journey. always try to keep your answer short but give full meaningful and required response according to user's question!";

  const genAI = new GoogleGenerativeAI(
    process.env.API_KEY
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });
  const prompt = questionInput1;

  const fetchAIResponse1 = async () => {
    setAIResponse1("AI is answering...");
    const result = await model.generateContent(
      aiJob + "\n\nPrompt:\n" + prompt
    );
    setAIResponse1(result.response.text()); // Set the actual AI response after fetching
    setQuestionInput1(""); // Clear the input field
    setQuestionInput2(""); // Clear the input field
  };

  const fetchAIResponse2 = async () => {
    setAIResponse2("AI is answering...");
    const result = await model.generateContent(
      aiJob + "\n\nPrompt:\n" + prompt
    );
    setAIResponse2(result.response.text()); // Set the actual AI response after fetching
    setQuestionInput1("");
    setQuestionInput2(""); // Clear the input field
  };

  const onChangeValue = (e) => {
    setQuestionInput1(e.target.value);
    setQuestionInput2(e.target.value);
  };

  // Convert the Markdown response into HTML using marked
  const getHtmlFromMarkdown = (markdown) => {
    return marked(markdown); // Convert Markdown to HTML
  };

  return (
    <>
      {/* Rule 1: No. of Players  */}
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
              id="question1"
              name="question1"
              type="text"
              value={questionInput1}
              onChange={onChangeValue}
              placeholder="Ask our AI anything about the first rule..."
            />
            <div>
              <button
                disabled={questionInput1.length === 0 ? true : false}
                type="submit"
                onClick={fetchAIResponse1}
                className="btn btn-success mb-1 my-2"
              >
                Send Question
              </button>
            </div>
          </div>

          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(aiResponse1),
            }}
          ></p>
        </div>
      </div>

      {/* Rule 2: Objective of the Game  */}
      <div className="container my-5 rules-box">
        <h1 className="comparison-heading text-start">
          Rule No. 2: <b>Objective of the Game</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={srcImage}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />

          <p className="lead">
            The main objective of baseball is to score runs, and the team with
            the most runs at the end of the game wins. Let’s break it down in
            more detail:
          </p>
          <h2>1. Scoring Runs:</h2>
          <p>
            A run is scored when a player completes a full circuit around the
            four bases (first base, second base, third base, and home plate) and
            touches each one in order.
            <br />
            1. <b>The Batter’s Role</b>: When it’s their turn, a player steps up
            to the plate as a batter. They must hit the ball pitched to them to
            start the action. <br />
            2. <b>Becoming a Runner</b>: Once the batter successfully hits the
            ball, they transition into a runner and try to advance to as many
            bases as possible without getting "out." <br />
          </p>
          <h2>2. Running the Bases:</h2>
          <p>
            1. <b>Base Path</b>: Players must run within a specific path to move
            from one base to the next. <br />
            2. <b>Stopping at a Base</b>: A runner can choose to stop at a base
            if advancing further seems too risky (e.g., the ball is being
            fielded close by). They can continue to the next base during a
            future play. <br />
            3. <b>Home Plate</b>: Returning to home plate after touching all
            other bases in sequence earns a run for the team. <br />
          </p>
          <h2>3. The Fielding Team's Goal:</h2>
          <p>
            The fielding team’s job is to prevent the batting team from scoring
            by:
            <br />
            1. <b>Catching</b>: If they catch a hit ball before it touches the
            ground, the batter is out. <br />
            2. <b>Throwing</b>: Fielders can throw the ball to a base before a
            runner gets there, making the runner "out." <br />
            3. <b>Tagging</b>: A runner can also be tagged out if they are not
            on a base and a fielder touches them with the ball. <br />
          </p>

          <h2>4. Strategic Plays:</h2>
          <p>
            1. <b>Base Hits</b>: A single hit that allows the batter to reach
            first base is a "single," while reaching further bases on one hit
            can result in a "double," "triple," or even a "home run." <br />
            2. <b>Home Run</b>: A home run occurs when the batter hits the ball
            out of the playing field in fair territory. The batter and any
            runners on base automatically score runs. <br />
            3. <b>Sacrifices and Bunting</b>: Sometimes, batters will
            intentionally make small hits to allow teammates to advance on the
            bases.
            <br />
          </p>

          <h2>5. Winning the Game:</h2>
          <p>
            &#8226; A baseball game is typically played over nine innings.
            <br />
            &#8226; Each team gets a turn to bat and field in every inning.{" "}
            <br />
            &#8226; At the end of nine innings, the team with the most runs
            wins. <br />
            &#8226; If the score is tied, extra innings are played until a
            winner is determined.
            <br />
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
              value={questionInput2}
              onChange={onChangeValue}
              placeholder="Ask our AI anything about the second rule..."
            />
            <div>
              <button
                disabled={questionInput2.length === 0 ? true : false}
                type="submit"
                onClick={fetchAIResponse2}
                className="btn btn-success mb-1 my-2"
              >
                Send Question
              </button>
            </div>
          </div>

          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(aiResponse2),
            }}
          ></p>
        </div>
      </div>

      {/* Rule 3: Game Structure  */}
      <div className="container my-2 rules-box">
        <h1 className="comparison-heading text-start">
          Rule No. 3: <b>Game Structure</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={srcImage}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />

          <p className="lead">
            Baseball has a unique structure that ensures fairness and flow
            between the two teams. Let’s break this rule into simpler parts:
          </p>
          <h2>1. Innings:</h2>
          <p>
            &#8226; A baseball game is divided into innings. <br />
            &#8226; Each inning has two halves: <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. <b>Top Half</b>: One team bats
            while the other fields. <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. <b>Bottom Half</b>: The roles
            switch. <br />
            &#8226; Most games are played over nine innings. If the score is
            tied, extra innings are played until one team wins.
          </p>
          <h2>2. Turns: Batting and Fielding:</h2>
          <p>
            &#8226; Each team gets a turn to bat (try to score runs) and field
            (try to stop the other team from scoring). <br />
            &#8226; A turn ends when the batting team gets three outs. <br />
            &#8226; Once both teams have had a turn tobat and field, the inning
            is over.
          </p>
          <h2>3. The Transition Between Roles:</h2>
          <p>
            &#8226; After three outs, the fielding team becomes the batting
            team, and the batting team goes into the field. <br />
            &#8226; These transitions keep the game balanced, giving both teams
            equal chances to score runs.
          </p>
          <h2>4. Why is the Structure Important?</h2>
          <p>
            &#8226; Innings and turns make the game fair and strategic. <br />
            &#8226; Teams plan their moves carefully, whether it’s about scoring
            runs while batting or stopping the other team when fielding. <br />
            &#8226; The flow ensures that both teams face the same number of
            opportunities to score, making baseball a game of skill and strategy
            rather than chance.
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
              value={questionInput1}
              onChange={onChangeValue}
              placeholder="Ask our AI anything about the third rule..."
            />
            <div>
              <button
                disabled={questionInput1.length === 0 ? true : false}
                type="submit"
                onClick={fetchAIResponse1}
                className="btn btn-success mb-1 my-2"
              >
                Send Question
              </button>
            </div>
          </div>

          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(aiResponse1),
            }}
          ></p>
        </div>
      </div>

      {/* Rule 4 - The Field  */}
      <div className="container my-5 rules-box">
        <h1 className="comparison-heading text-start">
          Rule No. 4: <b>The Field</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={srcImage}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />

          <p className="lead">
            The baseball field is carefully designed to create a fair and
            exciting game. Let’s break it down:
          </p>
          <h2>1. Basic Layout:</h2>
          <p>
            The field is shaped like a diamond and is divided into two main
            areas:
            <br />
            &nbsp; &nbsp; &#8226; <b>Infield</b>: The inner part of the field
            where the bases and pitcher’s mound are located. <br />
            &nbsp; &nbsp; &#8226; <b>Outfield</b>: The grassy area beyond the
            infield. <br />
          </p>
          <h2>2. Bases:</h2>
          <p>
            &#8226; <b>There are four bases</b> arranged in a diamond shape:{" "}
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; 1. <b>Home Plate</b>: Where the batter
            stands and starts their turn. <br />
            &nbsp; &nbsp; &nbsp; &nbsp; 2. <b>First Base</b> <br />
            &nbsp; &nbsp; &nbsp; &nbsp; 3. <b>Second Base</b> <br />
            &nbsp; &nbsp; &nbsp; &nbsp; 4. <b>Third Base</b> <br />
            &#8226; The goal is for runners to touch all four bases in sequence
            to score a run.
          </p>
          <h2>3. Pitcher’s Mound:</h2>
          <p>
            &#8226; A raised area in the center of the infield. <br />
            &#8226; The <b>pitcher</b> stands here to throw the ball toward the
            batter. <br />
            &#8226; It is positioned at a specific distance from home plate to
            ensure fairness.
          </p>
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
              id="question1"
              name="question1"
              type="text"
              value={questionInput1}
              onChange={onChangeValue}
              placeholder="Ask our AI anything about the fourth rule..."
            />
            <div>
              <button
                disabled={questionInput1.length === 0 ? true : false}
                type="submit"
                onClick={fetchAIResponse1}
                className="btn btn-success mb-1 my-2"
              >
                Send Question
              </button>
            </div>
          </div>

          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(aiResponse1),
            }}
          ></p>
        </div>
      </div>

      {/* Rule 5: The Batter’s Turn  */}
      <div className="container my-5 rules-box">
        <h1 className="comparison-heading text-start">
          Rule No. 5: <b>The Batter’s Turn</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={srcImage}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />

          <p className="lead">
            The batter’s turn is a key moment in baseball, where the player
            tries to hit the ball and advance their team’s chances of scoring.
            Let’s break it down:
          </p>
          <h2>1. Hitting the Ball:</h2>
          <p>
            &#8226; The batter’s main job is to hit the ball thrown by the
            pitcher. <br />
            &#8226; If the ball is hit into the field of play, the batter runs
            toward first base and tries to advance as far as possible.
          </p>
          <h2>2. Strikes and Balls:</h2>
          <p>
            1. <b>Strikes:</b> <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &#8226; If the batter swings and misses,
            it’s a strike. <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &#8226; If the batter does not swing and
            the ball passes through the strike zone, it's a strike. <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &#8226; Three strikes result in the
            batter being “out.” <br />
            2. <b>Balls:</b> <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &#8226; If the pitcher throws the ball
            outside the strike zone and the batter doesn’t swing, it’s a ball.{" "}
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &#8226; Four balls allow the batter to
            walk to first base (this is called a "walk"). <br />
          </p>
          <h2>3. How a Batter is “Out”:</h2>
          <p>
            A batter can be declared out in several ways: <br />
            1. <b>Three Strikes</b>: The batter fails to hit the ball after
            three strikes. <br />
            2. <b>Caught Ball</b>: If a fielder catches the ball in the air
            before it touches the ground. <br />
            3. <b>Thrown Out:</b> The ball is thrown to first base before the
            batter arrives. Interference: If the batter interferes with the
            catcher or another player. <br />
            4. <b>Interference</b>: If the batter interferes with the catcher or
            another player.
          </p>
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
              id="question1"
              name="question1"
              type="text"
              value={questionInput1}
              onChange={onChangeValue}
              placeholder="Ask our AI anything about the first rule..."
            />
            <div>
              <button
                disabled={questionInput1.length === 0 ? true : false}
                type="submit"
                onClick={fetchAIResponse1}
                className="btn btn-success mb-1 my-2"
              >
                Send Question
              </button>
            </div>
          </div>
          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(aiResponse1),
            }}
          ></p>
        </div>
      </div>

      {/* Rule 6: Base Running  */}
      <div className="container my-5 rules-box">
        <h1 className="comparison-heading text-start">
          Rule No. 6: <b>Base Running</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={srcImage}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />

          <p className="lead">
            Base running is a crucial part of baseball where players move around
            the bases to score runs. Let’s break it down:
          </p>
          <h2>1. Running Between Bases:</h2>
          <p>
            &#8226; <b>Starting Point</b>: After hitting the ball, the batter
            becomes a runner and heads toward first base. <br />
            &#8226; <b>Sequence</b>: The runner’s goal is to advance from first
            base to second base, then to third base, and finally to home plate
            to score a run. <br />
            &#8226; <b>Decision Making</b>: Runners must decide whether to stop
            at a base or keep running, depending on how far the ball is hit and
            the fielders’ actions.
          </p>
          <h2>2. Rules for Staying on Base or Advancing:</h2>
          <p>
            &#8226; <b>Safe on Base:</b> <br />
            &nbsp; &nbsp; &nbsp; &#8226; A runner is <b>safe</b> if they reach a
            base before being tagged or if the base is not “forced.” <br />
            &nbsp; &nbsp; &nbsp; &#8226; Once on a base, the runner can stay
            there until the next play. <br />
            &#8226; <b>Force Out:</b> <br />
            &nbsp; &nbsp; &nbsp; &#8226; A runner must advance if another runner
            is behind them and the bases are full. <br />
            &nbsp; &nbsp; &nbsp; &#8226; If the fielding team throws the ball to
            the next base before the runner gets there, the runner is <b>out</b>
            . <br />
            &#8226; <b>Tagging Up:</b> <br />
            &nbsp; &nbsp; &nbsp; &#8226; On a caught fly ball, the runner must{" "}
            <b>tag</b> their current base before advancing to the next one.{" "}
            <br />
            &#8226; <b>Stealing Bases:</b> <br />
            &nbsp; &nbsp; &nbsp; &#8226; A runner can try to advance to the next
            base without the ball being hit, known as <b>stealing a base</b>,
            but risks being tagged out. <br />
            &#8226; <b>Overrunning First Base:</b> <br />
            &nbsp; &nbsp; &nbsp; &#8226; Runners can run past <b>first</b> base
            without being tagged out, as long as they stay within the baseline
            and don’t attempt to go to second base.
          </p>
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
              id="question1"
              name="question1"
              type="text"
              value={questionInput1}
              onChange={onChangeValue}
              placeholder="Ask our AI anything about the sixth rule..."
            />
            <div>
              <button
                disabled={questionInput1.length === 0 ? true : false}
                type="submit"
                onClick={fetchAIResponse1}
                className="btn btn-success mb-1 my-2"
              >
                Send Question
              </button>
            </div>
          </div>

          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(aiResponse1),
            }}
          ></p>
        </div>
      </div>

      {/* Rule 7: Scoring Runs  */}
      <div className="container my-5 rules-box">
        <h1 className="comparison-heading text-start">
          Rule No. 7: <b>Scoring Runs</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={srcImage}
            className="col-md-6 float-md-end mb-3 ms-md-3 comparison-image"
            alt="side_image"
          />

          <p className="lead">
            Scoring runs is the ultimate objective in baseball. A team earns
            runs by completing a full circuit around the bases. Here’s how it
            works:
          </p>
          <h2>1. Completing a Run:</h2>
          <p>
            &#8226; A player starts at home plate as a batter, progresses
            through first base, second base, and third base, and finally returns
            to home plate to score a run. <br />
            &#8226; The player must touch each base in order while avoiding
            being tagged or forced out by the fielding team.
          </p>
          <h2>2. Timing and Strategy:</h2>
          <p>
            &#8226; <b>When to Advance:</b> <br />
            &nbsp; &nbsp; &nbsp; &#8226; Players advance based on how far the
            ball is hit and the positioning of the fielders. <br />
            &nbsp; &nbsp; &nbsp; &#8226; A well-hit ball (e.g., a double,
            triple, or home run) makes it easier to complete a run. <br />
            &#8226; <b>Multiple Runs in One Play:</b> <br />
            &nbsp; &nbsp; &nbsp; &#8226; If there are runners already on base
            when the ball is hit, those runners can also advance and score if
            they successfully reach home plate.
          </p>
          <h2>3. Home Runs:</h2>
          <p>
            &#8226; A <b>home</b> run happens when the batter hits the ball out
            of the field of play (over the fence in fair territory). <br />
            &#8226; In this case, the batter and all base runners automatically
            score without the risk of being tagged or forced out.
          </p>
          <h2>4. Errors and Extra Opportunities:</h2>
          <p>
            &#8226; Errors by the fielding team (e.g., missed catches or bad
            throws) can give runners additional chances to advance and score.
          </p>
          <br />
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
              id="question1"
              name="question1"
              type="text"
              value={questionInput1}
              onChange={onChangeValue}
              placeholder="Ask our AI anything about the first rule..."
            />
            <div>
              <button
                disabled={questionInput1.length === 0 ? true : false}
                type="submit"
                onClick={fetchAIResponse1}
                className="btn btn-success mb-1 my-2"
              >
                Send Question
              </button>
            </div>
          </div>

          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(aiResponse1),
            }}
          ></p>
        </div>
      </div>

      {/* Rule 8: The Pitcher’s Role  */}
      <div className="container my-5 rules-box">
        <h1 className="comparison-heading text-start">
          Rule No. 8: <b>The Pitcher’s Role</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={srcImage}
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
            &#8226; <b>Starting the Play:</b> <br />
            &nbsp; &nbsp; &nbsp; &#8226; The pitcher throws the ball from the
            pitcher’s mound towards the batter at home plate. <br />
            &nbsp; &nbsp; &nbsp; &#8226; The goal is to make it difficult for
            the batter to hit the ball while staying within the rules.
            <br /> &#8226; <b>Types of Pitches:</b> <br />
            &nbsp; &nbsp; &nbsp; &#8226; Pitchers use a variety of techniques to
            throw the ball, such as:
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#8226; <b>Fastballs</b>: Thrown
            at high speed. <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#8226; <b>Curveballs</b>: Spin
            the ball to make it curve mid-air. &nbsp; <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#8226; <b>Changeups</b>: Appear
            fast but are slower to deceive the batter.
          </p>
          <h2>Legal Pitches:</h2>
          <p>
            &#8226; A pitch must be thrown with one foot in contact with the
            pitching rubber. <br />
            &#8226; The pitcher must throw the ball overhand or sidearm, aiming
            for the strike zone: <br />
            &nbsp; &nbsp; &nbsp; &#8226; The strike zone is an imaginary box
            above home plate, from the batter's knees to their chest.
          </p>
          <h2>Illegal Pitches:</h2>
          <p>
            &#8226; <b>Balk:</b> <br />
            &nbsp; &nbsp; &nbsp; &#8226; If the pitcher starts a pitching motion
            but doesn’t throw the ball, or performs deceptive movements, it’s
            called a balk, allowing base runners to advance. <br />
            &#8226; <b>Throwing at the Batter:</b> <br />
            &nbsp; &nbsp; &nbsp; &#8226; Pitchers must not intentionally throw
            at the batter. Doing so can result in warnings or ejection.
          </p>
          <h2>Strategy and Skill:</h2>
          <p>
            &#8226; <b>Reading the Batter:</b> <br />
            &nbsp; &nbsp; &nbsp; &#8226; The pitcher studies the batter’s
            weaknesses and adjusts their pitches accordingly. <br />
            &#8226; <b>Maintaining Control:</b> <br />
            &nbsp; &nbsp; &nbsp; &#8226; A great pitcher must balance speed,
            accuracy, and deception to keep the batter guessing.
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
              id="question1"
              name="question1"
              type="text"
              value={questionInput1}
              onChange={onChangeValue}
              placeholder="Ask our AI anything about the 8th rule..."
            />
            <div>
              <button
                disabled={questionInput1.length === 0 ? true : false}
                type="submit"
                onClick={fetchAIResponse1}
                className="btn btn-success mb-1 my-2"
              >
                Send Question
              </button>
            </div>
          </div>

          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(aiResponse1),
            }}
          ></p>
        </div>
      </div>

      {/* Rule 9: The Fielding Team's Role  */}
      <div className="container my-5 rules-box">
        <h1 className="comparison-heading text-start">
          Rule No. 9: <b>The Fielding Team's Role</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={srcImage}
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
            <br />
            &#8226; <b>Catching:</b> <br />
            &nbsp; &nbsp; &nbsp; &#8226; If a batter hits the ball into the air
            and a fielder catches it before it touches the ground, the batter is
            out. <br />
            &#8226; <b>Tagging:</b> <br />
            &nbsp; &nbsp; &nbsp; &#8226; A fielder can tag a runner by touching
            them with the ball (or the glove holding the ball) when the runner
            is not on a base. <br />
            &#8226; <b>Force-Outs:</b> <br />
            &nbsp; &nbsp; &nbsp; &#8226; When a runner is forced to advance to
            the next base because the batter hits the ball, the fielding team
            can throw the ball to that base before the runner gets there. <br />
            &nbsp; &nbsp; &nbsp; &#8226; Example: If the batter runs to first
            base, the fielder at first base just needs to touch the base while
            holding the ball to record a force-out.
          </p>
          <h2>Defensive Players and Their Roles:</h2>
          <p>
            Each player on the fielding team has a specific position and role in
            preventing runs: <br />
            &nbsp; &nbsp; &nbsp; &#8226; <b>Pitcher</b>: Throws the ball to the
            batter. <br />
            &nbsp; &nbsp; &nbsp; &#8226; <b>Catcher</b>: Catches the pitcher’s
            throws and defends home plate. <br />
            &nbsp; &nbsp; &nbsp; &#8226; <b>Infielders</b>: Defend the area
            around the bases (first base, second base, third base, and
            shortstop). Outfielders: Cover the outfield to catch long hits and
            prevent extra bases.
          </p>
          <h2>Team Coordination:</h2>
          <p>
            &#8226; Fielders work together to execute plays, such as double
            plays (getting two outs in one sequence). <br />
            &#8226; Good communication and awareness are key to efficiently
            fielding the ball and making outs.
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
              id="question1"
              name="question1"
              type="text"
              value={questionInput1}
              onChange={onChangeValue}
              placeholder="Ask our AI anything about the 9th rule..."
            />
            <div>
              <button
                disabled={questionInput1.length === 0 ? true : false}
                type="submit"
                onClick={fetchAIResponse1}
                className="btn btn-success mb-1 my-2"
              >
                Send Question
              </button>
            </div>
          </div>

          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(aiResponse1),
            }}
          ></p>
        </div>
      </div>

      {/* Rule 10: Outs and Switching Sides  */}
      <div className="container my-5 rules-box">
        <h1 className="comparison-heading text-start">
          Rule No. 10: <b>Outs and Switching Sides</b>
        </h1>

        <div className="clearfix text-start">
          <img
            src={srcImage}
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
            &#8226; <b>What is an Out?</b> <br />
            &nbsp; &nbsp; &nbsp; &#8226; An out occurs when the fielding team
            successfully stops the batting team through actions like catching a
            fly ball, tagging a runner, or force-outs. <br />
            &#8226; <b>How Many Outs Are Needed?</b> <br />
            &nbsp; &nbsp; &nbsp; &#8226; The batting team continues to hit until
            the fielding team gets three outs. <br />
            &nbsp; &nbsp; &nbsp; &#8226; Once three outs are made, the batting
            team's turn ends, and the roles switch: the fielding team goes to
            bat, and the batting team takes the field.
          </p>
          <h2>Switching Sides:</h2>
          <p>
            &#8226; <b>When Does It Happen?</b> <br />
            &nbsp; &nbsp; &nbsp; &#8226; After three outs, both teams change
            positions on the field. <br />
            &nbsp; &nbsp; &nbsp; &#8226; The fielding team comes to bat, and the
            batting team takes their places on the field. <br />
            &#8226; <b>Half-Inning Completion:</b> <br />
            &nbsp; &nbsp; &nbsp; &#8226; Each team gets one turn to bat and one
            turn to field per inning. <br />
            &nbsp; &nbsp; &nbsp; &#8226; A full inning is completed once both
            teams have had their chance to bat.
          </p>
          <h2>Why This Rule is Important?</h2>
          <p>
            &#8226; This structure ensures fairness, as each team gets an equal
            opportunity to score runs and defend. <br />
            &#8226; The switch between roles keeps the game dynamic, with
            players needing to adapt from batting to fielding and vice versa.
          </p>
          <h2>Summary:</h2>
          <p>
            The fielding team aims to get <b>three outs</b> to end the batting team’s
            turn, after which the roles switch, maintaining the balance of
            offense and defense throughout the game.
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
              value={questionInput1}
              onChange={onChangeValue}
              placeholder="Ask our AI anything about the 10th rule..."
            />
            <div>
              <button
                disabled={questionInput1.length === 0 ? true : false}
                type="submit"
                onClick={fetchAIResponse1}
                className="btn btn-success mb-1 my-2"
              >
                Send Question
              </button>
            </div>
          </div>

          <p
            className="lead my-2 ai-response"
            dangerouslySetInnerHTML={{
              __html: getHtmlFromMarkdown(aiResponse1),
            }}
          ></p>
        </div>
      </div>
    </>
  );
}
