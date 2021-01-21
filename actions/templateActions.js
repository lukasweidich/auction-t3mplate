import { SET_ITEM } from "./types";

export const setItem = ({ item }) => async (dispatch) => {
  dispatch({
    type: SET_ITEM,
    payload: { item },
  });
};
