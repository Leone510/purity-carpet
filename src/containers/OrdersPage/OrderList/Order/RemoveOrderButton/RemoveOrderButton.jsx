import { useDispatch } from "react-redux"
import { StyledRemoveOrderButton } from "./StyledRemoveOrderButton"
import { removeOrder } from "../../../../../store/slice";

export const RemoveOrderButton = ({children, index}) => {
   const dispatch = useDispatch();

   const handleRemoveOrder = () => {
      dispatch(removeOrder(index))
   }

   return (
      <StyledRemoveOrderButton onClick={handleRemoveOrder}>
         {children}
      </StyledRemoveOrderButton>
   )
}