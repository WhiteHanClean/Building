import ListingFormHero from "../ListingFormHero/ListingFormHero";
import s from "./ListingHero.module.scss";
import Image from "next/image";
import { useTranslation } from "react-i18next";
const ListingHero = () => {
  const { t } = useTranslation();
  return (
    <section className={s.ListingHero_content}>
      <div className={s.ListingHero_wrapper_title}>
        <h1 className={s.ListingHero_content_title}>
          {t("accommodation.listingHero.title")}
        </h1>
      </div>

      <div className={s.ListingHero_description}>
        <p className={s.ListingHero_description_title}>
          {t("accommodation.listingHero.description")}
        </p>
      </div>

      <div className={s.ListingHero_application}>
        <ListingFormHero />
      </div>
    </section>
  );
};

export default ListingHero;
