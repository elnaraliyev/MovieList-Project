import { ACTION_TYPES } from "../actionTypes";
export const listsAction = (movie) => {
  return {
    type: ACTION_TYPES.GET_LIST,
    payload: movie,
  };
};
