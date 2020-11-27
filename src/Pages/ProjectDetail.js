import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TaskInput from "../components/TaskInput";
import { Container, Row } from "react-bootstrap";

export default function ProjectDetail({ projects }) {
  return (
    <>
          <Navigation />
            <TaskInput />
           
            <Container className="container-fluid">
            <Row>
            </Row>
            </Container> 
          <Footer />
    </>
  );
}
