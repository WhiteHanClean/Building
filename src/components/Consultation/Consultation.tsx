import React, { useState } from "react";
import s from "./Consultation.module.scss";
import { Checkbox } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import { useTranslation } from "react-i18next";
import axios from "axios";
const Consultation = () => {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const plainOptions1 = [
    t("main.consultation.buy"),
    t("main.consultation.post"),
  ];
  const plainOptions2 = [
    t("main.consultation.rent"),
    t("main.consultation.other"),
  ];

  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    comment: "",
    checkGroup1: [],
    checkGroup2: [],
  });

  const closeMessage = () => {
    setIsSubmitted(false);
  };

  const handleClickConsultation = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsSubmitted(true);

    // Объединяем значения из обеих групп в один массив
    const allCheckedValues = [...formData.checkGroup1, ...formData.checkGroup2];

    // Выводим все значения в консоли
    console.log("Form Data:", {
      ...formData,
      check: allCheckedValues,
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCheckboxChangeGroup1 = (checkedValues: CheckboxValueType[]) => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      checkGroup1: checkedValues,
    }));
  };

  const handleCheckboxChangeGroup2 = (checkedValues: CheckboxValueType[]) => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      checkGroup2: checkedValues,
    }));
  };

  const handleClickConsultationOk = async (
    event: React.MouseEvent<HTMLElement>
  ) => {
    event.preventDefault();

    try {
      const data = {
        name: formData.name,
        phone_number: formData.phone_number,
        comment: formData.comment,
        check: [...formData.checkGroup1, ...formData.checkGroup2],
      };

      const response = await axios.post(
        "https://www.amocrm.ru/developers/content/crm_platform/leads-api/api/v4/leads",
        data
      );

      if (response.status === 200) {
        // Устанавливаем isSubmitted в true после успешной отправки
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
    }
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
              name="name"
              placeholder={t("main.consultation.namePlaceholder")}
              value={formData.name}
              onChange={handleInputChange}
            />
            <p> {t("main.consultation.phoneNumber")}</p>
            <input
              type="text"
              name="phone_number"
              placeholder="+7 (999) 000-00-00"
              value={formData.phone_number}
              onChange={handleInputChange}
            />
            <p>{t("main.consultation.comment")}</p>
            <textarea
              className={s.last_input_consultation}
              name="comment"
              placeholder={t("main.consultation.commentPlaceholder")}
              value={formData.comment}
              onChange={handleTextAreaChange}
            />
            <div className={s.check_consultation}>
              <div className={s.check_consultation_item}>
                <Checkbox.Group
                  className={s.check}
                  options={plainOptions1}
                  value={formData.checkGroup1}
                  onChange={handleCheckboxChangeGroup1}
                />
              </div>
              <div className={s.check_consultation_item}>
                <Checkbox.Group
                  options={plainOptions2}
                  value={formData.checkGroup2}
                  onChange={handleCheckboxChangeGroup2}
                />
              </div>
            </div>

            <button
              className={s.consultation_btn}
              onClick={(event) => handleClickConsultationOk(event)}
            >
              {t("main.consultation.sendRequest")}
            </button>
          </form>
        </div>
      )}

      <div className={s.security2}>
        <p>
        {t("main.consultation.agreement")}{" "}
          <a href="#">
            <b>{t("main.consultation.pdp")}</b>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Consultation;
