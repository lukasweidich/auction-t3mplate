import { DEFAULT_LANGUAGE } from "../constants/applicationConstants";

export const getFlagIconIdFromLanguage = (language) => {
  switch (language) {
    case "en":
      return "gb";
    case null:
      return getFlagIconIdFromLanguage(DEFAULT_LANGUAGE);
    default:
      return language;
  }
};
