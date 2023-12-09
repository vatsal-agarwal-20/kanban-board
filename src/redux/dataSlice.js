import {createReducer, createAction} from '@reduxjs/toolkit'

const dr = createAction('dataRequest')
const ds = createAction('dataSuccess')
const df = createAction('dataFailure')
const initial = {};

export const dataSlice = createReducer(
  initial, (builder) => 
  {
    builder
    .addCase(dr, (state) => {
      state.loading = true;
    })
    .addCase(ds, (state,action) => {
      state.loading = false;
      state.tickets = action.payload.tickets;
      state.users = action.payload.users;
    })
    .addCase(df, (state) => {
      state.loading = false;
      state.tickets = [];
      state.users = [];
    })
  }
);
