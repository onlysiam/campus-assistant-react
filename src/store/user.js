import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import { uploadPictureUrl } from "./urls";

const slice = createSlice({
  name: "user",
  initialState: {
    name: "",
    username: "",
    authenticated: false,
    uploading: false,
    lastFetch: null,
  },
  reducers: {
    userAdded: (users, action) => {},

    userLogout: (users, action) => {},

    uploadRequested: (users, action) => {
      users.uploading = true;
    },
    userDpAdded: (users, action) => {
      if (action.payload.url) users.profilepic = action.payload.url;
      users.uploading = false;
    },
    uploadRequestFailed: (users, action) => {
      users.uploading = false;
    },
  },
});

export const {
  uploadRequested,
  userDpAdded,
  uploadRequestFailed,
  userAdded,
  userRemoved,
  userLogout,
} = slice.actions;
export default slice.reducer;

export const uploadPicture = (file) =>
  apiCallBegan({
    url: uploadPictureUrl,
    method: "post",
    data: file,
    onStart: uploadRequested.type,
    onSuccess: userDpAdded.type,
    onError: uploadRequestFailed.type,
  });
