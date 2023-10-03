import React from "react";
import s from "./FullService.module.scss";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const FullService = () => {
  const { t } = useTranslation();
  return (
    <div className={s.full_service}>
      <div className={s.full_service_photo}>
        <h4>{t("aboutUs.fullService.title")}</h4>
        <div className={s.full_text_paragrapf}></div>
        <p>{t("aboutUs.fullService.subtitle")}</p>
      </div>

      <div className={s.service}>
        <div className={s.service_content_blocks}>
          <div className={s.service_content_block}>
            <h6>{t("aboutUs.fullService.professionalism")}</h6>

            <div className={s.service_icon}>
              <Image
                src={"/like.png"}
                width={16}
                height={16}
                alt="like icon"
              ></Image>
            </div>
          </div>

          <p>{t("aboutUs.fullService.professionalismSubtitle")}</p>
        </div>

        <div className={s.service_content_blocks}>
          <div className={s.service_content_block}>
            <h6> {t("aboutUs.fullService.quality")} </h6>

            <div className={s.service_icon}>
              <Image
                src={"/medal_lcon.png"}
                width={16}
                height={16}
                alt="medal icon"
              ></Image>
            </div>
          </div>

          <p>{t("aboutUs.fullService.qualitySubtitle")}</p>
        </div>

        <div className={s.service_content_blocks}>
          <div className={s.service_content_block}>
            <h6> {t("aboutUs.fullService.safety")}</h6>

            <div className={s.service_icon}>
              <Image
                src={"/checkMark_icon.png"}
                width={16}
                height={16}
                alt="check-mark icon"
              ></Image>
            </div>
          </div>

          <p>{t("aboutUs.fullService.safetySubtitle")}</p>
        </div>

        <div className={s.service_content_blocks}>
          <div className={s.service_content_block}>
            <h6>{t("aboutUs.fullService.construction")}</h6>

            <div className={s.service_icon}>
              <Image
                src={"/house_icon.png"}
                width={16}
                height={16}
                alt="house icon"
              ></Image>
            </div>
          </div>

          <p>{t("aboutUs.fullService.constructionSubtitle")}</p>
        </div>
      </div>
    </div>
  );
};

export default FullService;
