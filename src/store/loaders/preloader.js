import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "preloader",
  initialState: [],
  reducers: {
    preloader: (preloader, action) => {
      preloader.push({
        id: ++lastId,
        state: false,
      });
    },
    preloaderToggleTrue: (togglepreloader, action) => {
      togglepreloader[0].state = true;
    },
    preloaderToggleFalse: (togglepreloader, action) => {
      togglepreloader[0].state = false;
    },
  },
});

export const { preloader, preloaderToggleTrue, preloaderToggleFalse } =
  slice.actions;
export default slice.reducer;
