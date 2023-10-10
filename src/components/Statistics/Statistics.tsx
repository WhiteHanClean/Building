import React from "react";
import s from "./Statistics.module.scss";

const Statistics = () => {
  return (
    <section className={s.section}>
      <div className={s.section_firstSection}>
        <div className={s.section_firstSection_title}>
          <p>Идеальное жилье для вашей жизни</p>
        </div>

        <div className={s.section_firstSection_topicsWrapper}>
          <div className={s.section_firstSection_topics}>
            <p>Высокий сервис и индивидуальный подход к каждому клиенту</p>
          </div>
          <div className={s.section_firstSection_topics}>
            <p>Эксклюзивные предложения от застройщика</p>
          </div>
          <div className={s.section_firstSection_topics}>
            <p>Полное сопровождение на всех этапах сделки</p>
          </div>
          <div className={s.section_firstSection_topics}>
            <p>Тщательный отбор объектов, проверка всех документов</p>
          </div>
        </div>
      </div>

      {/* second section ========================================================================= */}

      <div className={s.section_secondSection}>
        <div className={s.box}>
          <div className={s.box_firstSection}>
            <div className={s.box_firstSection_text}>
              <p>Лет на рынке</p>
            </div>
          </div>
          <div className={s.box_secondSection}>
            <div className={s.box_secondSection_text}>
              <p>5+</p>
            </div>
            <div className={s.box_secondSection_line}></div>
          </div>
        </div>

        <div className={s.box}>
          <div className={s.box_firstSection}>
            <div className={s.box_firstSection_text}>
              <p>Довольных клиентов</p>
            </div>
          </div>
          <div className={s.box_secondSection}>
            <div className={s.box_secondSection_text}>
              <p>99%</p>
            </div>
            <div className={s.box_secondSection_line}></div>
          </div>
        </div>

        <div className={s.box}>
          <div className={s.box_firstSection}>
            <div className={s.box_firstSection_text}>
              <p>Готовых проектов</p>
            </div>
          </div>
          <div className={s.box_secondSection}>
            <div className={s.box_secondSection_text}>
              <p>237</p>
            </div>
            <div className={s.box_secondSection_line}></div>
          </div>
        </div>

        <div className={s.box}>
          <div className={s.box_firstSection}>
            <div className={s.box_firstSection_text}>
              <p>Инвестиций в год</p>
            </div>
          </div>
          <div className={s.box_secondSection}>
            <div className={s.box_secondSection_text}>
              <p>996m ฿</p>
            </div>
            <div className={s.box_secondSection_line}></div>
          </div>
        </div>

        {/* =============== */}

        <div className={s.test}>
          <p className={s.test_title}>Лет на рынке</p>
          <div></div>
          <p className={s.test_desk}>5+</p>
        </div>

        <div className={s.test}>
          <p className={s.test_title}>Довольных клиентов</p>
          <div></div>
          <p className={s.test_desk}>99%</p>
        </div>

        <div className={s.test}>
          <p className={s.test_title}>Готовых проектов</p>
          <div></div>
          <p className={s.test_desk}>237</p>
        </div>

        <div className={s.test}>
          <p className={s.test_title}>Инвестиций в год</p>
          <div></div>
          <p className={s.test_desk}>237</p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
