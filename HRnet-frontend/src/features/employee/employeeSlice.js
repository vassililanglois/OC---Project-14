import { createSlice } from "@reduxjs/toolkit";
import { mockData } from "../../mock/mockData";

const initialState = {
  list: mockData,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.list.push(action.payload);
    },
    // Optionnel : pour réinitialiser la liste
    resetEmployees: (state) => {
      state.list = [];
    },
  },
});

export const { addEmployee, resetEmployees } = employeeSlice.actions;
export default employeeSlice.reducer;
