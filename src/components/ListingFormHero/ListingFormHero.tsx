import { Checkbox } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import s from "./ListingFormHero.module.scss";
import { useTranslation } from "react-i18next";

const ListingFormHero = () => {
  const { t } = useTranslation();
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

  const handleClickConsultation = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
  };
  return (
    <div className={s.ListingFormHero_content_form}>
      <form className={s.ListingFormHero_consultation}>
        <p>{t("main.consultation.name")}</p>
        <input
          type="text"
          placeholder={t("main.consultation.namePlaceholder")}
        />
        <p>{t("main.consultation.phoneNumber")}</p>
        <input type="text" placeholder="+7 (999) 000-00-00" />
        <p>{t("main.consultation.comment")}</p>
        <textarea
          className={s.ListingFormHero_last_input_consultation}
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
          Отправить заявку
        </button>
      </form>
    </div>
  );
};

export default ListingFormHero;
