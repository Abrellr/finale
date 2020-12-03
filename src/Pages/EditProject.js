import React, { useState } from 'react';
import { Form, Container, Row, Button } from "react-bootstrap"
import axios from 'axios';

export default function EditProject(props) {

  const [updateProjectName, setUpdateProjectName] = useState("");
  const [updateProjectDate, setUpdateProjectDate] = useState("");

  const { project_id } = props.match.params

  const getProjectById = async() => {
      try {
          const result = await axios.get(`/projects/${project_id}`)
          setUpdateProjectName(result.data)
          console.log(result.data)
      } catch(error) {
          console.log(error)
      }
  }
//   useEffect(() => {
//       getProjectById()
//       }
//   }, [])

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("/projects/", {
        project_name: updateProjectName,
        project_create_at: updateProjectDate,
      })
      .then((response) => {
        const data = response.data;
        alert(
          "Project update was successful. Click on project to start work"
        );
        window.open("/createProject", "_self"); // with '_self' page will open in current tab
      })
      .catch((error) => {
        return alert(
          "Project update failed. Please make sure your project name is at least 2 chars long " +
            error
        );
      });
  };

  return (
    <div className="project-input-form">
          <Container className="container project-input-container border border-light shadow p-3 mb-5 rounded py-3 px-3">
            <h3 className="pb-2">Edit Project</h3>
            <p>Edit your here</p>
            <br />
            <Form className="createProject-form">
              <Form.Group controlId="formProjectName">
                <Form.Label>Project name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="New project name"
                  maxLength="25"
                  pattern="[a-zA-Z0-9]+"
                  value={updateProjectName}
                  onChange={(e) => setUpdateProjectName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formProjectDate">
                <Form.Label>Create date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="dd/mm/yyyy"
                  value={updateProjectDate}
                  onChange={(e) => setUpdateProjectDate(e.target.value)}
                  required
                />
              </Form.Group>
              <Row>
                <Button
                  className="create-project-button ml-3 mr-3"
                  variant="primary"
                  type="submit"
                  block
                  onClick={handleUpdate}
                >
                  Create new project!
                </Button>
              </Row>
            </Form>
          </Container>
    </div>
  );
    
}
