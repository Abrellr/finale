import React, { useState } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container, Row } from 'react-bootstrap'
//import { MDBDatePickerV5 } from 'mdbreact';


export default function DateInput() {

    const [projectName, setProjectName] = useState('')
    const [projectDate, setProjectDate] = useState('')

    const handleRegister = (e) => {
        e.preventDefault();
        axios.post('', {
          Project_name: projectName,
          Project_date: projectDate
        })
          .then(response => {
            const data = response.data;
            alert('Project creation was successful. Click on project to start work')
            window.open('/', '_self'); // with '_self' page will open in current tab
          })
          .catch(error => {
            return alert('Project creation failed. Please make sure your project name is at least 2 chars long ' + error);
          });
      };

    return (
        <div>
            <Container>
            <Form className="createProject-form">
              <Form.Group controlId="formProjectName">
                <Form.Label>Project name</Form.Label>
                <Form.Control type="text" placeholder="New project name" maxLength="10" pattern="[a-zA-Z0-9]+" value={projectName} onChange={e => setProjectName(e.target.value)} required />
              </Form.Group>
              <Form.Group controlId="formProjectDate">
                <Form.Label>Create date</Form.Label>
                <Form.Control type="date" placeholder="dd/mm/yyyy" value={projectDate} onChange={e => setProjectDate(e.target.value)} required />
              </Form.Group>
              <Row className="justify-content-end">
                <Button className="create-project-button ml-3 mr-3" variant="primary" type="submit" block onClick={handleRegister}>Create new project!</Button>
              </Row>
            </Form>
            {/* <MDBDatePickerV5 theme="warning" getValue={(e)=> console.log(e)} /> */}
            </Container>
        </div>
    )
}
