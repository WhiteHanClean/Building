import React from "react";
import s from "./Company.module.scss";
import { useTranslation } from "react-i18next";

const Company: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={s.section}>
      <div className={s.abourUs}>
        <div>
          <h3>{t("aboutUs.company.title")}</h3>
          <p>{t("aboutUs.company.descriptionPart1")}</p>
        </div>
        <div className={s.abourUs_img}>
          <div></div>
        </div>
      </div>

      {/* first section ============================ */}

      <div className={s.firstSection}>
        <div></div>
      </div>

      {/* second section ============================ */}

      <div className={s.secondSection}>
        {/*  */}

        <div className={s.secondSection_title}>
          <div>
            <h3>{t("aboutUs.company.title")}</h3>
            <p>{t("aboutUs.company.descriptionPart1")}</p>
          </div>
          <div className={s.secondSection_img}>
            <div></div>
          </div>
        </div>

        <div className={s.secondSection_history}>
          <h3></h3>
          <p></p>
          <p></p>
        </div>

        <div className={s.secondSection_target}>
          <h3></h3>
          <p></p>
          <p></p>
        </div>

        <div className={s.secondSection_familyImg}></div>

        {/*  */}
      </div>

      {/*  */}
    </section>
  );
};

export default Company;
