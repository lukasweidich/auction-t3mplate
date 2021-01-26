import {
  CREATE_TEMPLATE,
  SET_ITEM,
  SET_TEMPLATE_THEME,
} from "../actions/types";

const initialState = {};

const templateReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ITEM:
      return { ...state, ...payload };
    case SET_TEMPLATE_THEME:
      return { ...state, ...payload };
    case CREATE_TEMPLATE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default templateReducer;
