import React from "react";
import s from "./Statistics.module.scss";
import { useTranslation } from "react-i18next";

const Statistics: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={s.statistic}>
      <div className={s.statistic_fields}>
        <div className={s.statistic_fields_left}>
          <div className={s.statistic_fields_left_title}>
            <h3>{t("main.statistic.title")}</h3>
          </div>
          <div className={s.statistic_fields_left_desc}>
            <p>{t("main.statistic.fieldsLeftDesc.field1")}</p>
            <p>{t("main.statistic.fieldsLeftDesc.field2")}</p>
            <p>{t("main.statistic.fieldsLeftDesc.field3")}</p>
            <p>{t("main.statistic.fieldsLeftDesc.field4")}</p>
          </div>
        </div>
        <div className={s.statistic_fields_right}>
          <div className={s.statistic_fields_right_top}>
            <div className={s.statistic_fields_right_top_segment}>
              <h3>{t("main.statistic.years")}</h3>
              <p className={s.statistic_fields_right_top_segment_first}>5+</p>
            </div>
            <div className={s.statistic_fields_right_top_segment}>
              <h3>{t("main.statistic.satisfiedClients")}</h3>
              <p className={s.statistic_fields_right_top_segment_second}>99%</p>
            </div>
          </div>
          <div className={s.statistic_fields_right_bottom}>
            <div className={s.statistic_fields_right_bottom_segment}>
              <h3>{t("main.statistic.readyMadeProjects")}</h3>
              <p className={s.statistic_fields_right_bottom_segment_third}>
                237
              </p>
            </div>
            <div className={s.statistic_fields_right_bottom_segment}>
              <h3>{t("main.statistic.investments")}</h3>
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
