import React from "react";

export default function Gameplay(props) {
  return (
    <div
      className="my-4"
      style={{ width: "auto", margin: "auto", height: "auto", border: "2px solid rgb(179, 245, 204)", borderRadius: "5px"}}
    >
      <iframe
        width="100%"
        height="375"
        src={props.url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <h2>⚾ Gameplay - MLB® Highlights </h2>
      <p>📜 All Rights Reserved © Major League Baseball</p>
    </div>
  );
}
