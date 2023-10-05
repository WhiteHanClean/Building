import React from "react";
import s from "@/components/Conditions/Conditions.module.scss";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Conditions: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={s.conditions}>
      <div className={s.conditions_content}>
        <div className={s.conditions_content_block}>
          <h6>{t("accommodation.conditions.apartmentEvaluation")}</h6>
          <p>{t("accommodation.conditions.apartmentEvaluationDescription")}</p>

          <div className={s.conditions_icon_block}>
            <Image
              src={"/conditionTick.png"}
              width={20}
              height={20}
              alt="logo"
            ></Image>
          </div>
        </div>
        <div className={s.conditions_content_block}>
          <h6>{t("accommodation.conditions.searchForTenants")}</h6>

          <p>{t("accommodation.conditions.searchForTenantsDescription")}</p>

          <div className={s.conditions_icon_block}>
            <Image
              src={"/condititonGroup.png"}
              width={20}
              height={20}
              alt="logo"
            ></Image>
          </div>
        </div>
        <div className={s.conditions_content_block}>
          <h6>{t("accommodation.conditions.apartmentDisplay")}</h6>

          <p>{t("accommodation.conditions.apartmentDisplayDescription")}</p>

          <div className={s.conditions_icon_block}>
            <Image
              src={"/conditionHome.png"}
              width={20}
              height={20}
              alt="logo"
            ></Image>
          </div>
        </div>
        <div className={s.conditions_content_block}>
          <h6>{t("accommodation.conditions.contract")}</h6>

          <p>{t("accommodation.conditions.contractDescription")}</p>

          <div className={s.conditions_icon_block}>
            <Image
              src={"/condititonGroup.png"}
              width={20}
              height={20}
              alt="logo"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conditions;
