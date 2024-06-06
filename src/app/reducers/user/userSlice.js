import { constantToken } from "@constants/constantToken";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     info  : null,
     token : null,
     isAuthenticated: false,
};

const userSlice = createSlice({
     name: "user",
     initialState,
     reducers: {
          login: (state, action) => {
               state.info  = action.payload.user;
               state.token = action.payload.token;
               state.isAuthenticated = true;
               localStorage.setItem(constantToken, state.token);
          },
          logout: () => {
               localStorage.removeItem(constantToken);
               return initialState;
          },
     },
});

export const { login, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;