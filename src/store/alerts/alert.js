import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "alert",
  initialState: {
    type: "",
    message: "",
    state: false,
  },
  reducers: {
    alertToggleTrue: (alert, action) => {
      if (action.payload) {
        alert.type = action.payload.type;
        alert.message = action.payload.message;
      }
      alert.state = true;
    },
    alertToggleFalse: (alert, action) => {
      if (action.payload) {
        alert.type = action.payload.type;
        alert.message = action.payload.message;
      }
      alert.state = false;
    },
  },
});

export const { alertToggleTrue, alertToggleFalse } = slice.actions;
export default slice.reducer;
