import { AddOrderButton } from "./AddOrderButton/AddOrderButton"
import { Order } from "./Order/Order"
import { OrderControl } from "./Order/OrderControl/OrderControl"
import { StyledOrderList } from "./StyledOrderList"

export const OrderList = ({children, ...props}) => {

   return (
      <StyledOrderList>
         <OrderControl/>
         <Order/>
         {children}
      </StyledOrderList>
   )
}