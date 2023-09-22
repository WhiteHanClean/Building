import React from 'react';
import s from "./Questions.module.scss"

import { Collapse } from 'antd';
const Panel = Collapse.Panel;

const text = `
  lorem ipsum dolor
`;

const customPanelStyle = {
    borderBottom: '1px solid #A3A3A3',
    background: '#D5D7C4',
};

const nestedPanelStyle = {
    borderBottom: 0,
    background: '#D5D7C4'
};

const Questions: React.FC = () => {

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
                            <Panel header={<div className={s.questions_accordion_button}><img src="/accordionBtn.svg" alt="accordionBtn" /> <p>От чего зависит цена аренды?</p></div>} key="nasted" style={customPanelStyle}>
                                <p>{text}</p>
                            </Panel>
                            <Panel header={<div className={s.questions_accordion_button}><img src="/accordionBtn.svg" alt="accordionBtn" /> <p>Когда бронирование считается подтвержденным?</p></div>} key="nasted2" style={nestedPanelStyle}>
                                <p>{text}</p>
                            </Panel>
                        </Collapse>
                    </Panel>
                    <Panel header={<div className={s.questions_accordion_button}><img src="/accordionBtn.svg" alt="accordionBtn" />Вопросы покупки</div>} key="2" style={customPanelStyle}>
                        <p>{text}</p>
                    </Panel>
                    <Panel header={<div className={s.questions_accordion_button}><img src="/accordionBtn.svg" alt="accordionBtn" />Вопросы сервиса</div>} key="3" style={customPanelStyle}>
                        <p>{text}</p>
                    </Panel>
                </Collapse>
            </div>
        </div>
    );
};

export default Questions;