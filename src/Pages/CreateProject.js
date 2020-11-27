import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProjectInput from "../components/ProjectInput";
import ProjectCards from "../components/ProjectCards";
import { Container, Row } from "react-bootstrap"



export default function CreateProject({ projects }) {
  return (
    <>
          <Navigation />
            <ProjectInput />
            <Container className="container-fluid">
            <Row>
            <ProjectCards projects={projects}/>
            </Row>
          </Container>
          <Footer />
    </>
  );
}
