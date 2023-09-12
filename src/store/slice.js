import { createSlice } from "@reduxjs/toolkit";

const orderListSlice = createSlice({
   name: "orderList",
   initialState: {
      lastOrderID: 1,
      orders: [
         {
            ID: 1,
            carpets: [
               [1.6, 2.3],
               [2, 3],
               [3, 4]      
            ],
            orderArea: 20.7,
            orderPrice: 3255,
         }
      ],
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