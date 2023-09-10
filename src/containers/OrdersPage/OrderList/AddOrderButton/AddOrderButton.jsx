import { StyledAddOrderButton } from "./StyledAddOrderButton"

export const AddOrderButton = ({children, ...props}) => {

   return (
      <StyledAddOrderButton>
         {children}
      </StyledAddOrderButton>
   )
}