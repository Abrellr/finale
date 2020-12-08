import React, {useEffect} from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TaskInput from "../components/TaskInput";
import { Container, Row } from "react-bootstrap";
import { useParams} from "react-router-dom"
import TaskTable from "../components/TaskTable";

export default function ProjectDetail({ projects, tasks, setTasks, setProjects, setProjectID }) {
  console.log(tasks)
  console.log(setProjectID)
  setProjectID(useParams().id);

  
  return (
    <>
        <Container fluid style={{width: "100vw"}}>
          <Navigation projects={projects} />
            <TaskInput projects={projects} tasks={tasks} setTasks={setTasks} setProjects={projects} />
            <Row>
            <TaskTable projects={projects} tasks={tasks} setTasks={setTasks} setProjects={projects} />
            </Row>
          <Footer />
        </Container> 

    </>
  );
}