import { useSelector } from "react-redux"
import { Order } from "./Order/Order"
import { OrderControl } from "./Order/OrderControl/OrderControl"
import { StyledOrderList } from "./StyledOrderList"
import { Carpet } from "./Carpet.jsx/Carpet"

export const OrderList = ({children, ...props}) => {
   const orders = useSelector(store => store.orderList.orders);

   return (
      <StyledOrderList>
         <OrderControl/>
         {orders.map(order => {
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
         })}
      </StyledOrderList>
   )
}