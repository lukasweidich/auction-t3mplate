import {
  GET_LANGUAGE,
  LOAD_APPLICATION_SETTINGS,
  SET_ITEM_ID,
  SET_ITEM_ID_KNOWN,
  SET_LANGUAGE,
  SET_SELLER,
  SET_SELLER_ITEMS,
  SET_SITE_ID,
} from "./types";
import { saveCookie } from "../src/utils/functions/cookieUtils";
import { getFlagIconIdFromLanguage } from "../src/utils/functions/languageUtils";
import {
  LANGUAGE_COOKIE_NAME,
  SITE_ID_COOKIE_NAME,
  ITEM_ID_KNOWN_COOKIE_NAME,
  SELLER_COOKIE_NAME,
} from "../src/utils/constants/applicationConstants";

export const getLanguage = () => async (dispatch) => {
  dispatch({
    type: GET_LANGUAGE,
  });
};

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

export const setItemIdIsKnown = ({ itemIdIsKnown }) => async (dispatch) => {
  dispatch({
    type: SET_ITEM_ID_KNOWN,
    payload: { itemIdIsKnown },
  });
  saveCookie({ key: ITEM_ID_KNOWN_COOKIE_NAME, value: itemIdIsKnown });
};

export const setItemId = ({ itemId }) => async (dispatch) => {
  dispatch({
    type: SET_ITEM_ID,
    payload: { itemId },
  });
};

export const setSeller = ({ seller }) => async (dispatch) => {
  dispatch({
    type: SET_SELLER,
    payload: { seller },
  });
  saveCookie({ key: SELLER_COOKIE_NAME, value: seller });
};

export const setSellerItems = ({ sellerItems }) => async (dispatch) => {
  dispatch({
    type: SET_SELLER_ITEMS,
    payload: { sellerItems },
  });
};

export const loadApplicationSettings = () => async (dispatch) => {
  dispatch({
    type: LOAD_APPLICATION_SETTINGS,
  });
};
