import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TaskInput from "../components/TaskInput";
import {
  GlobalStyle,
  MainSection,
  FooterSection,
  NavbarSection,
  PageContainer,
} from "./style";

export default function ProjectDetail() {
  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <NavbarSection>
          <Navigation />
        </NavbarSection>
        <MainSection>
          <TaskInput />
        </MainSection>
        <FooterSection>
          <Footer />
        </FooterSection>
      </PageContainer>
    </>
  );
}
