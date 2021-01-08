import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import de from "./src/locales/de/translation.json";
import en from "./src/locales/en/translation.json";

const resources = {
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
