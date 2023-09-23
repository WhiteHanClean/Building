import React, { ReactNode } from "react";
import { Tabs } from "antd";
import s from "./Tabs.module.scss"; // Импортируем модульный стиль
const { TabPane } = Tabs;
import { ConfigProvider } from "antd";
import CustomSelect from "../Select/Select";

interface CustomTabsProps {
  tabData: { key: string; title: string }[];
  contentData: { [key: string]: ReactNode[] }; // Объект с ключами-идентификаторами табов и массивами элементов
}

const CustomTabs: React.FC<CustomTabsProps> = ({ tabData, contentData }) => {

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "black",
          fontSize: 18,
          
        },
      }}
    >
      <Tabs className={s.customTabs}>
        {tabData.map((tab) => (
          <TabPane
            className={s.tabs_title}
            tab={tab.title}
            key={tab.key}
          >
            
          </TabPane>
        ))}
      </Tabs>
    </ConfigProvider>
  );
};

export default CustomTabs;
