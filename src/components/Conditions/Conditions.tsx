import React from 'react';
import s from "@/components/Conditions/Conditions.module.scss"
import Image from 'next/image';

const Conditions: React.FC = () => {
    return (
        <div className={s.conditions}>
            <div className={s.conditions_content}>
                <div className={s.conditions_content_block}>
                    <h6>Оценка квартиры</h6>
                    <p>
                        Наши специалисты помогут оценить
                        <br />
                        квартиру и дадут практические рекомендации
                        <br />
                        для максимально выгодной сдачи
                    </p>

                    <div className={s.conditions_icon_block}>
                        <Image
                            src={"/conditionTick.png"}
                            width={20}
                            height={20}
                            alt="logo"
                        ></Image>
                    </div>
                </div>
                <div className={s.conditions_content_block}>
                    <h6>Поиск арендаторов</h6>

                    <p>
                        Мы проинформируем наших частных
                        <br />
                        и корпоративных клиентов о сдаче квартиры
                        <br />
                        и подберем надежного арендатора
                    </p>

                    <div className={s.conditions_icon_block}>
                        <Image
                            src={"/condititonGroup.png"}
                            width={20}
                            height={20}
                            alt="logo"
                        ></Image>
                    </div>
                </div>
                <div className={s.conditions_content_block}>
                    <h6>Показ квартиры</h6>

                    <p>
                        Доверьте показ квартиры нашим специалистам
                        <br />
                        и это сэкономит ваше время и позволит выбрать
                        <br />
                        максимально выгодное предложение
                    </p>

                    <div className={s.conditions_icon_block}>
                        <Image
                            src={"/conditionHome.png"}
                            width={20}
                            height={20}
                            alt="logo"
                        ></Image>
                    </div>
                </div>
                <div className={s.conditions_content_block}>
                    <h6>Договор</h6>

                    <p>
                        Согласование и подписание договора аренды,
                        <br />
                        защищающего Ваши интересы и его
                        <br />
                        сопровождение в течение всего срока аренды
                    </p>

                    <div className={s.conditions_icon_block}>
                        <Image
                            src={"/condititonGroup.png"}
                            width={20}
                            height={20}
                            alt="logo"
                        ></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Conditions;