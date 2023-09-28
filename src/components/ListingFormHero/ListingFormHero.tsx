import { Checkbox } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import s from "./ListingFormHero.module.scss";

const ListingFormHero = () => {
  const plainOptions = ["Купить", "Разместить"];
  const plainOptions2 = ["Арендовать", "Другое"];

  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log("checked = ", checkedValues);
  };

  const handleClickConsultation = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
  };
  return (
    <div className={s.ListingFormHero_content_form}>
      <form className={s.ListingFormHero_consultation}>
        <p>Имя</p>
        <input type="text" placeholder="Иванов Петр Константинович" />
        <p>Номер телефона</p>
        <input type="text" placeholder="+7 (999) 000-00-00" />
        <p>Комментарий (не обязательно)</p>
        <textarea
          className={s.ListingFormHero_last_input_consultation}
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
  );
};

export default ListingFormHero;
