import React from "react";
import s from "./Benefits.module.scss";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
// import { motion } from "framer-motion";

const Benefits = () => {
  const { t } = useTranslation();

  return (
    <section className={s.section}>
      {/* first section */}

      <div className={s.section_item_1}>
        <div className={s.section_item_1_title}>
          <h3>{t('accommodation.benefits.title')}</h3>
        </div>
        <div className={s.section_item_1_description}>
          <p>
          {t('accommodation.benefits.description')}
          </p>
        </div>
      </div>

      {/* second section */}

      <div className={s.section_item_2}>
        {/* effectiv topic  */}

        <div className={s.section_item_2_benefits}>
          <div className={s.section_item_2_benefits_label}>
            <div className={s.section_item_2_benefits_label_icon}>
              <Image
                src={"/listing_benefits_checked-mark_icon.svg"}
                width={16}
                height={16}
                alt="logo"
              ></Image>
            </div>
            <p>{t('accommodation.benefits.effectively')}</p>
          </div>
          <div className={s.section_item_2_benefits_text}>
            <p>
            {t('accommodation.benefits.efficielyDescription')}
            </p>
          </div>
        </div>

        {/* benefits topic  */}

        <div className={s.section_item_2_benefits}>
          <div className={s.section_item_2_benefits_label}>
            <div className={s.section_item_2_benefits_label_icon}>
              <Image
                src={"/listing_benefits_checked-mark_icon.svg"}
                width={16}
                height={16}
                alt="logo"
              ></Image>
            </div>
            <p>{t('accommodation.benefits.profitably')}</p>
          </div>
          <div className={s.section_item_2_benefits_text}>
            <p>
            {t('accommodation.benefits.profitablyDescription')}
            </p>
          </div>
        </div>

        {/* care free topic  */}

        <div className={s.section_item_2_benefits}>
          <div className={s.section_item_2_benefits_label}>
            <div className={s.section_item_2_benefits_label_icon}>
              <Image
                src={"/listing_benefits_checked-mark_icon.svg"}
                width={16}
                height={16}
                alt="logo"
              ></Image>
            </div>
            <p> {t('accommodation.benefits.carefree')}</p>
          </div>
          <div className={s.section_item_2_benefits_text}>
            <p>
            {t('accommodation.benefits.carefreeDescription')}
            </p>
          </div>
        </div>

        {/* light and reliable topic  */}

        <div className={s.section_item_2_benefits}>
          <div className={s.section_item_2_benefits_label}>
            <div className={s.section_item_2_benefits_label_icon}>
              <Image
                src={"/listing_benefits_checked-mark_icon.svg"}
                width={16}
                height={16}
                alt="logo"
              ></Image>
            </div>
            <p>{t('accommodation.benefits.easy')}</p>
          </div>
          <div className={s.section_item_2_benefits_text}>
            <p>
            {t('accommodation.benefits.easyDescription')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
