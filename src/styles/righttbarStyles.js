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
`;
export const RightBarHeader = styled.div`
  list-style: none;
  user-select: none;
  /* border-bottom: 0.1rem solid ${(props) => props.theme.greyColor}; */
  .bg {
    font-size: 1.1rem;
    font-weight: bold;
    padding: 1rem;
    border-bottom: 0.1rem solid ${(props) => props.theme.greyColor};
    .inner {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      font-weight: 500;
      font-size: 1rem;
      margin: 1rem 0;
      padding-top: 1rem;
      div:first-child {
        margin-right: 1rem;
        padding-left: 2rem;

        position: relative;
        &:before {
          content: "";
          position: absolute;
          width: 1.4rem;
          height: 1.4rem;
          top: -20%;
          left: 0;
          background: ${(props) => props.theme.greyColor};
        }
      }
      .eyeIcon {
        position: absolute;
        top: 50%;
        right: 5%;
        display: flex;
        align-items: center;
      }
    }
  }
  .top {
    display: flex;
    padding: 0.5rem 1rem;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    padding-left: 1.5rem;
    color: ${(props) => props.theme.offWhiteColor};
    border-bottom: 0.1rem solid ${(props) => props.theme.greyColor};
    &:hover {
      color: ${(props) => props.theme.blackColor};
    }
    span {
      padding: 1rem 1.3rem;
      &:hover {
        background-color: ${(props) => props.theme.greyColor};
        border-radius: 0.25rem;
      }
    }
  }
  .pt {
    font-size: 1.1rem;
    font-weight: bold;
    padding: 2rem 1rem;
    border-bottom: 0.1rem solid ${(props) => props.theme.greyColor};
    .inner {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      position: relative;
      font-weight: 200;
      line-height: 1.4;
      font-size: .95rem;
      margin: 2rem 0;
      margin-right: 3rem;
      svg {
        margin-top: -0.8rem;
        path {
          fill: black;
        }
      }
    }
  }
`;
export const RightBarContent = styled.div``;
