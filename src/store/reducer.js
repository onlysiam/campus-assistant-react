import { combineReducers } from "redux";
import entitiesReducer from "./entities";
import loaderReducer from "./loaders/loader";
import alertsReducer from "./alerts/alerts";

export default combineReducers({
  entities: entitiesReducer,
  loader: loaderReducer,
  alerts: alertsReducer,
});
