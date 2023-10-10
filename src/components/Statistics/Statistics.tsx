import React from "react";
import s from "./Statistics.module.scss";
import { useTranslation } from "react-i18next";

const Statistics = () => {
  const { t } = useTranslation();
  return (
    <section className={s.section}>
      <div className={s.section_firstSection}>
        <div className={s.section_firstSection_title}>
          <p>{t("main.statistic.title")}</p>
        </div>

        <div className={s.section_firstSection_topicsWrapper}>
          <div className={s.section_firstSection_topics}>
            <p>{t("main.statistic.fieldsLeftDesc.field1")}</p>
          </div>
          <div className={s.section_firstSection_topics}>
            <p>{t("main.statistic.fieldsLeftDesc.field2")}</p>
          </div>
          <div className={s.section_firstSection_topics}>
            <p>{t("main.statistic.fieldsLeftDesc.field3")}</p>
          </div>
          <div className={s.section_firstSection_topics}>
            <p>{t("main.statistic.fieldsLeftDesc.field4")}</p>
          </div>
        </div>
      </div>

      {/* second section ========================================================================= */}

      <div className={s.section_secondSection}>
        <div className={s.box}>
          <div className={s.box_firstSection}>
            <div className={s.box_firstSection_text}>
              <p>{t("main.statistic.years")}</p>
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
              <p>{t("main.statistic.satisfiedClients")}</p>
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
              <p>{t("main.statistic.readyMadeProjects")}</p>
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
              <p>{t("main.statistic.investments")}</p>
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
          <p className={s.test_title}>{t("main.statistic.years")}</p>
          <div></div>
          <p className={s.test_desk}>5+</p>
        </div>

        <div className={s.test}>
          <p className={s.test_title}>{t("main.statistic.satisfiedClients")}</p>
          <div></div>
          <p className={s.test_desk}>99%</p>
        </div>

        <div className={s.test}>
          <p className={s.test_title}>
            {t("main.statistic.readyMadeProjects")}
          </p>
          <div></div>
          <p className={s.test_desk}>237</p>
        </div>

        <div className={s.test}>
          <p className={s.test_title}>{t("main.statistic.investments")}</p>
          <div></div>
          <p className={s.test_desk}>237</p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
