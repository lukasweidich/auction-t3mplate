import { SET_ITEM } from "../actions/types";

const initialState = {};

const templateReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ITEM:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default templateReducer;
