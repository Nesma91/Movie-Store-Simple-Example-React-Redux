import { SET_REDUCE } from "./Types";

export const setReducer = (payload) => {
  return {
    type: SET_REDUCE,
    payload,
  };
};
