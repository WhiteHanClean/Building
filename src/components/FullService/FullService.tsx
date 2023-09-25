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
          Присоединяйтесь к нашему сообществу успешных инвесторов и довольных
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
                alt="logo"
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
            <h6>Профессионализм</h6>

            <div className={s.service_icon}>
              <Image
                src={"/like.png"}
                width={16}
                height={16}
                alt="logo"
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
            <h6>Профессионализм</h6>

            <div className={s.service_icon}>
              <Image
                src={"/like.png"}
                width={16}
                height={16}
                alt="logo"
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
            <h6>Профессионализм</h6>

            <div className={s.service_icon}>
              <Image
                src={"/like.png"}
                width={16}
                height={16}
                alt="logo"
              ></Image>
            </div>
          </div>

          <p>
            Мы гордимся своим сервисом, который включает подбор самых ликвидных
            объектов недвижимости.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FullService;
