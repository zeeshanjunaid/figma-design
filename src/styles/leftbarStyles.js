import styled from "styled-components";
export const HeaderTop = styled.div`
  display: inline-block;
  width: 100%;
  border-bottom: 0.1rem solid ${(props) => props.theme.greyColor};
  padding: 1.3rem 2.5rem;
  a {
    font-size: 1.2rem;
    float: left;
    color: ${(props) => props.theme.blackColor};
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }
  a:last-child {
    float: right;
    margin-left: 6rem;
    &:hover {
      span svg {
        transform: translateY(0.3rem);
      }
    }
    span {
      margin-left: 0.3rem;
      &.rotateIcon {
        svg {
          transform: rotate(-180deg) translateY(-0.1rem);
        }
      }
      svg {
        transition: all 0.3s;
        height: 1rem;
        width: 1rem;
      }
      path {
        fill: #bbbbbb;
      }
    }
  }
`;
export const LeftBarHeader = styled.ul`
  list-style: none;
  user-select: none;
  border-bottom: 0.1rem solid ${(props) => props.theme.greyColor};
  .top {
    display: flex;
    padding: 0.5rem 1rem 0 1rem;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    margin-left: 1.5rem;
    span {
      padding: 1rem 1.3rem;
      &:hover {
        background-color: ${(props) => props.theme.greyColor};
        border-radius: 0.25rem;
      }
    }
  }
  .bottom {
    padding: 1rem 3rem;
    &:hover {
      background-color: ${(props) => props.theme.offWhiteColor};
    }
    span {
      margin-right: 1rem;
    }
    font-size: 1.1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
`;

export const LeftBarContent = styled.ul`
  list-style: none;
  li {
    padding: 1rem 0 1rem 2rem;
    font-size: 1.1rem;
    position: relative;
    border: 0.1rem solid ${(props) => props.theme.whiteColor};

    &:hover {
      border: 0.1rem solid ${(props) => props.theme.blueColor};
    }

    span.icon-left {
      margin-right: 1rem;
      svg {
        stroke: ${(props) => props.theme.offWhiteColor};
      }
    }

    .right-icons {
      position: absolute;
      top: 25%;
      right: 5%;
      display: flex;
      align-items: center;
      span:not(:last-child) {
        margin-right: 1rem;
      }
    }
    &.unvisibleItem {
      color: ${(props) => props.theme.offWhiteColor} !important;
      .icon-left {
        svg {
          stroke: ${(props) => props.theme.offWhiteColor} !important;
        }
      }
      .right-icons {
        span svg {
          fill: ${(props) => props.theme.offWhiteColor} !important;
        }
      }
    }
  }
`;
