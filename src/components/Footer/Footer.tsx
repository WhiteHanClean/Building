import React from "react";
import s from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer_content}>
        <div className={s.footer_content_logo}>
          <Image
            src={"/footerLogo.png"}
            width={160}
            height={38}
            alt="footerLogo"
          ></Image>
        </div>
        <div className={s.nav_blocks}>
          <nav className={s.nav}>
            <ul className={s.navigation_links}>
              <li className={`${s.nav_link}`}>
                <Link href={"/"}>Главная</Link>
              </li>
              <li className={s.nav_link}>
                <Link href={"/Purchase/Purchase"}>Покупка</Link>
              </li>

              <li className={s.nav_link}>
                <Link href={"/Rent/Rent"}>Аренда</Link>
              </li>
              <li className={s.nav_link}>
                <Link href={"/Accommodation/Accommodation"}>Размещение</Link>
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
              <Image
                src={"/instagram.png"}
                width={20}
                height={20}
                alt="instagram"
              ></Image>
            </div>
            <div className={s.footer_icons}>
              <Image
                src={"/telegram.png"}
                width={20}
                height={20}
                alt="telegram"
              ></Image>
            </div>
            <div className={s.footer_icons}>
              <Image
                src={"/watsapp.png"}
                width={20}
                height={20}
                alt="watsapp"
              ></Image>
            </div>
          </div>
        </div>
      </div>

      <div className={s.footer_content_modile}>
        <div className={s.footer_intro_modile}>
          <div className={s.footer_content_logo_modile}>
            <Image
              src={"/footerLogo.png"}
              width={160}
              height={38}
              alt="footerLogo"
            ></Image>
          </div>
          <div className={s.footer_item_modile}>
            <div className={s.footer_icons_modile}>
              <Image
                src={"/instagram.png"}
                width={20}
                height={20}
                alt="instagram"
              ></Image>
            </div>
            <div className={s.footer_icons_modile}>
              <Image
                src={"/telegram.png"}
                width={20}
                height={20}
                alt="telegram"
              ></Image>
            </div>
            <div className={s.footer_icons_modile}>
              <Image
                src={"/watsapp.png"}
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
