import { SET_LANGUAGE, SET_SITE_ID } from "../actions/types";

const initialState = {};

const applicationSettingsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
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
    default:
      return state;
  }
};

export default applicationSettingsReducer;
