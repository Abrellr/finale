import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import TimePicker from 'react-bootstrap-time-picker';
import "./TaskInput.scss";

export default function TaskInput() {

  const [value, onChange] = useState('10:00');
  const [task, setTask] = useState("");
  const [createDate, setCreateDate] = useState();
  // const [currentTime, setCurrentTime] = useState
  // const [startTime, setStartTime] = useState()
  // const [endTime, setEndTime] = useState()

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("", {
        task: task,
        //create_date: createDate
        //current_date:
        //start_time:
        //end_time:
      })
      .then((response) => {
        const data = response.data;
        alert("Task creation was successful. Click on project to start work");
        window.open("/", "_self"); // with '_self' page will open in current tab
      })
      .catch((error) => {
        return alert(
          "Task creation failed. Please make sure your project name is at least 2 chars long " +
            error
        );
      });
  };

  return (
    <div className="task-input-form">
          <Container className="container task-input-container border border-light shadow p-3 mb-5 rounded py-3 px-3">
            <h3 className="pb-2">Create Task</h3>
            <p>Add or edit manually your project tasks here</p>
            <br/>
            <Form className="createTask-form">
              <Form.Group controlId="formTaskDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="dd/mm/yyyy"
                  value={createDate}
                  onChange={(e) => setCreateDate(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formTaskName">
                <Form.Label>Task (optional)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your task"
                  maxLength="20"
                  pattern="[a-zA-Z0-9]+"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  required
                />
              </Form.Group>
              <Row className="time-input">
                <Col >
                <TimePicker 
                step={5} 
                style={{width: '150px'}} 
                onChange={onChange}
                value={value}
                />
                </Col>
                <Col>
                <TimePicker 
                step={5} 
                style={{width: '150px'}} 
                onChange={onChange}
                value={value}
                />
                </Col>
              </Row>
              <Row>
                <Button
                  className="create-task-button ml-3 mr-3"
                  variant="primary"
                  type="submit"
                  block
                  onClick={handleRegister}
                >
                  Create task!
                </Button>
              </Row>
            </Form>
            {/* <MDBDatePickerV5 theme="warning" getValue={(e)=> console.log(e)} /> */}
          </Container>
    </div>
  );
}
