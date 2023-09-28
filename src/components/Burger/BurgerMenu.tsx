import React, { useState } from "react";
import { Drawer } from "antd";
import s from "./BurgeMenu.module.scss";
import Image from "next/image";
import Link from "next/link";
import { CloseOutlined } from "@ant-design/icons";

const BurgerDrawer: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const customCloseButton = (
    <div className={s.custom_close_button} onClick={onClose}>
      <CloseOutlined />
    </div>
  );

  return (
    <>
      <div className={s.btn_nav}>
        <div className={`${s.burger_btn} ${s.active}`}>
          <Image src={"/Phone.png"} width={16} height={16} alt="logo"></Image>
        </div>

        <div className={s.burger_btn} onClick={showDrawer}>
          <Image src={"/Burger.png"} width={16} height={11} alt="logo"></Image>
        </div>
      </div>
      <Drawer
        placement="right"
        onClose={onClose}
        className={s.drawer}
        open={open}
        closeIcon={customCloseButton}
      >
        <div className={s.drawer_content}>
          <div>
            <p className={s.nav_link}>
              <Link href={"/"} onClick={onClose}>Главная</Link>
            </p>
            <p className={s.nav_link}>
              <Link href={"/Purchase/Purchase"} onClick={onClose}>Покупка</Link>
            </p>
            <p className={s.nav_link}>
              <Link href={"/Rent/Rent"} onClick={onClose}>Аренда</Link>
            </p>
            <p className={s.nav_link}>
              <Link href={"/Accommodation/Accommodation"} onClick={onClose} >Размещение</Link>
            </p>
            <p className={s.nav_link}>
              <Link href={"/AboutUs/AboutUs"} onClick={onClose}>О нас</Link>
            </p>
          </div>

          <div className={s.social_media}>
            <a href="+79990000000" className={s.nav_link}>
              <Image
                className={s.burger_img}
                src={"/telephone.png"}
                width={15}
                height={15}
                alt="logo"
              ></Image>
              +79990000000
            </a>
            <a href="" className={s.nav_link}>
              <Image
                className={s.burger_img}
                src={"/whatsapp.png"}
                width={15}
                height={15}
                alt="logo"
              ></Image>
              Telegram
            </a>
            <a href="" className={s.nav_link}>
              <Image
                className={s.burger_img}
                src={"/whatsapp.png"}
                width={15}
                height={15}
                alt="logo"
              ></Image>
              WhatsApp
            </a>
            <a href="" className={s.nav_link}>
              <Image
                className={s.burger_img}
                src={"/insta.png"}
                width={15}
                height={15}
                alt="logo"
              ></Image>
              Instagram
            </a>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default BurgerDrawer;
