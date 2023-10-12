import React from "react";
import s from "./BuildCard.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

interface Props {
  id?: string;
  img?: any;
  alt?: string;
  name?: string;
  price?: number;
  rooms?: number;
  roomsFrom?: number;
  roomsTo?: number;
  landArea?: number;
  millionBathFrom?: number;
  millionBathTo?: number;
  landAreaFrom?: number;
  landAreaTo?: number;
  builtUpArea?: number;
  builtUpAreaFrom?: number;
  builtUpAreaTo?: number;
  location?: any;
}

const BuildCard = ({
  img = {
    url: "/413x270.png",
  },
  id,
  alt = "foto",
  name = "Housing",
  price = 0,
  rooms = 0,
  roomsFrom = 0,
  roomsTo = 0,
  millionBathFrom = 0,
  millionBathTo = 0,
  landArea = 0,
  builtUpArea = 0,
  builtUpAreaFrom = 0,
  builtUpAreaTo = 0,
  landAreaFrom = 0,
  landAreaTo = 0,
  location = "Необходимо уточнить",
}: Props) => {
  const imageWidth = 413;
  const imageHeight = 270;

  const router = useRouter();

  function handleClick() {
    router.push(`/DetailProperty/${id}`);
  }

  const { t } = useTranslation();

  return (
    <div onClick={handleClick} className={s.card_container}>
      <div className={s.card_wrapper_img}>
        <Image
          src={img.url}
          width={imageWidth}
          height={imageHeight}
          alt={alt}
        />
      </div>
      <div className={s.card_name}>
        <p>{name.length > 20 ? `${name.slice(0, 16)}...` : name}</p>
        <p>{millionBathFrom}-{millionBathTo} MB</p>
      </div>
      <div className={s.card_details}>
        <div className={s.card_detail_wrapper}>
          <span>
            <Image
              className={s.card_icons}
              src={"/IconBed.png"}
              width={17}
              height={12}
              alt="Icon bet"
            />
            {roomsFrom},{roomsTo} {t("main.searchBar.room")}
          </span>
          <span>
            <Image
              className={s.card_icons}
              src={"/SquareIcon.png"}
              width={15}
              height={15}
              alt="Square icon"
            />
            {builtUpAreaFrom} м² - {builtUpAreaTo} м²
          </span>
          <span>
            <Image
              className={s.card_icons}
              src={"/Big Icon.png"}
              width={15}
              height={15}
              alt="square common icon"
            />
            {landAreaFrom} м² - {landAreaTo} м²
          </span>
        </div>
        <div>
          
            <span>
              {location?.title1 || t("main.searchBar.titleNone")},&nbsp;
              {location?.title2 || t("main.searchBar.titleNone")},&nbsp;
              {location?.title3 || t("main.searchBar.titleNone")}
            </span>
    
        </div>
      </div>
    </div>
  );
};

export default BuildCard;
