import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header header header header header"
    "leftbar content content content rightbar";
`;

export const LeftSideBar = styled.div`
  grid-area: leftbar;
  width: max-content;
  background-color: ${(props) => props.theme.whiteColor};
  height: 100vh;
`;
export const ContentArea = styled.div`
  grid-area: content;
`;
export const RighttSideBar = styled.div`
  grid-area: rightbar;
  background-color: ${(props) => props.theme.whiteColor};
  height: 100vh;
`;
