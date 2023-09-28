import React, { ReactNode } from 'react';
import { Tabs } from 'antd';

interface CustomTabsProps {
  tabData: { key: string; title: string }[];
  contentData: { [key: string]: ReactNode[] };
}

const CustomTabs: React.FC<CustomTabsProps> = ({ tabData, contentData }) => (
  <Tabs
  defaultActiveKey="1"
  items={tabData.map((tab) => ({
    label: tab.title,
    key: tab.key,
    children: contentData[tab.key],
  }))}
/>
);

export default CustomTabs;





