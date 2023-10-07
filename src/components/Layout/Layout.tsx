import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import s from "./Layout.module.scss";
import AsideButton from "../shared/ui/AsideButton/AsideButton";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className={s.content}>{children}</div>
      <AsideButton />
      <Footer />
    </>
  );
};

export default Layout;
