import React from "react";
import s from "./Benefits.module.scss";
import Image from "next/image";
// import { motion } from "framer-motion";

const Benefits = () => {
  return (
    <section className={s.section}>
      {/* first section */}

      <div className={s.section_item_1}>
        <div className={s.section_item_1_title}>
          <h3>Выгодное сотрудничество</h3>
        </div>
        <div className={s.section_item_1_description}>
          <p>
            Наши специалисты помогут с продажей вашей недвижимости или
            земельного участка, а также предоставят возможность вам сдавать в
            аренду свою недвижимость с доходностью 6-10% годовых.
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
                src={"/listing_benefits_checked-mark_icon.png"}
                width={16}
                height={16}
                alt="logo"
              ></Image>
            </div>
            <p>Эффективно</p>
          </div>
          <div className={s.section_item_2_benefits_text}>
            <p>
              Мы обеспечиваем стабильный доход 6-10% годовых, профессионально
              и ответственно управляя вашей недвижимостью.
            </p>
          </div>
        </div>

        {/* benefits topic  */}

        <div className={s.section_item_2_benefits}>
          <div className={s.section_item_2_benefits_label}>
            <div className={s.section_item_2_benefits_label_icon}>
              <Image
                src={"/listing_benefits_checked-mark_icon.png"}
                width={16}
                height={16}
                alt="logo"
              ></Image>
            </div>
            <p>Выгодно</p>
          </div>
          <div className={s.section_item_2_benefits_text}>
            <p>
              Наши эксклюзивные предложения позволяют максимизировать ваши
              инвестиции и обеспечивают высокую доходность.
            </p>
          </div>
        </div>

        {/* care free topic  */}

        <div className={s.section_item_2_benefits}>
          <div className={s.section_item_2_benefits_label}>
            <div className={s.section_item_2_benefits_label_icon}>
              <Image
                src={"/listing_benefits_checked-mark_icon.png"}
                width={16}
                height={16}
                alt="logo"
              ></Image>
            </div>
            <p>Беззаботно</p>
          </div>
          <div className={s.section_item_2_benefits_text}>
            <p>
              Доверьте нам все аспекты управления и сдачи в аренду, позволив
              себе наслаждаться выгодами инвестиций без хлопот.
            </p>
          </div>
        </div>

        {/* light and reliable topic  */}

        <div className={s.section_item_2_benefits}>
          <div className={s.section_item_2_benefits_label}>
            <div className={s.section_item_2_benefits_label_icon}>
              <Image
                src={"/listing_benefits_checked-mark_icon.png"}
                width={16}
                height={16}
                alt="logo"
              ></Image>
            </div>
            <p>Легко и надежно</p>
          </div>
          <div className={s.section_item_2_benefits_text}>
            <p>
              Зарабатывайте на своей недвижимости с минимальными усилиями
              и максимальной уверенностью в успехе.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
