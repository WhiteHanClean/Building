import React from "react";
import style from "./Services.module.scss";

const Services = () => {
  return (
    <div className={style.servicesBlock}>
      <div className={style.commonBlock}>
        <h1>Услуги</h1>

        <p>
          Мы предлагаем широкий спектр услуг, соблюдая высокое качество сервиса
          для наших клиентов.
        </p>
      </div>
      <div className={style.optionBlock}>
        <div className={style.textContentOptionBlock}>
          <h2>Покупка</h2>
          <p>
            Подберем для вас самые ликвиднее объекты недвижимости для жизни и
            инвестирования на острове Пхукет.
          </p>
        </div>
        <button className={style.btnLink}>
          <img src="tabler_arrow-up.png" alt="arrow" />
        </button>
      </div>
      <div className={style.optionBlock}>
        <div className={style.textContentOptionBlock}>
          <h2>Разместить свою недвижимость</h2>
          <p>
            Наши специалисты помогут с продажей, а также предоставят возможность
            вам сдавать в аренду свою недвижимость с доходностью 6-10% годовых.
          </p>
        </div>
        <button className={style.btnLink}>
          <img src="tabler_arrow-up.png" alt="arrow" />
        </button>
      </div>
      <div className={style.optionBlock}>
        <div className={style.textContentOptionBlock}>
          <h2>Аренда</h2>
          <p>
            Персональная подготовка к заселению, встреча в аэропорту, надежное
            обслуживание и постоянная поддержка.
          </p>
        </div>
        <button className={style.btnLink}>
          <img src="tabler_arrow-up.png" alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Services;
