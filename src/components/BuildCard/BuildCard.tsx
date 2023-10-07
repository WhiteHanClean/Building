import React from "react";
import s from "./BuildCard.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
  id: string;
  img: any;
  alt: string;
  name: string;
  price: number;
  rooms: number;
  landArea: number;
  builtUpArea: number;
  location: string;
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
  landArea = 0,
  builtUpArea = 0,
  location = "Необходимо уточнить",
}: Props) => {
  const imageWidth = 413;
  const imageHeight = 270;

  const router = useRouter();

  function handleClick() {
    router.push(`/DetailProperty/${id}`);
  }

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
        <p>{price} ₽</p>
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
            {rooms} комнаты
          </span>
          <span>
            <Image
              className={s.card_icons}
              src={"/SquareIcon.png"}
              width={15}
              height={15}
              alt="Square icon"
            />
            {builtUpArea} м²
          </span>
          <span>
            <Image
              className={s.card_icons}
              src={"/Big Icon.png"}
              width={15}
              height={15}
              alt="square common icon"
            />
            {landArea} м²
          </span>
        </div>
        <div>
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default BuildCard;
