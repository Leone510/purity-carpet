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
         }
      ],
   },

   reducers: {
      addOrder(state, {payload}) {
         const newID = state.lastOrderID + 1
         state = {
            lastOrderID: newID,
            orders: state.orders.push({...payload, ID: newID})
         }
      },

      removeOrder(state, {payload}) {
         state.orders.splice(payload, 1);
      }
   }
})

export default orderListSlice.reducer
export const {addOrder, removeOrder} = orderListSlice.actions