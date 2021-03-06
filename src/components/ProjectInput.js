import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row } from "react-bootstrap";
import {useParams} from "react-router-dom"
import "./ProjectInput.scss";

export default function ProjectInput({ users, setUsers }) {
  console.log(users)

  const USER_INIT_QUERY = 2;
  const [projectName, setProjectName] = useState(null);
  const [projectDate, setProjectDate] = useState(null);

  const handleCreate = (e) => {
    // if(handleCreate) {
    //   setUsers && setUsers.filter((user) => user.user_id === parseInt(id, 10))
    // }
    e.preventDefault();
    axios
      .post("/api/projects/", {
        project_name: projectName,
        project_create_at: projectDate,
        user_id: USER_INIT_QUERY,
      })
      .then((response) => {
        const data = response.data;
        alert(
          "Project creation was successful. Click on project to start work"
        );
        window.open("/createProject", "_self"); // with '_self' page will open in current tab
      })
      .catch((error) => {
        return alert(
          "Project creation failed. Please make sure your project name is at least 2 chars long " +
            error
        );
      });
  };

  return (
    <div >
      <Container className="container project-input-container border border-light shadow p-3 mb-5 rounded py-3 px-3">
              {users && users.map((user, user_id) => {
                return(
                  <div key={user.user_id} className="textBox border-dark shadow p-3 mb-5 rounded py-3 px-3">
                  <h3  className="welcomeText">Hey {user.username}!</h3>
                  <h3 className="welcomeText">Ready to kick some ass?</h3>
                  </div>
                )
              })}
                <br/>
                <h5 className="pb-2">Create Project</h5>
                <p>Click on your existing project or create new project here</p>
                <br />
                <Form className="createProject-form">
                  <Form.Group controlId="formProjectName">
                    <Form.Label>Project name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="New project name"
                      maxLength="25"
                      pattern="[a-zA-Z0-9]+"
                      autoComplete="off"
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formProjectDate">
                    <Form.Label>Create date</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="dd/mm/yyyy"
                      value={projectDate}
                      onChange={(e) => setProjectDate(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Row>
                    <Button
                      className="create-project-button ml-3 mr-3"
                      variant="primary"
                      type="submit"
                      block
                      onClick={handleCreate}
                    >
                      Create new project!
                    </Button>
                  </Row>
                </Form>            
      </Container>
    </div>
  );
}
