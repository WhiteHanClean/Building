import React from 'react';
import s from './BuildCard.module.scss';
import Image from 'next/image';
const BuildCard = () => {
  return (
    <div className={s.card_container}>
      <Image src={'/BuildCard.png'} width={413} height={270} alt="Photo" />
      <div className={s.card_name}>
        <p>Zen space</p>
        <p>13 000 000 ₽</p>
      </div>
      <div className={s.card_details}>
        <div className={s.card_detail_wrapper}>

        <span>
          <Image
            className={s.card_icons}
            src={'/IconBed.png'}
            width={17}
            height={12}
            alt="Icon bet"
          />
          3 cпальни
        </span>
        <span>
          <Image
            className={s.card_icons}
            src={'/SquareIcon.png'}
            width={15}
            height={15}
            alt="Square icon"
          />
          234 м²
        </span>
        <span>
          <Image
            className={s.card_icons}
            src={'/Big Icon.png'}
            width={15}
            height={15}
            alt="square common icon"
          />
          1 234 м²
        </span>
        </div>
        <div>
        <span>Камала, Катху, Пхукет</span>
        </div>
      </div>
    </div>
  );
};

export default BuildCard