import { SET_COUNTER } from "./Types";

export const setCounter = (payload) => {
  return {
    type: SET_COUNTER,
    payload,
  };
};
