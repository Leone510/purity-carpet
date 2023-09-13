import styled from "styled-components";

export const StyledOrder = styled.div`
   width: 100%;
   border: 2px solid var(--primary-dark);
   border-radius: 5px;
   display: flex;

   & > :not(:last-child) {
      border-right: 1px solid var(--primary-dark);
   }

   & > .quantity {
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      font-weight: 700;
   }

   & > .carpetsList {
      flex-grow: 1;

      & > :not(:last-child) {
         border-bottom: 1px solid var(--primary-dark);

         & > .carpetsInfo {
            border: none;
         }
      }
   }

   & > .orderTotalArea {
      width: 80px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      font-weight: 700;
   }   

   & > .totalOrderPrice {
      width: 80px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      font-weight: 700;
   }   
`