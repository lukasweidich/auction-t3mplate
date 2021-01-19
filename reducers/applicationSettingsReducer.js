import {
  GET_LANGUAGE,
  LOAD_APPLICATION_SETTINGS,
  SET_ITEM_ID_KNOWN,
  SET_LANGUAGE,
  SET_SITE_ID,
  SET_ITEM,
  SET_SELLER,
  SET_ITEM_ID,
} from "../actions/types";

const initialState = {};

const applicationSettingsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LANGUAGE:
      return { ...state };
    case SET_LANGUAGE:
      return {
        ...state,
        ...payload,
      };
    case SET_SITE_ID:
      return {
        ...state,
        ...payload,
      };
    case SET_ITEM_ID_KNOWN:
      return {
        ...state,
        ...payload,
      };
    case SET_ITEM_ID:
      return {
        ...state,
        ...payload,
      };
    case SET_SELLER:
      return {
        ...state,
        ...payload,
      };
    case LOAD_APPLICATION_SETTINGS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default applicationSettingsReducer;
