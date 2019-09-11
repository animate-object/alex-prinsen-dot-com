import { combineReducers } from "redux";
import { MaggieReducer } from "../maggie";
import { BlogReducer } from "../blog";

const defaultReducer = (state = {}, _action) => state;

export const rootReducer = combineReducers({
  default: defaultReducer,
  maggie: MaggieReducer,
  blog: BlogReducer
});
