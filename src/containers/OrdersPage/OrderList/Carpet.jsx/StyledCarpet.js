import styled from "styled-components";

export const StyledCarpet = styled.div`
   padding: 0 5px;
   width: 100%;
   height: 30px;
   
   & > :not(:last-child) {
      border-bottom: 1px solid var(--primary-dark);
   }
`