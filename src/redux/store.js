import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./index.js";
import profileReducer from "./setprofil.js";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"], 
};

const profilePersistConfig = {
  key: "profile",
  storage,
  whitelist: ["profile"], 
};

const mainStore = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    profile: persistReducer(profilePersistConfig, profileReducer),
  },
});

const persistor = persistStore(mainStore);

export { mainStore, persistor };
