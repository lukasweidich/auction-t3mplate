import { DEFAULT_FLAG_ID } from "../constants/applicationConstants";

export const getFlagIconIdFromLanguage = (language) => {
  switch (language) {
    case "en":
      return "gb";
    case null:
      return DEFAULT_FLAG_ID;
    default:
      return language;
  }
};
