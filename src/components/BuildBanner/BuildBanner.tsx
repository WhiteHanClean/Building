import React from "react";
import s from "./BuildBanner.module.scss";
import Image from "next/image";
import CustomTabs from "@/shared/ui/Tabs/Tabs";
import CustomSelect from "@/shared/ui/Select/Select";
import SearchBar from "../SearchBar/SearchBar";
import { useTranslation } from "react-i18next";

const BuildBanner = () => {
  const { t, i18n } = useTranslation();
  const tabData = [
    { key: "1", title: t("main.buildBanner.tabDataPurchase") },
    { key: "2", title: t("main.buildBanner.tabDataRent") },
  ];

  const contentData = {
    "1": [<SearchBar key="1-SearchBar" t={t} i18n={i18n} />],
    "2": [<SearchBar key="2-SearchBar" t={t} i18n={i18n} />],
  };

  return (
    <section className={s.build_content}>
      <div className={s.build_content_text}>
        <div className={s.build_content_title}></div>
        <h1>{t("main.buildBanner.title")}</h1>
      </div>

      <div className={s.build_description}>
        <p>{t("main.buildBanner.quote")}</p>
        <button className={s.build_arrow}>
          <Image
            src={"/arrowTop.png"}
            width={16}
            height={16}
            alt="logo"
          ></Image>
        </button>
      </div>

      <div className={s.build_application}>
        <h2>{t("main.buildBanner.buildApplication")}</h2>

        <CustomTabs
          tabData={tabData}
          contentData={contentData}
          t={t}
          i18n={i18n}
        />
      </div>
    </section>
  );
};

export default BuildBanner;
