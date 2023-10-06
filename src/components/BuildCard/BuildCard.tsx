import React from 'react';
import s from './BuildCard.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';

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
  id,
  img = {
    url: '/413x270.png',
  },
  alt = 'foto',
  name = 'Housing',
  price = 0,
  rooms = 0,
  landArea = 0,
  builtUpArea = 0,
  location = 'Необходимо уточнить',
}: Props) => {
  const handleClick = () => {};

  return (
    <div className={s.card}>
      {/* image */}

      <div
        className={s.card_img}
        style={{
          backgroundImage: `url(${img.url})`,
          backgroundSize: 'cover',
        }}
      ></div>

      {/* card main data */}

      <div className={s.card_mainData}>
        {/* card title */}

        <div className={s.card_title}>
          <h3>{name}</h3>
          <p>{price}</p>
        </div>

        {/* card house numbers */}

        <div className={s.card_houseData}>
          <div>
            <Image src={'BedIcon'} alt="Bed icon" width={16} height={16} />
            <p>{rooms} спальни</p>
          </div>

          <div>
            <Image src={'SquareIcon'} width={16} height={16} alt="Square icon" />
            <p>{product.houseArea} м²</p>
          </div>

          <div>
            <Image
              src={'SquareDiagonaleIcon'}
              width={16}
              height={16}
              alt="Square diagonal icon"
            />
            <p>{product.mainAria} м²</p>
          </div>
        </div>

        {/* card house location */}

        <div className={s.card_houselocation}>
          <p>{product.place}</p>
        </div>
      </div>
    </div>
  );
};

export default BuildCard;
