import React, {useEffect, useState} from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TaskInput from "../components/TaskInput";
import { Container, Row } from "react-bootstrap";
import { useParams} from "react-router-dom"
import TaskTable from "../components/TaskTable";

export default function ProjectDetail({ projects, setProjects }) {
  const { id } = useParams();
  const [tasks, setTasks] = useState(null)


  //get all tasks (from projects/one specific project)
  useEffect(() => {
    const getTasks = () => {
      //fetch(`/tasks/`)
      fetch(`/tasks/project/${id}`)
			.then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.log(err))
    }
    if(id) {
      getTasks()
    };
  }, [id]);

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