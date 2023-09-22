import React from 'react';
import s from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
    const router = useRouter();

    return (
        <div className={s.footer}>
            <div className={s.footer_content}>
                <div className={s.footer_content_logo}>
                    <Image src={"/footerLogo.png"} width={160} height={38} alt="footerLogo"></Image>
                </div>
                <nav className={s.nav}>
                    <ul className={s.navigation_links}>
                        <div className={s.navigation_links_segment}>
                            <li className={`${s.nav_link}`}>
                                <Link href={"/"} className={`${router.pathname === "/" ? s.active : ""}`}>
                                    Главная
                                </Link>
                            </li>
                            <li className={s.nav_link}>
                                <Link href={"/Purchase/Purchase"} className={`${router.pathname === "/Purchase/Purchase" ? s.active : ""}`}>
                                    Покупка
                                </Link>
                            </li>
                        </div>
                        <div className={s.navigation_links_segment}>
                            <li className={s.nav_link}>
                                <Link href={"/Rent/Rent"} className={`${router.pathname === "/Rent/Rent" ? s.active : ""}`}>
                                    Аренда
                                </Link>
                            </li>
                            <li className={s.nav_link}>
                                <Link href={"/Accommodation/Accommodation"} className={`${router.pathname === "/Accommodation/Accommodation" ? s.active : ""}`}>
                                    Размещение
                                </Link>
                            </li>
                        </div>
                        <li className={s.nav_link_about}>
                            <Link href={"/AboutUs/AboutUs"} className={`${router.pathname === "/AboutUs/AboutUs" ? s.active : ""}`} >
                                О нас
                            </Link>
                        </li>
                        <div className={s.navigation_links_segment}>
                            <li className={s.nav_link}>
                                <a href="#">user@gmail.com</a>
                            </li>
                            <li className={s.nav_link}>
                                <a href="#">+7 (999) 000-00-00</a>
                            </li>
                        </div>
                    </ul>
                </nav>
                <div className={s.footer_content_logo_adaptive}>
                    <Image src={"/footerLogo.png"} width={160} height={38} alt="footerLogo"></Image>
                </div>
                <div className={s.footer_item}>
                    <button>
                        <Image src={"/instagram.png"} width={20} height={20} alt="instagram"></Image>
                    </button>
                    <button>
                        <Image src={"/telegram.png"} width={20} height={20} alt="telegram"></Image>
                    </button>
                    <button>
                        <Image src={"/watsapp.png"} width={20} height={20} alt="watsapp"></Image>
                    </button>
                </div>
            </div>
            <div className={s.footer_copyright}>
                <p>Ⓒ 2023 Property Library Phuket</p>
            </div>
        </div>
    );
};

export default Footer;