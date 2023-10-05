import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import englng from "./en.json";
import ruslng from "./ru.json";

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: ruslng,
    },
    en: {
      translation: englng,
    },
  },
  lng: "en", // Установите язык по умолчанию
  fallbackLng: "en", // Язык, который будет использоваться, если текущий язык не найден
  interpolation: {
    escapeValue: false, // Отключите экранирование
  },
});

export default i18n;
