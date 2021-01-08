import { SET_LANGUAGE } from "../actions/types";

const initialState = {};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LANGUAGE:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default authReducer;
