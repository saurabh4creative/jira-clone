import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import { userReducer } from "./reducers/user/userSlice";

const persistConfig = {
     key: "user",
     storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
     reducer: {
          user: persistedUserReducer,
     },
     middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware({
               serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
               },
          }),
});