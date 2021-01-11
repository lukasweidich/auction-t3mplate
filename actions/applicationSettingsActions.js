import { SET_LANGUAGE, SET_LISTING_ID_KNOWN, SET_SITE_ID } from "./types";
import { saveCookie } from "../src/utils/functions/cookieUtils";
import { getFlagIconIdFromLanguage } from "../src/utils/functions/languageUtils";
import {
  IS_LISTING_ID_KNOWN_COOKIE_NAME,
  LANGUAGE_COOKIE_NAME,
  SITE_ID_COOKIE_NAME,
} from "../src/utils/constants/applicationConstants";

export const setLanguage = ({ language }) => async (dispatch) => {
  dispatch({
    type: SET_LANGUAGE,
    payload: { language, flagId: getFlagIconIdFromLanguage(language) },
  });
  saveCookie({ key: LANGUAGE_COOKIE_NAME, value: language });
};

export const setSiteId = ({ siteId }) => async (dispatch) => {
  dispatch({
    type: SET_SITE_ID,
    payload: { siteId },
  });
  saveCookie({ key: SITE_ID_COOKIE_NAME, value: siteId });
};
