import styled, { css } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    "leftbar content rightbar";
`;

export const LeftSideBar = styled.div`
  grid-area: leftbar;
`;
export const ContentArea = styled.div`
  grid-area: content;
`;
export const RighttSideBar = styled.div`
  grid-area: rightbar;
`;
