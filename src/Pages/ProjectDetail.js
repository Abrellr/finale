import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TaskInput from "../components/TaskInput";
import { Container, Row } from "react-bootstrap";
import TaskTable from "../components/TaskTable";

export default function ProjectDetail({ projects, tasks }) {
  console.log(tasks)
  return (
    <>
          <Navigation projects={projects} />
            <TaskInput projects={projects} tasks={tasks} />
            <Container className="container-fluid">
            <Row>
            <TaskTable projects={projects} tasks={tasks}/>
            </Row>
            </Container> 
          <Footer />
    </>
  );
}
