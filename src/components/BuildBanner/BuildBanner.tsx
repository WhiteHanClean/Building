import React from "react";
import s from "./BuildBanner.module.scss";
import Image from "next/image";
import CustomTabs from "@/shared/ui/Tabs/Tabs";
import CustomSelect from "@/shared/ui/Select/Select";
import SearchBar from "../SearchBar/SearchBar";

const BuildBanner = () => {
  const tabData = [
    { key:  "1", title: "Купить" },
    { key: "2", title: "Арендовать" },
  ];

  const contentData = {
    "1": [<SearchBar key="1-SearchBar" />],
    "2": [<SearchBar key="2-SearchBar" />],
  };

  return (
    <section className={s.build_content}>
      <div className={s.build_content_text}>
        <div className={s.build_content_title}>
          <h1>Откройте дверь в мир райской недвижимости вместе с нами!</h1>
        </div>
        <h1>Откройте дверь в мир райской недвижимости вместе с нами!</h1>
      </div>

      <div className={s.build_description}>
        <p>
          {" "}
          Property Library Phuket — ваш ключ к успешным инвестициям и комфортной
          жизни на острове Пхукет.
        </p>
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
        <h2>Фильтр для поиска вашего идеального жилья</h2>

        <CustomTabs tabData={tabData} contentData={contentData} />
      </div>
    </section>
  );
};

export default BuildBanner;
