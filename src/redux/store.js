// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./index.js";
import profileReducer from "./setprofil.js";

const mainStore = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
  },
});

export default mainStore;
