import { SET_FAVOURITE } from "./Types";

export const setFavourite = (payload) => {
  return {
    type: SET_FAVOURITE,
    payload,
  };
};
