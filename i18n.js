import i18n from "i18next";
import BrowserLanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import de404 from "./src/locales/de/404.json";
import deAbout from "./src/locales/de/about.json";
import deCommon from "./src/locales/de/common.json";
import deFaq from "./src/locales/de/faq.json";
import deEditor from "./src/locales/de/editor.json";
import deImprint from "./src/locales/de/imprint.json";
import deIndex from "./src/locales/de/index.json";
import dePrivacy from "./src/locales/de/privacy.json";
import deCookies from "./src/locales/de/cookies.json";

import en404 from "./src/locales/en/404.json";
import enAbout from "./src/locales/en/about.json";
import enCommon from "./src/locales/en/common.json";
import enFaq from "./src/locales/en/faq.json";
import enEditor from "./src/locales/en/editor.json";
import enImprint from "./src/locales/en/imprint.json";
import enIndex from "./src/locales/en/index.json";
import enPrivacy from "./src/locales/en/privacy.json";
import enCookies from "./src/locales/en/cookies.json";

import { DEFAULT_LANGUAGE } from "./src/utils/constants/applicationConstants";

const resources = {
  en: {
    translation: enCommon,
    404: en404,
    about: enAbout,
    faq: enFaq,
    editor: enEditor,
    imprint: enImprint,
    index: enIndex,
    privacy: enPrivacy,
    cookies: enCookies,
  },
  de: {
    translation: deCommon,
    404: de404,
    about: deAbout,
    faq: deFaq,
    editor: deEditor,
    imprint: deImprint,
    index: deIndex,
    privacy: dePrivacy,
    cookies: deCookies,
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
