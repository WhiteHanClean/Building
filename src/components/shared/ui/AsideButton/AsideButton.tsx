import React, { useState } from 'react';
import s from "./AsideButton.module.scss"

const AsideButton: React.FC = () => {
    const [isWindowVisible, setIsWindowVisible] = useState(false);

    const togglePopover = () => {
        setIsWindowVisible(prevState => !prevState);
    }

    return (
        <div className={s.aside_button}>
            <div className={s.aside_button_items}>
                <button className={s.aside_button_items_btn} onClick={togglePopover}>
                    <img src="/Cloud.svg" alt="Cloud" />
                </button>
                {isWindowVisible && (
                    <div className={s.aside_button_window}>
                        <div className={s.aside_button_window_desc}>
                            <p>Как вам удобнее с нами связаться?</p>
                            <button onClick={togglePopover}>
                                <img src="/Cross.svg" alt="Cross" />
                            </button>
                        </div>
                        <div className={s.aside_button_window_contacts}>
                            <img src="/Telegram.svg" alt="Telegram" />
                            <p>Telegram</p>
                        </div>
                        <div className={s.aside_button_window_contacts}>
                            <img src="/WhatsApp.svg" alt="WhatsApp" />
                            <p>WhatsApp</p>
                        </div>
                        <div className={s.aside_button_window_contacts}>
                            <img src="/Instagram.svg" alt="Instagram" />
                            <p>Instagram</p>
                        </div>
                        <div className={s.aside_button_window_contacts}>
                            <img src="/PhoneModal.svg" alt="Phone" />
                            <p>+79990000000</p>
                        </div>
                        <div className={s.aside_button_window_order}>
                            <button>
                                Заказать звонок
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AsideButton;





