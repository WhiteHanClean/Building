import React from "react";
import s from "./TypesOfServices.module.scss";
import Image from "next/image";

const TypesOfServices = () => {
  return (
    <div className={s.typesOfServices}>
      <div className={s.typesOfServices_content}>
        <div className={s.typesOfServices_content_block_common}>
          <h4>Услуги</h4>

          <p>
            Мы предлагаем широкий спектр услуг,
            <br /> соблюдая высокое качество сервиса
            <br />
            для наших клиентов.
          </p>
        </div>
        <div className={s.typesOfServices_content_block}>
          <h6>Покупка</h6>

          <p>
            Подберем для вас самые ликвиднее объекты <br />
            недвижимости для жизни и инвестирования
            <br /> на острове Пхукет.
          </p>

          <div className={s.service_icon_block}>
            <Image
              src={"/tabler_arrow-up.png"}
              width={16}
              height={16}
              alt="logo"
            ></Image>
          </div>
        </div>

        <div className={s.typesOfServices_content_block}>
          <h6>Разместить свою недвижимость</h6>

          <p>
            Наши специалисты помогут с продажей, а также <br />
            предоставят возможность вам сдавать в аренду
            <br /> свою недвижимость с доходностью 6-10% годовых.
          </p>

          <div className={s.service_icon_block}>
            <Image
              src={"/tabler_arrow-up.png"}
              width={16}
              height={16}
              alt="logo"
            ></Image>
          </div>
        </div>

        <div className={s.typesOfServices_content_block}>
          <h6>Аренда</h6>

          <p>
            Персональная подготовка к заселению, <br />
            встреча в аэропорту, надежное обслуживание <br />и постоянная
            поддержка.
          </p>

          <div className={s.service_icon_block}>
            <Image
              src={"/tabler_arrow-up.png"}
              width={16}
              height={16}
              alt="logo"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypesOfServices;
