import React, { useState } from "react";
import s from "./Consultation.module.scss";
import { Checkbox } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";

const Consultation = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const plainOptions = ["Купить", "Разместить"];
  const plainOptions2 = ["Арендовать", "Другое"];

  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log("checked = ", checkedValues);
  };

  const closeMessage = () => {
    setIsSubmitted(prevState => !prevState)
  }

  const handleClickConsultation = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className={s.consultation}>
      <div className={s.consultation_content_text}>
        <h2>Бесплатная консультация</h2>
        <p>
          Если у вас есть вопросы, оставьте заявку и мы свяжемся с вами в
          течении 15 минут.
        </p>
      </div>

      <div className={s.security}>
        <p>
          Нажимая на кнопку «Отправить заявку», вы соглашаетесь с{" "}
          <a href="#">
            <b>Политикой персональных данных</b>
          </a>
        </p>
      </div>

      {isSubmitted ? (
        <div className={s.consultation_success_message}>
          <button onClick={closeMessage}>
            <img src="/successCross.png" alt="successCross" />
          </button>
          <h2>Заявка отправлена</h2>
          <img src="/Success.png" alt="Success" />
          <p>Наш менеджер свяжется с вами в течении 15 минут</p>
        </div>
      ) : (
        <div className={s.consultation_content_form}>
          <form className={s.form_consultation}>
            <p>Имя</p>
            <input type="text" placeholder="Иванов Петр Константинович" />
            <p>Номер телефона</p>
            <input type="text" placeholder="+7 (999) 000-00-00" />
            <p>Комментарий (не обязательно)</p>
            <textarea
              className={s.last_input_consultation}
              placeholder="Напишите интересующий вас вопрос"
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
              Отправить заявку
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