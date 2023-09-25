import React from "react";
import s from "./Service.module.scss";
import Image from "next/image";

const Service = () => {
  return (
    <div className={s.service}>
      <h2>Сервисы</h2>
      <div className={s.service_content}>
        <div className={s.sevice_content_block}>
          <h6>Юридическое сопровождение</h6>

          <p>
            Детальное изучение репутации застройщика, проверка наличия всех
            необходимых документов, отсутствия обременений, залогов. Помощь в
            открытие счета в банке, открытие компании, помощь в оформлении
            недвижимости, приемка объекта.
          </p>

          <div className={s.service_icon_block}>
            <Image
              src={"/service1.png"}
              width={20}
              height={20}
              alt="logo"
            ></Image>
          </div>
        </div>
        <div className={s.sevice_content_block}>
          <h6>Строительство под ключ</h6>

          <p>
            Полный цикл услуг — подбор земли, <br /> согласования проекта и
            строительства на ней <br />с учетом богатого опыта на рынке.
          </p>

          <div className={s.service_icon_block}>
            <Image
              src={"/service4.png"}
              width={20}
              height={20}
              alt="logo"
            ></Image>
          </div>
        </div>

        <div className={s.sevice_content_block}>
          <h6>Денежные переводы</h6>

          <p>
            Помогаем нашим клиентам осуществить безопасный и быстрый перевод
            валюты по выгодным тарифам.
          </p>

          <div className={s.service_icon_block}>
            <Image
              src={"/service2.png"}
              width={20}
              height={20}
              alt="logo"
            ></Image>
          </div>
        </div>

        <div className={s.sevice_content_block}>
          <h6>Дизайн интерьера</h6>

          <p>
            Дизайнеры нашей команды могут выполнить на заказ индивидуальный
            пакет мебели высокого качества, подготовить объекта недвижимости к
            сдаче или продаже, повышая стоимость объекта в среднем на 8%.
          </p>

          <div className={s.service_icon_block}>
            <Image
              src={"/service5.png"}
              width={20}
              height={20}
              alt="logo"
            ></Image>
          </div>
        </div>

        <div className={s.sevice_content_block}>
          <h6>Оформление визы</h6>

          <p>
            Помогаем нашим клиентам с оформлением визы. Официальный партнер
            программы — Thai Elite.
          </p>

          <div className={s.service_icon_block}>
            <Image
              src={"/service3.png"}
              width={20}
              height={20}
              alt="logo"
            ></Image>
          </div>
        </div>

        <div className={s.sevice_content_block}>
          <h6>Контроль качества</h6>

          <p>
            Мы проводим тщательный анализ рынка недвижимости, изучаем документы
            застройщика, проверяем качество строительства и материалов.
          </p>

          <div className={s.service_icon_block}>
            <Image
              src={"/service6.png"}
              width={20}
              height={20}
              alt="logo"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
