import React from "react";
import s from "./Benefits.module.scss";
import { useTranslation } from "react-i18next";

const Benefits = () => {
  const { t } = useTranslation();
  return (
    <section className={s.section}>
      {/* first section */}
      <div className={s.section_item_1}>
        <div className={s.section_item_1_title}>
          <h3>{t("accommodation.benefits.title")}</h3>
        </div>
        <div className={s.section_item_1_description}>
          <p>{t("accommodation.benefits.description")}</p>
        </div>
      </div>

      {/* second section */}

      <div className={s.section_item_2}>
        {/* effectiv topic  */}

        <div className={s.section_item_2_topic}>
          <div className={s.section_item_2_topic_title}>
            <h3> {t("accommodation.benefits.effectively")}</h3>
          </div>
          <div className={s.section_item_2_topic_description}>
            <p>{t("accommodation.benefits.efficielyDescription")}</p>
          </div>
        </div>

        {/* benefits topic  */}

        <div className={s.section_item_2_topic}>
          <div className={s.section_item_2_topic_title}>
            <h3>{t("accommodation.benefits.profitably")}</h3>
          </div>
          <div className={s.section_item_2_topic_description}>
            <p>{t("accommodation.benefits.profitablyDescription")}</p>
          </div>
        </div>

        {/* care free topic  */}

        <div className={s.section_item_2_topic}>
          <div className={s.section_item_2_topic_title}>
            <h3>{t("accommodation.benefits.carefree")} </h3>
          </div>
          <div className={s.section_item_2_topic_description}>
            <p>{t("accommodation.benefits.carefreeDescription")}</p>
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
