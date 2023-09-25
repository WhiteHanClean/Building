import React, {useState} from 'react';
import s from "./Questions.module.scss"

import { Collapse } from 'antd';
const Panel = Collapse.Panel;

const text = (
    <ul >
        <li>На стоимость аренды влияют следующие факторы:</li>
        <li>сезонность: в высокий и летний сезон цена может отличаться более чем в 3 раза. Периодичность изменения цен устанавливают собственники недвижимости, ориентируясь на спрос и туристический поток;</li>
        <li>срок аренды: чем продолжительнее отдых, тем ниже стоимость аренды за сутки. На недвижимость, расположенную на территориях отелей, это правило не распространяется;</li>
        <li>даты заезда: вероятность дополнительных скидок на даты, удобные для владельца объекта, очень высока;</li>
        <li>акции: максимальное количество выгодных предложений приходится на летний и средний сезоны.</li>
    </ul>
);

const customPanelStyle = {
    borderBottom: '1px solid #A3A3A3',
    background: '#D5D7C4',
};

const nestedPanelStyle = {
    borderBottom: 0,
    background: '#D5D7C4'
};

const Questions: React.FC = () => {

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <div className={s.questions}>
            <div className={s.questions_description}>
                <h3>Часто задаваемые вопросы</h3>
                <p>Быстрые ответы на вопросы, которые могут у вас возникнуть. Не нашли то, что ищите? Закажите бесплатную консультацию.</p>
            </div>
            <div className={s.questions_accordion}>
                <Collapse bordered={false} expandIcon={({ isActive }) => null}>
                    <Panel header={<div className={s.questions_accordion_button}><img src="/accordionBtn.svg" alt="accordionBtn" />Вопросы аренды</div>} key="1" style={customPanelStyle}>
                        <Collapse bordered={false} expandIcon={({ isActive }) => null}>
                            <Panel header={<div className={s.questions_accordion_button}><img src="/accordionBtn.svg" alt="accordionBtn" /> <h3>От чего зависит цена аренды?</h3></div>} key="nasted" style={customPanelStyle}>
                                <p className="questions_accordion_button_title">{text}</p>
                            </Panel>
                            <Panel header={<div className={s.questions_accordion_button}><img src="/accordionBtn.svg" alt="accordionBtn" /> <h3>Когда бронирование считается подтвержденным?</h3></div>} key="nasted2" style={nestedPanelStyle}>
                                <p className="questions_accordion_button_title">lorem ipsum dolor</p>
                            </Panel>
                        </Collapse>
                    </Panel>
                    <Panel header={<div className={s.questions_accordion_button}><img src="/accordionBtn.svg" alt="accordionBtn" />Вопросы покупки</div>} key="2" style={customPanelStyle}>
                        <p className="questions_accordion_button_title">lorem ipsum dolor</p>
                    </Panel>
                    <Panel header={<div className={s.questions_accordion_button}><img src="/accordionBtn.svg" alt="accordionBtn" />Вопросы сервиса</div>} key="3" style={customPanelStyle}>
                        <p className="questions_accordion_button_title">lorem ipsum dolor</p>
                    </Panel>
                </Collapse>
            </div>
        </div>
    );
};

export default Questions;