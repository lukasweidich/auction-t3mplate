import { SET_LANGUAGE } from "./types";
import { saveCookie } from "../src/utils/functions/cookieUtils";

export const setLanguage = ({ language }) => async (dispatch) => {
  dispatch({
    type: SET_LANGUAGE,
    payload: { language },
  });
  saveCookie({ key: "language", value: language });
};
