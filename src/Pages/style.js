import styled, { createGlobalStyle } from "styled-components";
import bgImage from "../images/bgImage.png";

const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        width: 100%;
        height: 100%;
        font-size: 1em;
        overflow: hidden;
    }`;

const Background = styled.div`
  background-image: url(${bgImage});
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TimeStamp = styled.div`
  width: fit-content;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;



export {
  GlobalStyle,
  Background,
  TimeStamp

};
