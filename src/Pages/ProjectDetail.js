import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TaskInput from "../components/TaskInput";
import { Container, Row } from "react-bootstrap";
import TaskTable from "../components/TaskTable";

export default function ProjectDetail({ projects, tasks, setTasks }) {
  console.log(setTasks)
  return (
    <>
        <Container fluid style={{width: "100vw"}}>
          <Navigation projects={projects} />
            <TaskInput projects={projects} tasks={tasks} setTasks={setTasks} />
            <Row>
            <TaskTable projects={projects} tasks={tasks} setTasks={setTasks}/>
            </Row>
          <Footer />
        </Container> 

    </>
  );
}