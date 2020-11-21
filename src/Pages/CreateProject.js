import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import DateInput from "../components/DateInput.jsx"
import { Container } from "react-bootstrap";
import {
  GlobalStyle,
  MainSection,
  FooterSection,
  NavbarSection,
  PageContainer,
} from "./style";


export default function CreateProject() {
  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <NavbarSection>
          <Navigation />
        </NavbarSection>
        <Container>
          <MainSection>
            <h3>this is the ProjectDetail</h3>
            <DateInput />
          </MainSection>
        </Container>
        <FooterSection>
          <Footer />
        </FooterSection>
      </PageContainer>
    </>
  );
}
