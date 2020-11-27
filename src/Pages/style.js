import styled, { createGlobalStyle, css } from "styled-components";
import bgImage from "../images/bgImage.png";

const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        width: 100%;
        /*height: 100%;*/
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
  width: 30%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const PageContainer = styled.div`
  width: 100%;
  height: fit-content;
`;

const NavbarSection = styled.div`
  width: 100%;
  height: 15%;
`;
const MainSection = styled.div`
  width: 100%;
  background-color: white;
`;

const ProjectCardSection = styled.div `
    width: 100%;
    background-color: pink;
`;


const FooterSection = styled.div`
  width: 100%;
  height: 15vh;
`;



export {
  GlobalStyle,
  Background,
  TimeStamp,
  MainSection,
  FooterSection,
  NavbarSection,
  PageContainer,
  ProjectCardSection
};
