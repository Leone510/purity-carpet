import { WidthWraper } from "../WidthWraper/WidthWraper"
import { StyledOrderList, StyledOrderPage } from "./StyledOrderPage.js"
import { OrderList } from "./OrderList/OrderList"

export const OrdersPage = () => {

   return (
      <StyledOrderPage>
         <WidthWraper>
            <OrderList/>
         </WidthWraper>
      </StyledOrderPage>
   )
}