import React from "react";
import s from "./WelcomeBanner.module.scss";

const WelcomeBanner = () => {
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
        <h1>Добро пожаловать в Property Library Phuket</h1>
        <h4>
          Ваш ключ к успешным инвестициям <br /> и комфортной жизни на острове
          Пхукет.
        </h4>
      </div>

      <div className={s.founder}>
        <h2>Эльнур Ханкишиев</h2>
        <h5>Основатель компании Property Library Phuket</h5>
      </div>
    </div>
  );
};

export default WelcomeBanner;
