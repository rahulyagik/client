import { ADD_TO_LIST } from "./actions";

export const addToList = (value) => {
  return {
    type: ADD_TO_LIST,
    payload: value,
  };
};
