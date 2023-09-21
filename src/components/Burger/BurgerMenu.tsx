import React, { useState } from "react";
import { Button, Drawer } from "antd";
import s from "./BurgeMenu.module.scss";
import Image from "next/image";

const BurgerDrawer: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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
        visible={open} // Используйте "visible" вместо "open"
      >
        <div className={s.drawer_content}>
          <div>
            <p className={s.nav_link}>Главная</p>
            <p className={s.nav_link}>Покупка</p>
            <p className={s.nav_link}>Аренда</p>
            <p className={s.nav_link}>Размещение</p>
            <p className={s.nav_link}>О нас</p>
          </div>

          <div className={s.social_media}>
            <p className={s.nav_link}>Главная</p>
            <p className={s.nav_link}>Покупка</p>
            <p className={s.nav_link}>Аренда</p>
            <p className={s.nav_link}>Размещение</p>
            <p className={s.nav_link}>О нас</p>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default BurgerDrawer;
