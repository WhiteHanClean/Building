import React from "react";
import s from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={s.footer}>
      <div className={s.footer_content}>
        <div className={s.footer_content_logo}>
          <Image
            src={"/footerLogo.svg"}
            width={160}
            height={38}
            alt="footerLogo"
          ></Image>
        </div>
        <div className={s.nav_blocks}>
          <nav className={s.nav}>
            <ul className={s.navigation_links}>
              <li className={`${s.nav_link}`}>
                <Link href={"/"}> {t("main.header.mainPage")}</Link>
              </li>
              <li className={s.nav_link}>
                <Link href={"/Purchase/Purchase"}>
                  {t("main.header.purchase")}
                </Link>
              </li>

              <li className={s.nav_link}>
                <Link href={"/Rent/Rent"}> {t("main.header.rent")}</Link>
              </li>
              <li className={s.nav_link}>
                <Link href={"/Accommodation/Accommodation"}>
                  {" "}
                  {t("main.header.accommodation")}
                </Link>
              </li>

              <li className={s.nav_link}>
                <a href="#">user@gmail.com</a>
              </li>
              <li className={s.nav_link}>
                <a href="#">+7 (999) 000-00-00</a>
              </li>
            </ul>
          </nav>
          <div className={s.footer_item}>
            <div className={s.footer_icons}>
              <a href="https://instagram.com/property.library.phuket">
                <Image
                  src={"/Instagram.svg"}
                  width={20}
                  height={20}
                  alt="instagram"
                ></Image>
              </a>
            </div>
            <div className={s.footer_icons}>
              {/* https://t.me/Tadamoto */}

              <a href="https://t.me/Tadamoto">
                <Image
                  src={"/Telegram.svg"}
                  width={20}
                  height={20}
                  alt="telegram"
                ></Image>
              </a>
            </div>
            <div className={s.footer_icons}>
              <a href="https://wa.me/message/ERHNUPGUWEWCK1">
                <Image
                  src={"/WhatsApp.svg"}
                  width={20}
                  height={20}
                  alt="watsapp"
                ></Image>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={s.footer_content_modile}>
        <div className={s.footer_intro_modile}>
          <div className={s.footer_content_logo_modile}>
            <Image
              src={"/footerLogo.svg"}
              width={160}
              height={38}
              alt="footerLogo"
            ></Image>
          </div>
          <div className={s.footer_item_modile}>
            <div className={s.footer_icons_modile}>
              <Image
                src={"/instagram.svg"}
                width={20}
                height={20}
                alt="instagram"
              ></Image>
            </div>
            <div className={s.footer_icons_modile}>
              <Image
                src={"/telegram.svg"}
                width={20}
                height={20}
                alt="telegram"
              ></Image>
            </div>
            <div className={s.footer_icons_modile}>
              <Image
                src={"/WhatsApp.svg"}
                width={20}
                height={20}
                alt="watsapp"
              ></Image>
            </div>
          </div>
        </div>
        <div className={s.nav_blocks_modile}>
          <nav className={s.nav_modile}>
            <ul className={s.navigation_links_modile}>
              <li className={`${s.nav_link_modile}`}>
                <Link href={"/"}>Главная</Link>
              </li>
              <li className={s.nav_link_modile}>
                <Link href={"/Purchase/Purchase"}>Покупка</Link>
              </li>

              <li className={s.nav_link_modile}>
                <Link href={"/Rent/Rent"}>Аренда</Link>
              </li>
              <li className={s.nav_link_modile}>
                <Link href={"/Accommodation/Accommodation"}>Размещение</Link>
              </li>

              <li className={s.nav_link_modile}>
                <a href="#">user@gmail.com</a>
              </li>
              <li className={s.nav_link_modile}>
                <a href="#">+7 (999) 000-00-00</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={s.nav_blocks_modile_micro}>
          <nav className={s.nav_modile}>
            <ul className={s.navigation_links_modile}>
              <div>
                <li className={`${s.nav_link_modile}`}>
                  <Link href={"/"}>Главная</Link>
                </li>
                <li className={s.nav_link_modile}>
                  <Link href={"/Purchase/Purchase"}>Покупка</Link>
                </li>
              </div>

              <div>
                <li className={s.nav_link_modile}>
                  <Link href={"/Rent/Rent"}>Аренда</Link>
                </li>
                <li className={s.nav_link_modile}>
                  <Link href={"/Accommodation/Accommodation"}>Размещение</Link>
                </li>
              </div>

              <div>
                <li className={s.nav_link_modile}>
                  <a href="#">user@gmail.com</a>
                </li>
                <li className={s.nav_link_modile}>
                  <a href="#">+7 (999) 000-00-00</a>
                </li>
              </div>
            </ul>
          </nav>
        </div>
      </div>

      <div className={s.footer_copyright}>
        <p>Ⓒ 2023 Property Library Phuket</p>
      </div>
    </footer>
  );
};

export default Footer;
