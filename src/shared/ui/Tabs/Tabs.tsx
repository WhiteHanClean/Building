import React, { ReactNode } from "react";
import { Tabs } from "antd";
import { i18n } from "i18next";

interface CustomTabsProps {
  tabData: { key: string; title: string }[];
  contentData: { [key: string]: ReactNode[] };
  t: i18n["t"];
  i18n: i18n;
}

const CustomTabs: React.FC<CustomTabsProps> = ({
  tabData,
  contentData,
  t,
  i18n,
}) => {
  return (
    <Tabs
      defaultActiveKey="1"
      items={tabData.map((tab) => ({
        label: t(tab.title),
        key: tab.key,
        children: contentData[tab.key],
      }))}
    />
  );
};

export default CustomTabs;
