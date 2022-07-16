import { ADD_TO_LIST, DELETE_ITEM } from "../action/actions";

const initialState = [];

const addReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_LIST:
      return [...state, payload];

    case DELETE_ITEM:
      const tempState = state.filter((item) => payload !== item.id);
      return tempState;
    default:
      return state;
  }
};

export default addReducer;
