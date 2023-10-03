import React from "react";
import s from "./Company.module.scss";
import { useTranslation } from "react-i18next";

const Company: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={s.company}>
      <div className={s.company_items}>
        <h3>{t("aboutUs.company.title")}</h3>
        <p>
          {t("aboutUs.company.descriptionPart1")}{" "}
          {t("aboutUs.company.descriptionPart2")}
        </p>
        <div className={s.company_items_imgs}>
          <div className={s.company_items_img}>
            <img src="/peopleLaptop.png" alt="peopleLaptop" />
            <p>{t("aboutUs.company.descriptionPart1")}</p>
          </div>
          <div className={s.company_items_img}>
            <img src="/familyMan.png" alt="familyMan" />
            <p>{t("aboutUs.company.descriptionPart2")}</p>
          </div>
        </div>
      </div>
      <div className={s.company_img}>
        <img src="/man.png" alt="man" />
      </div>
    </div>
  );
};

export default Company;
