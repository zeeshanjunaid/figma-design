import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 28rem 1fr 28rem;
  grid-template-areas:
    "header header header"
    "leftbar content rightbar";
`;

export const LeftSideBar = styled.div`
  grid-area: leftbar;
  background-color: ${(props) => props.theme.whiteColor};
  height: 100vh;
`;
export const ContentArea = styled.div`
  grid-area: content;
`;
export const RightSideBar = styled.div`
  grid-area: rightbar;
  background-color: ${(props) => props.theme.whiteColor};
  height: 100vh;
`;
