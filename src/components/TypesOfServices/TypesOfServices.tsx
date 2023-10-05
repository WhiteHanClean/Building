import React from "react";
import s from "./TypesOfServices.module.scss";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const TypesOfServices = () => {
  const { t } = useTranslation();
  return (
    <div className={s.typesOfServices}>
      <div className={s.typesOfServices_content}>
        <div className={s.typesOfServices_content_block_common}>
          <h4>{t("main.typesOfServices.services")}</h4>

          <p>{t("main.typesOfServices.proposal")}</p>
        </div>
        <div className={s.typesOfServices_content_block}>
          <h6> {t("main.typesOfServices.purchase")}</h6>

          <p>{t("main.typesOfServices.purchaseProposal")} </p>

          <div className={s.service_icon_block}>
            <Image
              src={"/tabler_arrow-up.png"}
              width={16}
              height={16}
              alt="logo"
            ></Image>
          </div>
        </div>

        <div className={s.typesOfServices_content_block}>
          <h6>{t("main.typesOfServices.postRealEstate")} </h6>

          <p>{t("main.typesOfServices.postRealEstateProposal")}</p>

          <div className={s.service_icon_block}>
            <Image
              src={"/tabler_arrow-up.png"}
              width={16}
              height={16}
              alt="logo"
            ></Image>
          </div>
        </div>

        <div className={s.typesOfServices_content_block}>
          <h6>{t("main.typesOfServices.rent")}</h6>

          <p>{t("main.typesOfServices.rentProposal")}</p>

          <div className={s.service_icon_block}>
            <Image
              src={"/tabler_arrow-up.png"}
              width={16}
              height={16}
              alt="logo"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypesOfServices;
