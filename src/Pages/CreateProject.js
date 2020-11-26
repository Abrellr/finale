import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProjectInput from "../components/ProjectInput";
import ProjectCard from "../components/ProjectCard";
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
          <MainSection>
            <ProjectInput />
            <ProjectCard />
          </MainSection>
        <FooterSection>
          <Footer />
        </FooterSection>
      </PageContainer>
    </>
  );
}
