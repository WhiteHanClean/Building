import React from "react";
import style from "./FounderQuoteBanner.module.scss";
import { useTranslation } from "react-i18next";

const FounderQuoteBanner = () => {
  const { t } = useTranslation();
  return (
    <div className={style.founderQuoteBanner}>
      <div className={style.founderQuoteBanner_text_content}>
        <h4>{t("aboutUs.founderQuote")}</h4>{" "}
      </div>

      <div className={style.founderQuote_founder}>
        <h2>{t("aboutUs.welcomeBanner.founder")}</h2>
        <h5>{t("aboutUs.welcomeBanner.founderSubtitle")}</h5>
      </div>
    </div>
  );
};

export default FounderQuoteBanner;
