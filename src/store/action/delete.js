import { DELETE_ITEM } from "./actions";

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id,
  };
};
