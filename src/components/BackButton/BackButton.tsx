import React from "react";
import s from "./BackButton.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const BackButton = () => {
  const { back } = useRouter();

  function handleClick() {
    back();
  }

  const { t } = useTranslation();

  return (
    <div className={s.backButton} onClick={handleClick}>
      <button>
        <Image
          src={"/BackButton.svg"}
          width={16}
          height={16}
          alt="arrow icon"
        />
      </button>
      <h3>{t("main.backButton.back")}</h3>
    </div>
  );
};

export default BackButton;

<BackButton />;
