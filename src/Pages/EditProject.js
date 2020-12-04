import React, { useState, useEffect } from 'react';
import { Form, Container, Row, Button } from "react-bootstrap"
import { useParams, useHistory } from 'react-router-dom'
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
//import DatePicker from "react-datepicker";
import axios from 'axios';
//import { format } from 'date-fns'



export default function EditProject({projects}) {

  const { id } = useParams()
  const history = useHistory()
  // const [updateProjectName, setUpdateProjectName] = useState("");
  // const [updateProjectDate, setUpdateProjectDate] = useState("");
  const [targetProject, setTargetProject] = useState(null)
  //const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {
    if (!projects) history.push('/createProject')
    console.log(projects)
    console.log(typeof id)
        //if (!projectToUpdate) history.push('/createProject')
    const projectToUpdate = projects && projects.find(project => project.project_id === parseInt(id, 10));
      //projectToUpdate.project_create_at = new Date(format(new Date(projectToUpdate.project_create_at), 'yyyy/MM/dd'))
      setTargetProject(projectToUpdate);
      console.log()
    console.log(projectToUpdate)
    
  }, [projects, history, id])


  const handleUpdate = ({e, id}) => {
    console.log(id)
    e.preventDefault();
    axios
      .put(`/projects/${id}`, {
        project_name: targetProject.project_name,
        project_create_at: targetProject.project_create_at,
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
    <>
    {projects && targetProject && (
      <>
      <Navigation projects={projects} />
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
                  value={targetProject.project_name}
                  onChange={(e) => setTargetProject({
                    ...targetProject,
                    project_name: e.target.value
                  })}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formProjectDate">
                    <Form.Label>Create date</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="dd/mm/yyyy"
                      value={targetProject.project_create_at}
                      onChange={(e) => setTargetProject({
                    ...targetProject,
                    project_create_at: e.target.value
                  })}
                    />
                  </Form.Group>
              {/* <Form.Group controlId="formProjectDate">
                <Form.Label>Create date</Form.Label>
                <DatePicker
                  dateFormat="yyyy/MM/dd"
                  selected={targetProject.project_create_at}
                  onChange={(date) => setTargetProject({
                    ...targetProject,
                    project_create_at: date
                  })}
                />
              </Form.Group> */}
              <Row>
                <Button
                  className="create-project-button ml-3 mr-3"
                  variant="primary"
                  type="submit"
                  block
                  onClick={(targetProject) => handleUpdate(targetProject)}
                >
                  Update project!
                </Button>
              </Row>
            </Form>
          </Container>
          <Footer />
    </>
    )}
    
    </>
  );
    
}
