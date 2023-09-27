import React, { useState } from "react";
import { Select } from "antd";
import s from './Select.module.scss'
import Image from "next/image";

const { Option } = Select;

interface CustomSelectProps {
  options: string[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  onBlur?:React.FocusEventHandler<HTMLElement>;
  value:string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({options, defaultValue, onChange, onBlur, value}) => {
  const [isOpen, setIsOpen] = useState(false);
  // Обработчик изменения значения в Select
  const handleChange = (value: string) => {
    console.log(`Selected: ${value}`);
    if (onChange) {
      onChange(value);
    }
  };
  const handleDropdownVisibleChange = (open: boolean) => {
    setIsOpen(open);
  };

  const arrowStyle = isOpen ? { transform: 'rotate(180deg)' } : {};


  return (
    <div className={s.custom_select_container}>
      <Select
       className={s.customSelect}
       value={value || defaultValue} 
        onChange={handleChange}
        onBlur={onBlur}
        onDropdownVisibleChange={handleDropdownVisibleChange}
        suffixIcon={ <Image
          src={"/evaArrowUpFill1.png"}
          width={8}
          height={6}
          alt="arrow"
          style={arrowStyle}
        ></Image>} 
      >
        {options.map((option, index) => (
          <Option key={index} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default CustomSelect;