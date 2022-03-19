import { combineReducers } from "redux";
import preloaderReducer from "./preloader";

export default combineReducers({
  preloader: preloaderReducer,
});
