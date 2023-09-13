import { useDispatch, useSelector } from "react-redux"
import { Order } from "./Order/Order"
import { OrdersControl } from "./OrdersControl/OrdersControl"
import { StyledOrderList } from "./StyledOrderList"
import { Carpet } from "./Carpet/Carpet"
import { useOrderTools } from "../../../tools/useOrderTools"
import { RemoveOrderButton } from "./Order/RemoveOrderButton/RemoveOrderButton"
import { PiTrash } from "react-icons/pi";

export const OrderList = ({children, ...props}) => {
   const orders = useSelector(store => store.orderList.orders);
   const {fullOrdersData} = useOrderTools();
   const ordersData = fullOrdersData(orders);

   return (
      <StyledOrderList>
         <OrdersControl/>
         {ordersData.map((order, index) => {
            return (
               <Order key={order.ID}>
                  <div className="quantity">
                     {order.quantity}
                  </div>
                  <div className="carpetsList">
                     {order.carpets.map((carpet, index) => {
                        return (
                           <Carpet key={new Date().getTime() + index} >
                              <div className="carpetsInfo">
                                 {`Width: ${carpet.size[0]}, Length: ${carpet.area}, Area: ${carpet.area}, price${carpet.price}`}
                              </div>
                              <div className="carpetsButtons">
                                 R
                              </div>
                           </Carpet>
                        )
                     })}
                  </div>
                  <div className="orderTotalArea">
                     {order.totalArea}
                  </div>
                  <div className="totalOrderPrice">
                     {order.totalPrice}
                  </div>
                  <RemoveOrderButton orderID={index}>
                     <PiTrash/>
                  </RemoveOrderButton>
               </Order>
            )
         })}
         {/* {orders.map(order => {
            return (
               <Order>
                  <div className="quantity">
                     {order.carpets.length}
                  </div>
                  <div className="carpetsList">
                     {order.carpets.map(carpet => {
                        return (
                           <Carpet>
                              {`width: ${carpet[0]}, length: ${carpet[1]}`}
                           </Carpet>
                        )
                     })}
                  </div>
                  <div className="orderTotalArea">
                     {order.orderArea}
                  </div>
                  <div className="totalOrderPrice">
                     {order.orderPrice}
                  </div>
               </Order>
            )
         })} */}
      </StyledOrderList>
   )
}