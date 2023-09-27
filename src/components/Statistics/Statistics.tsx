import React from "react";
import s from "./Statistics.module.scss";

const Statistics: React.FC = () => {
  return (
    <div className={s.statistic}>
      <div className={s.statistic_fields}>
        <div className={s.statistic_fields_left}>
          <div className={s.statistic_fields_left_title}>
            <h3>Идеальное жилье для вашей жизни</h3>
          </div>
          <div className={s.statistic_fields_left_desc}>
            <p>Высокий сервис и индивидуальный подход к каждому клиенту</p>
            <p>Эксклюзивные предложения от застройщика</p>
            <p>Полное сопровождение на всех этапах сделки</p>
            <p>Тщательный отбор объектов, проверка всех документов</p>
          </div>
        </div>
        <div className={s.statistic_fields_right}>
          <div className={s.statistic_fields_right_top}>
            <div className={s.statistic_fields_right_top_segment}>
              <h3>Лет на рынке</h3>
              <p className={s.statistic_fields_right_top_segment_first}>5+</p>
            </div>
            <div className={s.statistic_fields_right_top_segment}>
              <h3>Довольных клиентов</h3>
              <p className={s.statistic_fields_right_top_segment_second}>99%</p>
            </div>
          </div>
          <div className={s.statistic_fields_right_bottom}>
            <div className={s.statistic_fields_right_bottom_segment}>
              <h3>Готовых проектов</h3>
              <p className={s.statistic_fields_right_bottom_segment_third}>
                237
              </p>
            </div>
            <div className={s.statistic_fields_right_bottom_segment}>
              <h3>Инвестиций в год</h3>
              <p className={s.statistic_fields_right_bottom_segment_fourth}>
                996m ฿
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
