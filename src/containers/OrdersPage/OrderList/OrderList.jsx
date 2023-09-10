import { AddOrderButton } from "./AddOrderButton/AddOrderButton"
import { StyledOrderList } from "./StyledOrderList"

export const OrderList = ({children, ...props}) => {

   return (
      <StyledOrderList>
         <AddOrderButton>
            Add Order
         </AddOrderButton>
         {children}
      </StyledOrderList>
   )
}