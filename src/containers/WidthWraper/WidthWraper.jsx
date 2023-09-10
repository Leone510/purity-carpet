import { StyledWidthWraper } from "./StyledWidthWraper"

export const WidthWraper  = ({children, ...props}) => {

   return (
      <StyledWidthWraper>
         {children}
      </StyledWidthWraper>
   )
}