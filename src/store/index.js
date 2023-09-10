import { combineReducers, createStore } from "redux";
import { orderListReduser } from "./orderList/orderListReduser";

const rootReduser = combineReducers({
   orderList: orderListReduser,
})

export const store = createStore(rootReduser);