import { configureStore } from "@reduxjs/toolkit";
import { contactsReduser } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
// import persistReducer from "redux-persist/es/persistReducer";
// import persistStore from "redux-persist/es/persistStore";
// import storage from "redux-persist/lib/storage";

const myMiddleware1 = (store) => (next) => (action) => {
  // console.log("myMiddleware1", action, store);
  next(action);
};

const myMiddleware2 = (store) => (next) => (action) => {
  // console.log("myMiddleware2", action, store);
  next(action);
};

const gaMiddleware = (store) => (next) => (action) => {
  if (action.meta?.ga) {
    console.log("send");
    // GA.send(action)
  }

  next(action);
};

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return [
      ...getDefaultMiddleware(),
      myMiddleware1,
      myMiddleware2,
      gaMiddleware,
    ];
  },
});

// const persistConfig = {
//   key: "contact",
//   storage,
// };

// const rootReducer = combineReducers({
//   contacts: persistReducer(persistConfig, contactsReduser),
//   filters: filtersReducer,
// });

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

// export const persistor = persistStore(store);
