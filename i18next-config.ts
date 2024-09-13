import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: "en", // Default language
    fallbackLng: "en",
    resources: {
      en: {
        common: require("./pages/i18n/locales/en/common.json"),
      },
      ko: {
        common: require("./pages/i18n/locales/ko/common.json"),
      },
    },
  });

export default i18n;
