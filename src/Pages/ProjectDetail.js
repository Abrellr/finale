import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TaskInput from "../components/TaskInput";
import { Container, Row } from "react-bootstrap";
import TaskTable from "../components/TaskTable";

export default function ProjectDetail({ projects, tasks }) {
  return (
    <>
          <Navigation />
            <TaskInput projects={projects}  />
            <Container className="container-fluid">
            <Row>
            <TaskTable tasks={tasks}/>
            </Row>
            </Container> 
          <Footer />
    </>
  );
}
