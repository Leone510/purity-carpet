import { StyledWidthWrapper } from "./StyledWidthWrapper"

export const WidthWrapper  = ({children, ...props}) => {

   return (
      <StyledWidthWrapper>
         {children}
      </StyledWidthWrapper>
   )
}