import React from "react";
import s from "./Stages.module.scss";
import Image from "next/image";
import StageCard from "./StageCard/StageCard";
import { useTranslation } from "react-i18next";

const Stages = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={s.stages_header_content}>
        <div className={s.stages_header}>
          <h1>{t("main.stages.title")}</h1>
          <p>{t("main.stages.descriptionOfTheStages")}</p>
        </div>
      </div>
      <div className={s.stages_content}>
        <div className={s.stages_picture}>
          <div className={s.stage_picture_text}>
          <h1>{t("main.stages.title")}</h1>
          <p>{t("main.stages.descriptionOfTheStages")}</p>
          </div>
        </div>
        <div className={s.stages_cards}>
          <StageCard
            number={"1"}
            headerText={t("main.stages.step1")}
            description={t("main.stages.step1Description")}
          />

          <StageCard
            number={"2"}
            headerText={t("main.stages.step2")}
            description={t("main.stages.step2Description")}
          />
          <StageCard
            number={"3"}
            headerText={t("main.stages.step3")}
            description={t("main.stages.step3Description")}
          />
          <StageCard
            number={"4"}
            headerText={t("main.stages.step4")}
            description={t("main.stages.step4Description")}
          />
          <StageCard
            number={"5"}
            headerText={t("main.stages.step5")}
            description={t("main.stages.step5Description")}
          />
          <StageCard
            number={"6"}
            headerText={t("main.stages.step6")}
            description={t("main.stages.step6Description")}
          />
        </div>
      </div>
    </>
  );
};

export default Stages;
