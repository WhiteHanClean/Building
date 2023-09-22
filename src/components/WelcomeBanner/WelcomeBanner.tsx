import React from "react";
import style from "./WelcomeBanner.module.scss";

const WelcomeBanner = () => {
  return (
    <div className={style.bgImg}>
      <div className={style.textContent}>
        <div className={style.welcomSpeech}>
          <h1>Добро пожаловать в Property Library Phuket</h1>
          <p>
            Ваш ключ к успешным инвестициям и комфортной жизни на острове
            Пхукет.
          </p>
        </div>
        <div className={style.founder}>
          <h2>Эльнур Ханкишиев</h2>
          <p>Основатель компании Property Library Phuket</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
