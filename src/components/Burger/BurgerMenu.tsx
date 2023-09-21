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
      {/* <Button type="primary" onClick={showDrawer}>
        Open
      </Button> */}
      <div className={s.btn_nav}>
        <div className={`${s.burger_btn} ${s.active}`}>
          <Image src={"/Phone.png"} width={16} height={16} alt="logo"></Image>
        </div>

        <div className={s.burger_btn} onClick={showDrawer}>
          <Image src={"/Burger.png"} width={16} height={11} alt="logo"></Image>
        </div>
      </div>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        visible={open} // Используйте "visible" вместо "open"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default BurgerDrawer;
