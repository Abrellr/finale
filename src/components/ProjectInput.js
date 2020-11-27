import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row } from "react-bootstrap";
import './ProjectInput.scss'
//import { MDBDatePickerV5 } from 'mdbreact';

export default function DateInput() {
  const [projectName, setProjectName] = useState("");
  const [projectDate, setProjectDate] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("/projects/", {
        project_name: projectName,
        project_create_at: projectDate,
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
    <div className="project-input-form">
          <Container className="container project-input-container border border-light shadow p-3 mb-5 rounded py-3 px-3">
            <h3 className="pb-2">Create Project</h3>
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
                  onClick={handleRegister}
                >
                  Create new project!
                </Button>
              </Row>
            </Form>
            {/* <MDBDatePickerV5 theme="warning" getValue={(e)=> console.log(e)} /> */}
          </Container>
    </div>
  );
}
