import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
//import NumericInput from "react-numeric-input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./TaskInput.scss";


export default function EditTask({task}) {
console.log(tasks)

    const [updateTaskName, setUpdateTaskName] = useState()
    const [updateStartTime, setUpdateStartTime] = useState()
    const [updateEndTime, setUpdateEndTime] = useState()

    const handleUpdate = (e) => {
      e.preventDefault();
      axios
        .put("/tasks/", {
          task_name: updateTaskName,
          task_start_at: updateStartTime,
          task_end_at: updateEndTime
        })
        .then((response) => {
          const data = response.data;
          alert(
            "Task update was successful. Click on project to start work"
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
    <div className="task-input-form">
      <Container className="container task-input-container border border-light shadow p-3 mb-5 rounded py-3 px-3">
        <p>Edit tasks here</p>
        <br />
        <Form className="createTask-form">
          <Form.Group controlId="formTaskName">
            <Form.Label>Task (optional)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your task"
              maxLength="30"
              pattern="[a-zA-Z0-9]+"
              value={updateTaskName}
              onChange={(e) => setUpdateTaskName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Row className="time-input">
              <Col>
                <Form.Label style={{ marginTop: "0.5em" }}>Start time</Form.Label>
                <br/>
                <DatePicker
                  selected={updateStartTime}
                  onChange={(date) => setUpdateStartTime(date)}
                  maxDate={new Date()}
                  timeInputLabel="Time:"
                  dateFormat="dd/MM/yyy h:mm aa"
                  showTimeInput 
                />
              </Col>
              <Col>
                <Form.Label style={{ marginTop: "0.5em" }}>End time</Form.Label>
                <br/>
                <DatePicker
                  selected={updateEndTime}
                  onChange={(date) => setUpdateEndTime(date)}
                  maxDate={new Date()}
                  timeInputLabel="Time:"
                  dateFormat="dd/MM/yyy h:mm aa"
                  showTimeInput
                />
              </Col>
             {/* <Col>
                <Form.Label style={{ marginTop: "0.5em" }}>
                  Break time
                </Form.Label>
                <br/>
                <NumericInput
                  type="time"
                  className="break-time-input"
                  min={0}
                  step={15}
                  max={120}
                  value={updateBreakTime}
                  onChange={(time) => setUpdateBreakTime(time)}
                />
              </Col>  */}
              <Col>
                <Form.Label style={{ marginTop: "0.5em" }}>
                  Total time
                  <br/>
                  should appear here
                  _____
                </Form.Label>
              </Col>
            
            </Row>
          </Form.Group>
          <Row>
            <Button
              className="create-task-button ml-3 mr-3"
              variant="primary"
              type="submit"
              block
              onClick={handleUpdate}
            >
              Update task!
            </Button>
          </Row>
        </Form>
      </Container>
    </div>
  );
}