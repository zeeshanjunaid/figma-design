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
      width: max-content;
      min-width: 22rem;
      background: ${(props) => props.theme.blackColor};
      position: absolute;
      top: 115%;
      left: 0.5rem;
      z-index: 11;
    }
  }

  .dropdown-content {
    width: 100%;
    .btf {
      margin: 1rem 0;
      padding: 1rem 2rem;
      color: ${(props) => props.theme.whiteColor};
      font-weight: 500;
      font-size: 1.1rem;
      border-bottom: 0.1rem solid #676767;
      &:hover {
        background-color: ${(props) => props.theme.blueColor};
      }
    }
    .input-container {
      padding: 0 2rem 1.2rem 2rem;
      border-bottom: 0.1rem solid #676767;
      input {
        background-color: transparent;
        color: #676767;
        width: 100%;
        height: 3rem;
        outline: none;
        font-size: 1.1rem;
        padding: 1rem 0.5rem;
        font-weight: bold;
        border: 0.2rem solid ${(props) => props.theme.blueColor};
        border-radius: 0.3rem;
        ::placeholder {
          color: #676767;
        }
      }
    }
    ul {
      margin: 1rem 0;

      &:not(:last-child) {
        border-bottom: 0.1rem solid #676767;
      }
      li {
        padding: 1rem 1rem 1rem 3rem;
        font-size: 1.1rem;
        font-weight: 500;
        display: flex;
        justify-content: space-between;
        align-items: center;
        svg {
          width: 3rem;
          height: 3rem;
        }
        &:hover {
          background-color: ${(props) => props.theme.blueColor};
        }
      }
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
