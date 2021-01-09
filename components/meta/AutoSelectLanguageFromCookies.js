import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../actions/applicationSettingsActions";

const AutoSelectLanguageFromCookies = ({ locale }) => {
  const applicationSettings = useSelector((state) => state.applicationSettings);
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const language = applicationSettings?.language ?? locale;

  if (i18n.language !== language) {
    i18n.changeLanguage(language);
    dispatch(setLanguage({ language }));
  }

  return <></>;
};

export default AutoSelectLanguageFromCookies;
