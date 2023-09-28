import React from "react";
import s from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import dynamic from 'next/dynamic';

const BurgerDrawer = dynamic(() => import("../Burger/BurgerMenu"), {
  ssr: false, 
});


const Header = () => {
  const router = useRouter();

  return (
    <header className={s.header}>
      <div className={s.header_content}>
        <div>
          <Image src={"/Logo.png"} width={168} height={38} alt="logo"></Image>
          
        </div>

        <nav className={s.nav}>
          <ul className={s.navigation_links}>
            <li className={`${s.nav_link}`}>
              <Link
                href={"/"}
                className={`${router.pathname === "/" ? s.active : ""}`}
              >
                Главная
              </Link>
            </li>
            <li className={s.nav_link}>
              <Link
                href={"/Purchase/Purchase"}
                className={`${
                  router.pathname === "/Purchase/Purchase" ? s.active : ""
                }`}
              >
                Покупка
              </Link>
            </li>
            <li className={s.nav_link}>
              <Link
                href={"/Rent/Rent"}
                className={`${
                  router.pathname === "/Rent/Rent" ? s.active : ""
                }`}
              >
                Аренда
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
                Размещение
              </Link>
            </li>
            <li className={s.nav_link}>
              <Link
                href={"/AboutUs/AboutUs"}
                className={`${
                  router.pathname === "/AboutUs/AboutUs" ? s.active : ""
                }`}
              >
                О нас
              </Link>
            </li>
          </ul>
        </nav>
        <div className={s.header_item}>
          <div className={s.header_location}>
            <Image src={"/Group.svg"} width={13} height={16} alt="logo"></Image>
            <span>Пхукет</span>
          </div>

          <ul className={s.language}>
            <li>RU</li>
            <li>EN</li>
          </ul>

          <button className={s.aprove}> Заказать звонок</button>

          <div className={s.burger}>
            <BurgerDrawer />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
