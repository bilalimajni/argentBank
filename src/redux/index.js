import { configureStore, createSlice } from "@reduxjs/toolkit";

// Définition du slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: !!localStorage.getItem("token"),
    token: localStorage.getItem("token") || null,
  },
  reducers: {
    setAuth: (state, action) => {
      const { token } = action.payload;
      localStorage.setItem("token", token);
      state.isAuthenticated = true;
      state.token = token;
    },
    clearAuth: (state) => {
      localStorage.removeItem("token");
      state.isAuthenticated = false;
      state.token = null;
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;

export const mainStore = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});



export default mainStore;
