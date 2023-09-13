import styled from "styled-components";

export const StyledCarpet = styled.div`
   padding: 0 5px;
   width: 100%;
   height: 30px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   font-weight: 600;
   
   & > :not(:last-child) {
      border-bottom: 1px solid var(--primary-dark);
   }

   & > .carpetsButtons {
      display: flex,
   }
`