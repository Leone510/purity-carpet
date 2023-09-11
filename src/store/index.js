import { combineReducers, configureStore } from "@reduxjs/toolkit";
import orderListSlice from "./slice";

const rootReducer = combineReducers({
   orderList: orderListSlice,
})

export const store = configureStore({
   reducer: rootReducer,
})