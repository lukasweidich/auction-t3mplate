import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { getLanguage } from "../../actions/applicationSettingsActions";
import { DEFAULT_LANGUAGE } from "../../src/utils/constants/applicationConstants";

const GetLanguageFromStore = ({ defaultLang = DEFAULT_LANGUAGE }) => {
  const applicationSettings = useSelector((state) => state.applicationSettings);
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const language =
    applicationSettings?.language ?? process.env.LANGUAGE ?? defaultLang;

  if (i18n.language !== language) {
    dispatch(getLanguage());
    i18n.changeLanguage(language);
  }

  return <></>;
};

export default GetLanguageFromStore;
