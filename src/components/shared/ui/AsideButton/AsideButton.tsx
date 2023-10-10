import React, { useState } from "react";
import s from "./AsideButton.module.scss";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const AsideButton: React.FC = () => {
  const [isWindowVisible, setIsWindowVisible] = useState(false);

  const togglePopover = () => {
    setIsWindowVisible((prevState) => !prevState);
  };

  const { t } = useTranslation();

  return (
    <div className={s.aside_button}>
      <div className={s.aside_button_items}>
        <button className={s.aside_button_items_btn} onClick={togglePopover}>
          <img src="/Cloud.svg" alt="Cloud" />
        </button>
        {isWindowVisible && (
          <div className={s.aside_button_window}>
            <div className={s.aside_button_window_desc}>
              <p>{t("main.asideButton.convenience")}</p>
              <button onClick={togglePopover}>
                <img src="/Cross.svg" alt="Cross" />
              </button>
            </div>
            <div className={s.aside_button_window_contacts}>
              <img src="/Telegram.svg" alt="Telegram" />
              <p>
                <a href="https://t.me/Tadamoto">Telegram</a>
              </p>
            </div>
            <div className={s.aside_button_window_contacts}>
              <img src="/WhatsApp.svg" alt="WhatsApp" />
              <p>
                <a href="https://wa.me/message/ERHNUPGUWEWCK1">WhatsApp</a>
              </p>
            </div>
            <div className={s.aside_button_window_contacts}>
              <img src="/Instagram.svg" alt="Instagram" />
              <p>
                <a href="https://instagram.com/property.library.phuket">
                  Instagram
                </a>
              </p>
            </div>
            <div className={s.aside_button_window_contacts}>
              <img src="/PhoneModal.svg" alt="Phone" />
              <p>
                <a href="tel:+66 0954143874">+66 0954143874</a>
              </p>
            </div>
            <div className={s.aside_button_window_order}>
              <Link href="/Accommodation/Accommodation">
                <button>Заказать звонок</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AsideButton;
