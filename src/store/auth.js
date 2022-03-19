import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import { loginUrl, registerUrl, checkUserUrl } from "./urls";
import { userAdded } from "./user";

const slice = createSlice({
  name: "authentication",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    authRequested: (authentication, action) => {
      authentication.loading = true;
    },
    authReceived: (authentication, action) => {
      authentication.loading = false;
      authentication.lastFetch = Date.now();
    },

    authRequestFailed: (authentication, action) => {
      authentication.loading = false;
    },
    sessionAdded: (authentication, action) => {
      authentication.list.push(action.payload);
      authentication.loading = false;
    },
    sesssioneRemoved: (authentication, action) => {
      return authentication.list.filter(
        (course) => course.course_id !== action.payload
      );
    },

    logout: (authentication, action) => {},
  },
});

export const {
  authRequested,
  authRequestFailed,
  authReceived,
  userAvailability,
  userAvailabilityReset,
} = slice.actions;
export default slice.reducer;

//Action Creator

export const login = (username, password) =>
  apiCallBegan({
    url: loginUrl + "/" + username + "/" + password,
    method: "get",
    onStart: authRequested.type,
    onSuccess: userAdded.type,
    onError: authRequestFailed.type,
  });
export const register = (informations) =>
  apiCallBegan({
    url: registerUrl,
    method: "post",
    data: informations,
    onStart: authRequested.type,
    onSuccess: userAdded.type,
    onError: authRequestFailed.type,
  });
