import React from "react";
import s from "./FullService.module.scss";
import Image from "next/image";

const FullService = () => {
  return (
    <div className={s.full_service}>
      <div className={s.full_service_photo}>
        <h4>Полный спектр услуг</h4>
        <div className={s.full_text_paragrapf}></div>
        <p>
          Присоединяйтесь к нашему сообществууспешных инвесторов и довольных
          владельцев жилья на Пхукете.
        </p>
      </div>

      <div className={s.service}>
        <div className={s.service_content_blocks}>
          <div className={s.service_content_block}>
            <h6>Профессионализм</h6>

            <div className={s.service_icon}>
              <Image
                src={"/like.png"}
                width={16}
                height={16}
                alt="like icon"
              ></Image>
            </div>
          </div>

          <p>
            Мы гордимся своим сервисом, который включает подбор самых ликвидных
            объектов недвижимости.
          </p>
        </div>

        <div className={s.service_content_blocks}>
          <div className={s.service_content_block}>
            <h6>Качество</h6>

            <div className={s.service_icon}>
              <Image
                src={"/medal_lcon.png"}
                width={16}
                height={16}
                alt="medal icon"
              ></Image>
            </div>
          </div>

          <p>
            Проводим детальное изучение репутации застройщика, проверяем наличие
            всех документов и отсутствия обременений.
          </p>
        </div>

        <div className={s.service_content_blocks}>
          <div className={s.service_content_block}>
            <h6>Безопасность</h6>

            <div className={s.service_icon}>
              <Image
                src={"/checkMark_icon.png"}
                width={16}
                height={16}
                alt="check-mark icon"
              ></Image>
            </div>
          </div>

          <p>
            Важность соблюдения норм качества и безопасности для нас в
            приоритете, а наши юристы сопровождают вас на этапе всей сделки.
          </p>
        </div>

        <div className={s.service_content_blocks}>
          <div className={s.service_content_block}>
            <h6>Строительство</h6>

            <div className={s.service_icon}>
              <Image
                src={"/house_icon.png"}
                width={16}
                height={16}
                alt="house icon"
              ></Image>
            </div>
          </div>

          <p>
            Строительство с полным циклом услуг, а также эксклюзивные права на
            сотрудничество: бонусы, выгодная цена, одни из лучших видовых лотов.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FullService;
