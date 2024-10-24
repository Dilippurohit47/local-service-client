import { combineReducers } from "redux";
import userReducer  from "./reducers/UserReducer";

const rootReducer = combineReducers({
  userReducer: userReducer,
});

export default rootReducer;
