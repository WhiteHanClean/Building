import React from "react";
import s from "./WelcomeBanner.module.scss";
import { useTranslation } from "react-i18next";

const WelcomeBanner = () => {
  const { t } = useTranslation();
  const tabData = [
    { key: "tab1", title: "Таб 1" },
    { key: "tab2", title: "Таб 2" },
    { key: "tab3", title: "Таб 3" },
  ];

  const contentData = [
    <div>Содержимое Таба 1</div>,
    <div>Содержимое Таба 2</div>,
    <div>Содержимое Таба 3</div>,
  ];
  return (
    <div className={s.welcome_banner}>
      <div className={s.welcome_text_content}>
        <h1>{t("aboutUs.welcomeBanner.title")}</h1>
        <h4>{t("aboutUs.welcomeBanner.subtitle")}</h4>
      </div>

      <div className={s.founder}>
        <h2>{t("aboutUs.welcomeBanner.founder")}</h2>
        <h5>{t("aboutUs.welcomeBanner.founderSubtitle")}</h5>
      </div>
    </div>
  );
};

export default WelcomeBanner;
