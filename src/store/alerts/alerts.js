import { combineReducers } from "redux";
import alertsReducer from "./alert";

export default combineReducers({
  alert: alertsReducer,
});
