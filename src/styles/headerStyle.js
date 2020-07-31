import styled, { css } from "styled-components";

export const HeaderArea = styled.div`
  grid-area: header;
  background-color: ${(props) => props.theme.darkColor};
  color: ${(props) => props.theme.whiteColor};
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    list-style: none;
    display: flex;
    li {
      padding: 1rem;
      display: flex;
      align-items: center;
    }
  }
`;
export const HeaderMenuLeft = styled.ul`
  li {
    transition: all 0.3s;
    position: relative;
    overflow: visible;
    span {
      margin-left: 0.75rem;
      transition: all 0.3s;
    }
    &:hover {
      background-color: ${(props) => props.theme.blackColor};
      span {
        transform: translateY(0.3rem);
      }
    }
    &.activeClass {
      background-color: ${(props) => props.theme.blueColor};
    }

    .dropdown {
      width: 10rem;
      height: 4rem;
      background: ${(props) => props.theme.blackColor};
      position: absolute;
      top: 110%;
      left: 0;
    }
  }
`;

export const HeaderMenuCenter = styled.ul``;
export const HeaderMenuRight = styled.ul``;
