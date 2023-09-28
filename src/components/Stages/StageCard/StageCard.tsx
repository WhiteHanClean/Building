import React from 'react';
import s from './StageCard.module.scss';
interface StageCardProps {
  number: string;
  headerText: string;
  description: string;
}

const StageCard = ({ number, headerText, description }: StageCardProps) => {
  return (
    <div className={s.stage_card_content}>
      <div className={s.stage_header_info}>
        <div className={s.stage_number_wrapper}>
          <h1>{number}</h1>
        </div>
        <h1>{headerText}</h1>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default StageCard;
