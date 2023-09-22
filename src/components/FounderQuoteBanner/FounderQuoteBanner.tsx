import React from 'react';
import style from './FounderQuoteBanner.module.scss'

const FounderQuoteBanner = () => {
    return (
        <div>
             <div className={style.bgImg}>
      <div className={style.textContent}>
        <div className={style.founderQuote}>
          <p>
          “Сделайте правильный выбор с Property Library Phuket — вашим надежным партнером в мире недвижимости.”
          </p>
        </div>
        <div className={style.founder}>
          <h2>Эльнур Ханкишиев</h2>
          <p>Основатель компании Property Library Phuket</p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default FounderQuoteBanner;