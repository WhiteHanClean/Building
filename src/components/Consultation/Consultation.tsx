import React, { useState } from "react";
import s from "./Consultation.module.scss";
import { Checkbox } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import { useTranslation } from "react-i18next";

const Consultation = () => {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const plainOptions = [
    t("main.consultation.buy"),
    t("main.consultation.post"),
  ];
  const plainOptions2 = [
    t("main.consultation.rent"),
    t("main.consultation.other"),
  ];

  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log("checked = ", checkedValues);
  };

  const closeMessage = () => {
    setIsSubmitted((prevState) => !prevState);
  };

  const handleClickConsultation = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className={s.consultation}>
      <div className={s.consultation_content_text}>
        <h2>{t("main.consultation.title")}</h2>
        <p>{t("main.consultation.description")}</p>
      </div>

      <div className={s.security}>
        <p>
          {t("main.consultation.agreement")}{" "}
          <a href="#">
            <b> {t("main.consultation.pdp")}</b>
          </a>
        </p>
      </div>

      {isSubmitted ? (
        <div className={s.consultation_success_message}>
          <button onClick={closeMessage}>
            <img src="/successCross.png" alt="successCross" />
          </button>
          <h2>{t("main.consultation.applicationSent")}</h2>
          <img src="/Success.png" alt="Success" />
          <p>{t("main.consultation.message")}</p>
        </div>
      ) : (
        <div className={s.consultation_content_form}>
          <form className={s.form_consultation}>
            <p>{t("main.consultation.name")}</p>
            <input
              type="text"
              placeholder={t("main.consultation.namePlaceholder")}
            />
            <p> {t("main.consultation.phoneNumber")}</p>
            <input type="text" placeholder="+7 (999) 000-00-00" />
            <p>{t("main.consultation.comment")}</p>
            <textarea
              className={s.last_input_consultation}
              placeholder={t("main.consultation.commentPlaceholder")}
            />
            <div className={s.check_consultation}>
              <div className={s.check_consultation_item}>
                <Checkbox.Group
                  className={s.check}
                  options={plainOptions}
                  defaultValue={["Apple"]}
                  onChange={onChange}
                />
              </div>
              <div className={s.check_consultation_item}>
                <Checkbox.Group
                  options={plainOptions2}
                  defaultValue={["Apple"]}
                  onChange={onChange}
                />
              </div>
            </div>

            <button
              className={s.consultation_btn}
              onClick={(event) => handleClickConsultation(event)}
            >
              {t("main.consultation.sendRequest")}
            </button>
          </form>
        </div>
      )}

      <div className={s.security2}>
        <p>
          Нажимая на кнопку «Отправить заявку», вы соглашаетесь с{" "}
          <a href="#">
            <b>Политикой персональных данных</b>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Consultation;
