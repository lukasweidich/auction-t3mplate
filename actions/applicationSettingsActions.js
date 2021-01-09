import { SET_LANGUAGE } from "./types";
import { saveCookie } from "../src/utils/functions/cookieUtils";
import { getFlagIconIdFromLanguage } from "../src/utils/functions/languageUtils";

export const setLanguage = ({ language }) => async (dispatch) => {
  dispatch({
    type: SET_LANGUAGE,
    payload: { language, flagId: getFlagIconIdFromLanguage(language) },
  });
  saveCookie({ key: "language", value: language });
};
