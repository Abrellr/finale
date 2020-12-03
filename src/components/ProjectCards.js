import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import format from "date-fns/format";
import "./ProjectCards.scss";

export default function ProjectCards({ projects, setProjects }) {
  const dateFormat = "dd/MM/yyyy";

  const deleteProject = ({ project_id }) => {
    fetch(`/projects/${project_id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error('Error during project deletion')
        res.json()
      })
      .then((data) =>
        setProjects((prevProjects) =>
          prevProjects.filter((project) => project.project_id !== project_id)
        )
      )
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      {projects &&
        projects.map((project, idx) => {
          return (
            <Card
              key={idx}
              className="mx-auto mb-3 border-light shadow p-3 mb-5 rounded py-3 px-3"
              border="primary"
              style={{ width: "18rem" }}
            >
              <Card.Header
                className="bg-primary"
                style={{ height: "3rem" }}
              ></Card.Header>
              <Card.Body>
                <Card.Title>{project.project_name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {format(new Date(project.project_create_at), dateFormat)}
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                {/* <Link to={`/project/${project.user_id}`}> */}
                <Link to={`/project/today`}>
                  <Button variant="primary">Start work</Button>
                </Link>
                <Link to={`/project/update`}>
                  <Button variant="success">Edit</Button>
                </Link>
                <Link to={`/createProject`}>
                  <Button
                    variant="danger"
                    onClick={() => deleteProject(project)}
                  >
                    Delete
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          );
        })}
    </>
  );
}
