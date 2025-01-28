import React from "react";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="container rules-box">
        <div className="container text-start">
          <h1 className="mb-4">
            LearnBaseball: <b>{t("privacyTitle")}</b>
          </h1>
          <p>{t("privacyDesc")} </p>

          <div className="mb-4">
            <h2>{t("infoWeCollect")}</h2>
            <ul style={{ color: "white" }}>
              <li>
                <strong>{t("usageData")}</strong> {t("usageDataDetail")}
              </li>
              <li>
                <strong>{t("deviceData")}</strong> {t("deviceDataDetail")}
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h2>{t("howUseYourInfo")}</h2>
            <p>{t("howUseYourInfoSub")}</p>
            <ul style={{ color: "white" }}>
              <li>{t("howUseYourInfoSub1")}</li>
              <li>{t("howUseYourInfoSub2")}</li>
            </ul>
          </div>

          <div className="mb-4">
            <h2>{t("thirdPartyService")}</h2>
            <p>{t("thirdPartyService1")}</p>
          </div>

          <div className="mb-4">
            <h2>{t("changesInPolicy")}</h2>
            <p>{t("changesInPolicy1")} </p>
          </div>

          <div className="text-start">
            <p>
              {t("changesInPolicy2")}
              <a
                style={{
                  textDecorationColor: "rgb(185, 250, 177)",
                  color: "rgb(185, 250, 177)",
                }}
                href="mailto:support@learnbaseball.com"
              >
                support@learnbaseball.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
