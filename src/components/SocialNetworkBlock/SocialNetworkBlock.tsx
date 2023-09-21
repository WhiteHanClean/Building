import React from "react";
import style from "./SocialNetworkBlock.module.scss";

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
            <img src="tabler_arrow-up.png" alt="arrow" width={17} height={16} />
          </div>
        </button>
      </div>

      <div className={style.photoBlock}>
        <img
          className={style.photo1}
          src="SocialNetworkBlock1.png"
          alt="SocialNetworkBlock1"
        />
        <img
          className={style.photo2}
          src="SocialNetworkBlock2.png"
          alt="SocialNetworkBlock2"
        />
        <img
          className={style.photo3}
          src="SocialNetworkBlock3.png"
          alt="SocialNetworkBlock3"
        />
      </div>
    </div>
  );
};

export default SocialNetworkBlock;
