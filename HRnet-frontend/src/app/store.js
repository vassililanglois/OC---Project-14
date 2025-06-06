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

// Reducers
import modalReducer from "../features/modal/modalSlice";
import formReducer from "../features/form/formSlice";
import employeeReducer from "../features/employee/employeeSlice";

const employeePersistConfig = {
  key: "employee",
  storage,
};

const persistedEmployeeReducer = persistReducer(
  employeePersistConfig,
  employeeReducer
);

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    form: formReducer,
    employee: persistedEmployeeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore les actions redux-persist qui contiennent des fonctions
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
