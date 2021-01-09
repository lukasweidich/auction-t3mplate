import i18n from "i18next";
import BrowserLanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import de404 from "./src/locales/de/404.json";
import deCommon from "./src/locales/de/common.json";
import deFaq from "./src/locales/de/faq.json";
import deGenerator from "./src/locales/de/generator.json";
import deImprint from "./src/locales/de/imprint.json";
import deIndex from "./src/locales/de/index.json";
import dePrivacy from "./src/locales/de/privacy.json";

import en404 from "./src/locales/en/404.json";
import enCommon from "./src/locales/en/common.json";
import enFaq from "./src/locales/en/faq.json";
import enGenerator from "./src/locales/en/generator.json";
import enImprint from "./src/locales/en/imprint.json";
import enIndex from "./src/locales/en/index.json";
import enPrivacy from "./src/locales/en/privacy.json";

import { DEFAULT_LANGUAGE } from "./src/utils/constants/applicationConstants";

const resources = {
  en: {
    translation: enCommon,
    404: en404,
    faq: enFaq,
    generator: enGenerator,
    imprint: enImprint,
    index: enIndex,
    privacy: enPrivacy,
  },
  de: {
    translation: deCommon,
    404: de404,
    faq: deFaq,
    generator: deGenerator,
    imprint: deImprint,
    index: deIndex,
    privacy: dePrivacy,
  },
};

i18n
  .use(HttpBackend)
  .use(BrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: DEFAULT_LANGUAGE,
    lng: DEFAULT_LANGUAGE,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
