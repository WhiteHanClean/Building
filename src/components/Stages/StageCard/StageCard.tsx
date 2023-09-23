import React from 'react';
import s from './StageCard.module.scss';

interface StageCardProps {
  number: string;
  headerText: string;
  description: string;
}

const StageCard = ({ number, headerText, description }: StageCardProps) => {
  return (
      <div className={s.stage_card_container}>
        {/* header */}
        <div className={s.stage_header_info}>
          <div className={s.stage_number_wrapper}>
            <h1 className={s.stage_number}>{number}</h1>
          </div>
          <h1 className={s.stage_text}>{headerText}</h1>
        </div>
        {/* description */}
        <p className={s.stage_description}>{description}</p>
      </div>

  );
};

export default StageCard;
