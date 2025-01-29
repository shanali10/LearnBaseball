import React from "react";
import "../Css/RulesTable.css";
import { useTranslation } from "react-i18next";

export default function RulesTable() {
  const { t } = useTranslation();

  return (
    <>
      {/* Table of content (Rules)  */}
      <div className="container my-2">
        <h1
          style={{
            backgroundColor: "black",
            border: "2px solid white",
            padding: "1%",
            color: "yellow",
            marginTop: "50px",
          }}
        >
          {t("contentTableTitle")}
        </h1>
      </div>
      <div className="list-group container my-2 list-group-horizontal">
        <a
          href="#rule1"
          id="rule1"
          className="list-group-item list-group-item-action"
          aria-current="true"
          style={{ backgroundColor: "black", color: "white" }}
        >
          {t("content1")}
        </a>
        <a
          href="#rule2"
          className="list-group-item list-group-item-action"
          aria-current="true"
          style={{ backgroundColor: "black", color: "white" }}
        >
          {t("content2")}
        </a>
        <a
          href="#rule3"
          className="list-group-item list-group-item-action"
          style={{ backgroundColor: "black", color: "white" }}
        >
          {t("content3")}
        </a>
        <a
          href="#rule4"
          className="list-group-item list-group-item-action"
          style={{ backgroundColor: "black", color: "white" }}
        >
          {t("content4")}
        </a>
        <a
          href="#rule5"
          className="list-group-item list-group-item-action"
          style={{ backgroundColor: "black", color: "white" }}
        >
          {t("content5")}
        </a>
      </div>
      <div className="list-group container my-2 list-group-horizontal">
        <a
          href="#rule6"
          className="list-group-item list-group-item-action"
          style={{ backgroundColor: "black", color: "white" }}
        >
          {t("content6")}
        </a>
        <a
          href="#rule7"
          className="list-group-item list-group-item-action"
          style={{ backgroundColor: "black", color: "white" }}
        >
          {t("content7")}
        </a>
        <a
          href="#rule8"
          className="list-group-item list-group-item-action"
          style={{ backgroundColor: "black", color: "white" }}
        >
          {t("content8")}
        </a>
        <a
          href="#rule9"
          className="list-group-item list-group-item-action"
          style={{ backgroundColor: "black", color: "white" }}
        >
          {t("content9")}
        </a>
        <a
          href="#rule10"
          className="list-group-item list-group-item-action"
          aria-current="true"
          style={{ backgroundColor: "black", color: "white" }}
        >
          {t("content10")}
        </a>
      </div>
      <div className="list-group container list-group-horizontal">
        <a
          href="#rule11"
          className="list-group-item list-group-item-action"
          style={{ backgroundColor: "black", color: "white" }}
        >
          {t("content11")}
        </a>
        <a
          href="#rule12"
          className="list-group-item list-group-item-action"
          style={{ backgroundColor: "black", color: "white" }}
        >
          {t("content12")}
        </a>
        <a
          href="#rule13"
          className="list-group-item list-group-item-action"
          style={{ backgroundColor: "black", color: "white" }}
        >
          {t("content13")}
        </a>
        <a
          href="#rule14"
          className="list-group-item list-group-item-action"
          style={{ backgroundColor: "black", color: "white" }}
        >
          {t("content14")}
        </a>
        <a
          href="#rule15"
          className="list-group-item list-group-item-action"
          style={{ backgroundColor: "black", color: "white" }}
        >
          {t("content15")}
        </a>
      </div>
    </>
  );
}
