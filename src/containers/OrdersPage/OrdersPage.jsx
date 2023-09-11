import { WidthWrapper } from "../WidthWrapper/WidthWrapper"
import { StyledOrderList, StyledOrderPage } from "./StyledOrderPage.js"
import { OrderList } from "./OrderList/OrderList"
import { Header } from "../Header/Header"

export const OrdersPage = () => {

   return (
      <StyledOrderPage>
            <Header/>
         <WidthWrapper>
            <OrderList/>
         </WidthWrapper>
      </StyledOrderPage>
   )
}