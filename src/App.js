import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "./components/header";
import LeftBar from "./components/leftBar";
import RightBar from "./components/rightBar";
import { normalize } from "styled-normalize";
import { Container } from "./styles/globalStyles";
import Content from "./components/content";
const GlobalStyle = createGlobalStyle`
  ${normalize}
  *,
  *::after,
  *::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  text-decoration: none;
  }

  html{
    font-size: 62.5%;

    @media(min-width: 112.5em){
      font-size: 75%;
    }
    @media(max-width: 75em){
      font-size: 56.25%;
    }
    @media(max-width: 56.25em){
      font-size: 50%;
    }
    @media(max-width: 37.5em){
      font-size: 43.75%;
    }
  }
  body{
    box-sizing: border-box;
    color: ${(props) => props.theme.blackColor};
    background: ${(props) => props.theme.whiteColor};
    color: ${(props) => props.theme.color};
    min-height: 100vh;
    overscroll-behavior: none;
    font-family: ${(props) => props.theme.fontPrimary};
  }
`;
function App() {
  const theme = {
    darkColor: "#2c2c2c",
    whiteColor: "#ffffff",
    blackColor: "#000000",
    greyColor: "#e5e5e5",
    blueColor: "#2fa0fb",
    fontPrimary: "'Inter', sans-serif",
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header />
        <LeftBar />
        <Content />
        <RightBar />
      </Container>
    </ThemeProvider>
  );
}

export default App;
