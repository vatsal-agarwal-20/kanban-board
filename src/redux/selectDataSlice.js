import { createReducer, createAction} from "@reduxjs/toolkit";

const dsr = createAction('dataSelectRequest')
const dss = createAction('dataSelectSuccess')
const dsf = createAction('dataSelectFailure')
const initial = {};

export const dataSelectSlice = createReducer(
  initial, (builder) => 
  {
    builder
    .addCase(dsr, (state) => {
      state.loading = true;
      state.dataSelected = [];
    })
    .addCase(dss, (state,action) => {
      state.loading = false;
      state.dataSelected = action.payload.dataSelected;
      state.user = action.payload.user;
    })
    .addCase(dsf, (state, action) => {
      state.loading = false;
      state.dataSelected = [];
      state.message = action.payload.message;
    })
  }
);
