import React, { useState } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container, Row } from "react-bootstrap"
import './ProjectInput.scss'

export default function TaskInput() {
    const [task, setTask] = useState('')
    const [createDate, setCreateDate] = useState()
    // const [currentTime, setCurrentTime] = useState
    // const [startTime, setStartTime] = useState()
    // const [endTime, setEndTime] = useState()

    const handleRegister = (e) => {
        e.preventDefault();
        axios.post('', {
          task: task,
          //create_date: createDate
          //current_date: 
          //start_time:
          //end_time:
        })
          .then(response => {
            const data = response.data;
            alert('Task creation was successful. Click on project to start work')
            window.open('/', '_self'); // with '_self' page will open in current tab
          })
          .catch(error => {
            return alert('Task creation failed. Please make sure your project name is at least 2 chars long ' + error);
          });
      };

    return (
        <div>
            <Container>
            <Form className="createTask-form">
              <Form.Group controlId="formProjectName">
                <Form.Label>Task (optional)</Form.Label>
                <Form.Control type="text" placeholder="Your task" maxLength="20" pattern="[a-zA-Z0-9]+" value={task} onChange={e => setTask(e.target.value)} required />
              </Form.Group>
              <Form.Group controlId="formTaskDate">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" placeholder="dd/mm/yyyy" value={createDate} onChange={e => setCreateDate(e.target.value)} required />
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
