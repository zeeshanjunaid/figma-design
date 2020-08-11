import styled from "styled-components";

export const HeaderArea = styled.div`

  grid-area: header;
  background-color: ${(props) => props.theme.darkColor};
  color: ${(props) => props.theme.whiteColor};
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const HeaderMenuLeft = styled.div`
  list-style: none;
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  li {
    height: 4rem;
    padding: 1rem;
    display: flex;
    align-items: center;
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
    &.hasDropDown {
      &::after {
        content: "";
        width: 1.2rem;
        height: 1.2rem;
        background: ${(props) => props.theme.blackColor};
        position: absolute;
        bottom: -1.5rem;
        right: 1rem;
        transform: rotate(45deg);
        z-index: 10;
      }
    }

    .dropdown {
      width: 10rem;
      height: 4rem;
      background: ${(props) => props.theme.blackColor};
      position: absolute;
      top: 115%;
      left: 0;
      z-index: 11;
      padding: 1rem;
    }
  }
`;

export const HeaderMenuCenter = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  span.dash-mark {
    padding: 0 0.5rem;
  }
  a {
    font-size: 1.4rem;
    transition: all 0.3s;
    &:hover {
      cursor: default;
    }
    &:first-child {
      color: #aaaaaa;
      &:hover {
        color: ${(props) => props.theme.whiteColor};
      }
    }
    &:last-child {
      color: ${(props) => props.theme.whiteColor} !important;
      svg {
        transition: all 0.3s;
        margin-left: 0.5rem;
      }
      &:hover {
        span svg {
          transform: translateY(0.3rem);
        }
      }
    }
  }
`;
export const HeaderMenuRight = styled.div`
  list-style: none;
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  justify-content: flex-end;
  align-items: center;
  li {
    height: 4rem;
    padding: 1rem;
    display: flex;
    align-items: center;
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
    &.hasDropDown {
      &::after {
        content: "";
        width: 1.2rem;
        height: 1.2rem;
        background: ${(props) => props.theme.blackColor};
        position: absolute;
        bottom: -1.5rem;
        right: 1rem;
        transform: rotate(45deg);
        z-index: 10;
      }
    }

    .dropdown {
      width: 20rem;
      background: ${(props) => props.theme.blackColor};
      position: absolute;
      top: 115%;
      left: 0;
      z-index: 11;
      padding: 1rem;
    }
  }
  button {
    background: ${(props) => props.theme.blueColor};
    color: ${(props) => props.theme.whiteColor};
    border: 0px;
    font-size: 1.1rem;
    font-weight: bold;
    width: 6rem;
    height: 3rem;
    border-radius: 0.8rem;
    text-align: center;
    margin-right: 1rem;

    &:hover {
      cursor: pointer;
    }
  }
  .dpIcon {
    color: ${(props) => props.theme.whiteColor};
    background: #fbc701;
    padding: 0.8rem 1.1rem;
    font-size: 1.2rem;
    margin-right: 1rem;
    border-radius: 150%;
    text-align: center;
  }
`;
