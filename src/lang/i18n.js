import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en";
import ru from "../locales/ru";
import uz from "../locales/uz"; 

i18n
  .use(initReactI18next)
  .init({
  resources: {
    en: { Header: en.Header },
    ru: { Header: ru.Header },
    uz: { Header: uz.Header },
  },
  lng: "uz",
  fallbackLng: "uz",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
