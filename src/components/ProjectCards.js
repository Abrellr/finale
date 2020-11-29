import React from "react";
import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./ProjectCards.scss";

export default function ProjectCards({ projects }) {
  return (
    <>
      {projects &&
        projects.map((project, idx) => {
          return (
            <Card className="mx-auto mb-3" key={idx} border="primary" style={{ width: "18rem" }}>
              <Card.Header className="bg-primary" style={{ height: "3rem"}}></Card.Header>
              <Card.Body>
                <Card.Title>{project.project_name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{project.project_create_at}</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Link to="/project/:id">
                <Button variant="primary">Start work</Button>
                </Link>
                <Link to={`/project/update`}>
                <Button variant="success">Edit</Button>
                </Link>
              </Card.Body>
            </Card>
          );
        })}
    </>
  );
}
