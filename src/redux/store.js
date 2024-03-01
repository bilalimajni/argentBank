import { configureStore } from "@reduxjs/toolkit";
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
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
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

const persistor = persistStore(mainStore);

export { mainStore, persistor };