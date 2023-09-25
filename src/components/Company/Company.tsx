import React from 'react';
import s from "./Company.module.scss"

const Company: React.FC = () => {
    return (
        <div className={s.company}>
            <div className={s.company_items}>
                <h3>О компании</h3>
                <p>
                    Property Library Phuket — команда профессионалов с обширным опытом
                    в сфере недвижимости. Я — Ханкишиев Эльнур, основатель агентства.
                    <br />
                    <br />
                    Наша история началась в 2011 году, когда я переехал из России и начал
                    карьеру в туристической компании на прекрасном острове Пхукет, жемчужине
                    Юго-Восточной Азии. C тех пор мы успешно помогаем нашим клиентам
                    находить идеальные объекты для жизни и инвестирования.
                    <br />
                    <br />
                    Доверьте свои инвестиции нам, и мы поможем вам осуществить ваши
                    мечты на Пхукете.
                </p>
                <div className={s.company_items_imgs}>
                    <div className={s.company_items_img}>
                        <img src="/peopleLaptop.png" alt="peopleLaptop" />
                        <p>
                            Property Library Phuket — команда профессионалов с обширным
                            опытом в сфере недвижимости. Я — Ханкишиев Эльнур, основатель
                            агентства.
                            <br />
                            <br />
                            Наша история началась в 2011 году, когда я переехал из
                            России и начал карьеру в туристической компании на прекрасном
                            острове Пхукет, жемчужине Юго-Восточной Азии.
                        </p>
                    </div>
                    <div className={s.company_items_img}>
                        <img src="/familyMan.png" alt="familyMan" />
                        <p>
                            C тех пор мы успешно помогаем нашим клиентам находить идеальные
                            объекты для жизни и инвестирования.
                            <br />
                            <br />
                            Доверьте свои инвестиции нам,
                            и мы поможем вам осуществить ваши мечты на Пхукете.
                        </p>
                    </div>
                </div>
            </div>
            <div className={s.company_img}>
                <img src="/man.png" alt="man" />
            </div>
        </div>
    );
};

export default Company;