import React from "react";
import style from "./FounderQuoteBanner.module.scss";

const FounderQuoteBanner = () => {
  return (
    <div className={style.founderQuoteBanner}>
      <div className={style.founderQuoteBanner_text_content}>
        <h4>
          “Сделайте правильный выбор с Property Library Phuket — вашим надежным
          партнером в мире недвижимости.”
        </h4>{" "}
      </div>

      <div className={style.founderQuote_founder}>
        <h2>Эльнур Ханкишиев</h2>
        <h5>Основатель компании Property Library Phuket</h5>
      </div>
    </div>
  );
};

export default FounderQuoteBanner;
