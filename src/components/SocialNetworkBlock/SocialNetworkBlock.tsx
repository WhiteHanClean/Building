import React from "react";
import style from "./SocialNetworkBlock.module.scss";
import Image from "next/image";

const SocialNetworkBlock = () => {
  return (
    <div className={style.blockContainer}>
      <div className={style.infoBlock}>
        <div className={style.textContent}>
          <h1>Наш блог в Instagram</h1>
          <p>
            Подпишитесь на нас в Instagram, <br />
            чтобы узнавать первыми обо всех новостях, новых объектах и выгодных
            предложениях.
          </p>
        </div>

        <button className={style.btnToInstagram} onClick={() =>window.open('https://www.instagram.com/', '_blank')}>
          <div className={style.btnContent}>
            <p>Перейти</p>
            <Image src="/tabler_arrow-up.png" width={17} height={16} alt="arrow" />
          </div>
        </button>
      </div>

      <div className={style.photoBlock}>
        <Image
          className={style.photo1}
          src="/Image.png"
          width={190}
          height={190}
          alt="/Image"
        />
        <Image
          className={style.photo2}
          src="/SocialNetworkBlock2.png"
            width={190}
          height={190}
          alt="SocialNetworkBlock2"
        />
        <Image
          className={style.photo3}
          src="/SocialNetworkBlock3.png"
            width={400}
          height={400}
          alt="SocialNetworkBlock3"
        />
      </div>
    </div>
  );
};

export default SocialNetworkBlock;
