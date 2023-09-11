import { createSlice } from "@reduxjs/toolkit";

const orderListSlice = createSlice({
   name: "orderList",
   initialState: {
      lastOrderID: 0,
      orders: [],
   },
   redusers: {
      addOrder(state, {payload}) {
         const newID = state.lastOrderID + 1
         state = {
            lastOrderID: newID,
            orders: state.orders.push({...payload, ID: newID})
         }
      }
   }
})

export default orderListSlice.reducer
export const {addOrder} = orderListSlice.actions