import React from "react";
import s from "./Benefits.module.scss";

const Benefits = () => {
  return (
    <section className={s.section}>
      {/* first section */}
      <div className={s.section_item_1}>
        <div className={s.section_item_1_title}>
          <h3>Выгодное сотрудничество</h3>
        </div>
        <div className={s.section_item_1_description}>
          <p>
            Наши специалисты помогут с продажей вашей недвижимости или
            земельного участка, а также предоставят возможность вам сдавать в
            аренду свою недвижимость с доходностью 6-10% годовых.
          </p>
        </div>
      </div>

      {/* second section */}

      <div className={s.section_item_2}>
        {/* effectiv topic  */}

        <div className={s.section_item_2_topic}>
          <div className={s.section_item_2_topic_title}>
            <h3>Эффективно</h3>
          </div>
          <div className={s.section_item_2_topic_description}>
            <p>
              Мы обеспечиваем стабильный доход 6-10% годовых, профессионально и
              ответственно управляя вашей недвижимостью.
            </p>
          </div>
        </div>

        {/* benefits topic  */}

        <div className={s.section_item_2_topic}>
          <div className={s.section_item_2_topic_title}>
            <h3>Выгодно</h3>
          </div>
          <div className={s.section_item_2_topic_description}>
            <p>
              Наши эксклюзивные предложения позволяют максимизировать ваши
              инвестиции и обеспечивают высокую доходность.
            </p>
          </div>
        </div>

        {/* care free topic  */}

        <div className={s.section_item_2_topic}>
          <div className={s.section_item_2_topic_title}>
            <h3>Беззаботно</h3>
          </div>
          <div className={s.section_item_2_topic_description}>
            <p>
              Доверьте нам все аспекты управления и сдачи в аренду, позволив
              себе наслаждаться выгодами инвестиций без хлопот.
            </p>
          </div>
        </div>

        {/* light and reliable topic  */}

        <div className={s.section_item_2_topic}>
          <div className={s.section_item_2_topic_title}>
            <h3>Легко и надежно</h3>
          </div>
          <div className={s.section_item_2_topic_description}>
            <p>
              Зарабатывайте на своей недвижимости с минимальными усилиями и
              максимальной уверенностью в успехе.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
