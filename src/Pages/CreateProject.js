import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProjectInput from "../components/ProjectInput";
import ProjectCards from "../components/ProjectCards";
import { Container, Row } from "react-bootstrap"



export default function CreateProject({ projects, users }) {
  return (
    <> 
          <Navigation projects={projects} />
            <ProjectInput projects={projects} users={users} />
            <Container className="container-fluid wrapper">
            <Row>
            <ProjectCards projects={projects}/>
            </Row>
            </Container>
          <Footer />
    </>
  );
}
