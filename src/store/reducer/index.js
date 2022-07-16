import { combineReducers } from "redux";
import addReducer from "./reducer";

const rootReducer = combineReducers({
  add: addReducer,
});

export default rootReducer;
