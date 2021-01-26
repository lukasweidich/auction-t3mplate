import { TEMPLATE_THEME_COOKIE_NAME } from "../src/utils/constants/applicationConstants";
import { saveCookie } from "../src/utils/functions/cookieUtils";
import { CREATE_TEMPLATE, SET_ITEM, SET_TEMPLATE_THEME } from "./types";

export const setItem = ({ item }) => async (dispatch) => {
  dispatch({
    type: SET_ITEM,
    payload: { item },
  });
};

export const setTemplateTheme = ({ templateTheme }) => async (dispatch) => {
  dispatch({
    type: SET_TEMPLATE_THEME,
    payload: { templateTheme },
  });
  saveCookie({ key: TEMPLATE_THEME_COOKIE_NAME, value: templateTheme });
};

export const createTemplate = ({ templateHTML }) => async (dispatch) => {
  dispatch({
    type: CREATE_TEMPLATE,
    payload: { templateHTML },
  });
};
