import React from "react";
import s from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";

const BurgerDrawer = dynamic(() => import("../Burger/BurgerMenu"), {
  ssr: false,
});

const Header = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const orderACall = () => {
    router.push("/Accommodation/Accommodation");
  };
  return (
    <header className={s.header}>
      <div className={s.header_content}>
        <div
          style={{
            cursor: "pointer",
          }}
        >
          <Link href={"/"}>
            <Image className={s.logo} src={"/Logo.png"} width={168} height={38} alt="logo"></Image>
          </Link>
        </div>

        <nav className={s.nav}>
          <ul className={s.navigation_links}>
            <li className={`${s.nav_link}`}>
              <Link
                href={"/"}
                className={`${router.pathname === "/" ? s.active : ""}`}
              >
                {t("main.header.mainPage")}
              </Link>
            </li>
            <li className={s.nav_link}>
              <Link
                href={"/Purchase/Purchase"}
                className={`${
                  router.pathname === "/Purchase/Purchase" ? s.active : ""
                }`}
              >
                {t("main.header.purchase")}
              </Link>
            </li>
            <li className={s.nav_link}>
              <Link
                href={"/Rent/Rent"}
                className={`${
                  router.pathname === "/Rent/Rent" ? s.active : ""
                }`}
              >
                {t("main.header.rent")}
              </Link>
            </li>
            <li className={s.nav_link}>
              <Link
                href={"/Accommodation/Accommodation"}
                className={`${
                  router.pathname === "/Accommodation/Accommodation"
                    ? s.active
                    : ""
                }`}
              >
                {t("main.header.accommodation")}
              </Link>
            </li>
            <li className={s.nav_link}>
              <Link
                href={"/AboutUs/AboutUs"}
                className={`${
                  router.pathname === "/AboutUs/AboutUs" ? s.active : ""
                }`}
              >
                {t("main.header.aboutUs")}
              </Link>
            </li>
          </ul>
        </nav>
        <div className={s.header_item}>
          <div className={s.header_location}>
            <Image src={"/Group.svg"} width={13} height={16} alt="logo"></Image>
            <span> {t("main.header.phuket")}</span>
          </div>

          <ul className={s.language}>
            <li
              style={{
                fontWeight: i18n.resolvedLanguage === "ru" ? "bold" : "normal",
              }}
              onClick={() => i18n.changeLanguage("ru")}
            >
              RU
            </li>
            <li
              style={{
                fontWeight: i18n.resolvedLanguage === "en" ? "bold" : "normal",
              }}
              onClick={() => i18n.changeLanguage("en")}
            >
              EN
            </li>
          </ul>

          <button className={s.aprove} onClick={orderACall}>
            {" "}
            {t("main.header.orderACall")}
          </button>

          <div className={s.burger}>
            <BurgerDrawer />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
