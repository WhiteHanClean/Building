import React from 'react';
import s from './Stages.module.scss';
import Image from 'next/image';
import StageCard from './StageCard/StageCard';

const Stages = () => {
  return (
    <>
      <div className={s.stages_header_content}>
        <div className={s.stages_header}>
          <h1>Мы заботимся о вашем комфорте</h1>
          <p>
            Мы регулярно обновления и анализируем рынок, предоставляя клиентам
            актуальные данные для принятия обоснованных решений, а наши
            специалисты обеспечат вам комфорт и надежность на каждом этапе
            сделки.
          </p>
        </div>
      </div>
      <div className={s.stages_content}>
        <div className={s.stages_picture}>
          <Image
            src={'/bgWorkOfStages.png'}
            width={522}
            height={589}
            alt="work of stages bg"
          />
        </div>
        <div className={s.stages_cards}>
          <StageCard
            number={'1'}
            headerText={'Первый шаг'}
            description={
              'Подберём подходящие объекты, составим индивидуальную программу просмотров, учитывая ваши пожелания.'
            }
          />

          <StageCard
            number={'2'}
            headerText={'Второй шаг'}
            description={
              'Встретим вас в удобной локации на комфортабельном автомобиле и покажем объекты из нашего списка.'
            }
          />
          <StageCard
            number={'3'}
            headerText={'Третий шаг'}
            description={
              'Выбираем проект, получаем самые выгодные условия от нашей компании.'
            }
          />
          <StageCard
            number={'4'}
            headerText={'Четвертый шаг'}
            description={
              'Предоставим уставные документы, договор купли-продажи и расскажем о формах собственности на недвижимость.'
            }
          />
          <StageCard
            number={'5'}
            headerText={'Пятый шаг'}
            description={
              'Бронируем объект, получаем договор резервации и оплачиваем депозит.'
            }
          />
          <StageCard
            number={'6'}
            headerText={'Шестой шаг'}
            description={
              'Составляем контракт, заключаем сделку и оплачиваем квартиру.'
            }
          />
        </div>
      </div>
    </>
  );
};

export default Stages;
