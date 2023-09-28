import React, { useState } from "react";
import s from "./Questions.module.scss";

import { Collapse } from "antd";
const { Panel } = Collapse;

const text = (
  <div>
    <p>На стоимость аренды влияют следующие факторы:</p>
    <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
      <li>
        сезонность: в высокий и летний сезон цена может отличаться более чем в 3
        раза. Периодичность изменения цен устанавливают собственники
        недвижимости, ориентируясь на спрос и туристический поток;
      </li>
      <li>
        срок аренды: чем продолжительнее отдых, тем ниже стоимость аренды за
        сутки. На недвижимость, расположенную на территориях отелей, это правило
        не распространяется;
      </li>
      <li>
        даты заезда: вероятность дополнительных скидок на даты, удобные для
        владельца объекта, очень высока;
      </li>
      <li>
        акции: максимальное количество выгодных предложений приходится на летний
        и средний сезоны.
      </li>
    </ul>
  </div>
);

const customPanelStyle = {
  borderBottom: "1px solid #A3A3A3",
  background: "#D5D7C4",
};

const Questions: React.FC = () => {
  const [activePanels, setActivePanels] = useState<string[]>([]);
  const [nestedActivePanels, setNestedActivePanels] = useState<string[]>([]);
  const [nestedIcons, setNestedIcons] = useState<{ [key: string]: boolean }>(
    {}
  );

  const togglePanel = (key: string | string[], nested?: boolean) => {
    if (!nested) {
      if (typeof key === "string") {
        if (activePanels.includes(key)) {
          setActivePanels(activePanels.filter((item) => item !== key));
        } else {
          setActivePanels([...activePanels, key]);
        }
      }
    } else {
      if (typeof key === "string") {
        const newIcons = { ...nestedIcons };
        newIcons[key] = !nestedIcons[key];
        setNestedIcons(newIcons);

        if (nestedActivePanels.includes(key)) {
          setNestedActivePanels(
            nestedActivePanels.filter((item) => item !== key)
          );
        } else {
          setNestedActivePanels([...nestedActivePanels, key]);
        }
      }
    }
  };

  const isPanelActive = (key: string, nested?: boolean) => {
    const activeState = nested ? nestedActivePanels : activePanels;
    if (typeof key === "string") {
      return activeState.includes(key);
    }
    return false;
  };

  return (
    <div className={s.questions}>
      <div className={s.questions_description}>
        <h3>Часто задаваемые вопросы</h3>
        <p>
          Быстрые ответы на вопросы, которые могут у вас возникнуть. Не нашли
          то, что ищите? Закажите бесплатную консультацию.
        </p>
      </div>
      <div className={s.questions_accordion}>
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => null}
          activeKey={activePanels}
          onChange={(keys) => setActivePanels(keys as string[])}
        >
          <Panel
            header={
              <div className={s.questions_accordion_button}>
                <img
                  src={
                    isPanelActive("1")
                      ? "/accordionMinusBtn.svg"
                      : "/accordionBtn.svg"
                  }
                  alt="accordionBtn"
                />
                Вопросы аренды
              </div>
            }
            key="1"
            style={customPanelStyle}
          >
            <Collapse
              bordered={false}
              expandIcon={({ isActive }) => null}
              activeKey={nestedActivePanels}
              onChange={(keys) => togglePanel(keys, true)}
            >
              <Panel
                header={
                  <div className={s.questions_accordion_button}>
                    <img
                      src={
                        nestedIcons["nasted"]
                          ? "/accordionMinusBtn.svg"
                          : "/accordionBtn.svg"
                      }
                      alt="accordionBtn"
                      onClick={() => togglePanel("nasted", true)}
                    />
                    <p>От чего зависит цена аренды?</p>
                  </div>
                }
                key="nasted"
                style={customPanelStyle}
              >
                <p>{text}</p>
              </Panel>
              <Panel
                header={
                  <div className={s.questions_accordion_button}>
                    <img
                      src={
                        nestedIcons["nasted2"]
                          ? "/accordionMinusBtn.svg"
                          : "/accordionBtn.svg"
                      }
                      alt="accordionBtn"
                      onClick={() => togglePanel("nasted2", true)}
                    />
                    <p>Когда бронирование считается подтвержденным?</p>
                  </div>
                }
                key="nasted2"
                style={{ ...customPanelStyle, borderBottom: "0" }}
              >
                <p>{text}</p>
              </Panel>
            </Collapse>
          </Panel>
          <Panel
            header={
              <div className={s.questions_accordion_button}>
                <img
                  src={
                    isPanelActive("2")
                      ? "/accordionMinusBtn.svg"
                      : "/accordionBtn.svg"
                  }
                  alt="accordionBtn"
                />
                Вопросы покупки
              </div>
            }
            key="2"
            style={customPanelStyle}
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header={
              <div className={s.questions_accordion_button}>
                <img
                  src={
                    isPanelActive("3")
                      ? "/accordionMinusBtn.svg"
                      : "/accordionBtn.svg"
                  }
                  alt="accordionBtn"
                />
                Вопросы сервиса
              </div>
            }
            key="3"
            style={customPanelStyle}
          >
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default Questions;
