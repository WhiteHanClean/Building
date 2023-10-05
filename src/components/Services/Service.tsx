import React from "react";
import s from "./Service.module.scss";
import Image from "next/image";
import { useTranslation } from "react-i18next";
const Service = () => {
  const { t } = useTranslation();

  return (
    <div className={s.service}>
      <h2>{t("main.services.title")}</h2>
      <div className={s.service_content}>
        <div className={s.sevice_content_block}>
          <h6>{t("main.services.legalSupport")}</h6>
          <p>{t("main.services.legalSupportDescription")}</p>

          <div className={s.service_icon_block}>
            <Image
              src={"/service1.png"}
              width={20}
              height={20}
              alt="logo"
            ></Image>
          </div>
        </div>
        <div className={s.sevice_content_block}>
          <h6>{t("main.services.turnkeyConstruction")}</h6>

          <p>{t("main.services.turnkeyConstructionDescription")}</p>

          <div className={s.service_icon_block}>
            <Image
              src={"/service4.png"}
              width={20}
              height={20}
              alt="logo"
            ></Image>
          </div>
        </div>

        <div className={s.sevice_content_block}>
          <h6>{t("main.services.moneyTransfers")}</h6>

          <p>{t("main.services.moneyTransfersDescription")}</p>

          <div className={s.service_icon_block}>
            <Image
              src={"/service2.png"}
              width={20}
              height={20}
              alt="logo"
            ></Image>
          </div>
        </div>

        <div className={s.sevice_content_block}>
          <h6>{t("main.services.interiorDesign")}</h6>

          <p>{t("main.services.interiorDesignDescription")}</p>

          <div className={s.service_icon_block}>
            <Image
              src={"/service5.png"}
              width={20}
              height={20}
              alt="logo"
            ></Image>
          </div>
        </div>

        <div className={s.sevice_content_block}>
          <h6>{t("main.services.visaProcessing")}</h6>

          <p>{t("main.services.ivisaProcessingDescription")}</p>

          <div className={s.service_icon_block}>
            <Image
              src={"/service3.png"}
              width={20}
              height={20}
              alt="logo"
            ></Image>
          </div>
        </div>

        <div className={s.sevice_content_block}>
          <h6>{t("main.services.qualityControl")}</h6>

          <p>{t("main.services.qualityControlDescription")}</p>

          <div className={s.service_icon_block}>
            <Image
              src={"/service6.png"}
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

export default Service;
