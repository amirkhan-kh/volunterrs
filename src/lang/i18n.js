import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en";
import ru from "../locales/ru";
import uz from "../locales/uz";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
      ru,
      uz,
    },
    lng: "uz",
    fallbackLng: "uz",
    ns:
      ["Header",
        "Intro",
        "HomeSection2",
        "HomeNewsLang",
        "HomeVolandOrgLang",
        "HomeActiveVolunterrLang",
        "HomeContactLang",
        "DonationLang",
        "AboutPageLang",
        "EventsPageLang",
        "AboutHistoryLang",
        "WhatVoluneersLang",
        "FooterLang",
      ],
    defaultNS: "Header",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
