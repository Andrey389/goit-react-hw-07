import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReduser } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "contact",
  storage,
};

const rootReducer = combineReducers({
  contacts: persistReducer(persistConfig, contactsReduser),
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
