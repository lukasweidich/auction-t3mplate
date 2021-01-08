import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const AutoSelectLanguageFromCookies = ({ locale }) => {
  const applicationSettings = useSelector((state) => state.applicationSettings);

  const { i18n } = useTranslation();
  const language = applicationSettings?.language ?? locale;
  if (i18n.language !== language) i18n.changeLanguage(language);

  return <></>;
};

export default AutoSelectLanguageFromCookies;
