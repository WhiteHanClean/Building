import React from "react"; 
import s from "./BackButton.module.scss"; 
import Image from "next/image"; 
import { useRouter } from "next/router"; 
 
const BackButton = () => { 
  const { back } = useRouter(); 
 
  function handleClick() { 
    back(); 
  } 
 
  return ( 
    <div className={s.backButton}> 
      <button onClick={handleClick}> 
        <Image 
          src={"/BackButton.svg"} 
          width={16} 
          height={16} 
          alt="arrow icon" 
        /> 
      </button> 
      <h3>Назад</h3> 
    </div> 
  ); 
}; 
 
export default BackButton;