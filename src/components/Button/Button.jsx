import { StyledButon } from "./StyledButton"

export const Button = ({children, ...props}) => {

   return (
      <StyledButon>
         {children}
      </StyledButon>
   )
}