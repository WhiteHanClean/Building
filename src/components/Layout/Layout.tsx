import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import s from "./Layout.module.scss";
import MainPage from "@/pages/MainPage/MainPage";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className={s.content}>{children}</div>

      <Footer />
    </>
  );
};

export default Layout;
