import { combineReducers } from "redux";
import userReducer from "./user";
import authReducer from "./auth";

const appReducer = combineReducers({
  user: userReducer,
  userAuthentication: authReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "users/userLogout") {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
