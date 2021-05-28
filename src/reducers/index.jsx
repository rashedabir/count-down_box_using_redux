import { combineReducers } from "redux";
import countReducer from "./countReducer";

const reducer = combineReducers({
  countReducer: countReducer,
});

export default reducer;
