import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import s from "./Layout.module.scss";
import AsideButton from "../shared/ui/AsideButton/AsideButton";
import MainPage from "@/pages/MainPage/MainPage";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <AsideButton/>
       <div className={s.content}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
