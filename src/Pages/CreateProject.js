import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProjectInput from "../components/ProjectInput";
import ProjectCards from "../components/ProjectCards";
import { Container, Row, Col } from "react-bootstrap"



export default function CreateProject({ projects, users, setProjects }) {
  return (
    <> 
        <Container fluid>
          <Navigation projects={projects} />
            <ProjectInput projects={projects}  users={users} />
            <Row>
            <ProjectCards projects={projects} users={users} setProjects={setProjects} />
            </Row>
          <Footer />
        </Container>
    </>
  );
}
