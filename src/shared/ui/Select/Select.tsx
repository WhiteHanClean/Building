import React from "react";
import { Select } from "antd";
import s from './Select.module.scss'

const { Option } = Select;

const CustomSelect: React.FC = () => {

  // Обработчик изменения значения в Select
  const handleChange = (value: string) => {
    console.log(`Selected: ${value}`);
  };

  return (
    <div className={s.custom_select_container}>
      <Select
        defaultValue="Option 1"
        style={{ width: 200 }}
        onChange={handleChange}
      >
        <Option value="Option 1">Option 1</Option>
        <Option value="Option 2">Option 2</Option>
        <Option value="Option 3">Option 3</Option>
      </Select>
    </div>
  );
};

export default CustomSelect;
