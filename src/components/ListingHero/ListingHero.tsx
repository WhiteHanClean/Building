import ListingFormHero from "../ListingFormHero/ListingFormHero";
import s from "./ListingHero.module.scss";
import Image from "next/image";

const ListingHero = () => {
  return (
    <section className={s.ListingHero_content}>
      <div className={s.ListingHero_wrapper_title}>
        <h1 className={s.ListingHero_content_title}>
          Разместите вашу недвижимость на Property Library Phuket
        </h1>
      </div>

      <div className={s.ListingHero_description}>
        <p className={s.ListingHero_description_title}>
          Разместите свой объект с нами и откройте двери к быстрой и выгодной
          продаже. Наш опыт и широкая клиентская база гарантируют успех. Примите
          правильное решение с Property Library Phuket.
        </p>
      </div>

      <div className={s.ListingHero_application}>
        <ListingFormHero />
      </div>
    </section>
  );
};

export default ListingHero;
