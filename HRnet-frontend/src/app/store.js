import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../features/modal/modalSlice";
import formReducer from "../features/form/formSlice";
import employeeReducer from "../features/employee/employeeSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    form: formReducer,
    employee: employeeReducer,
  },
});
