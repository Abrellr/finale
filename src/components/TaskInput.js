import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
//import TimePicker from "react-bootstrap-time-picker";
import NumericInput from "react-numeric-input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./TaskInput.scss";

export default function TaskInput({ projects, tasks }) {
console.log(tasks)

  const [taskName, setTaskName] = useState("");
  const [breakTime, setBreakTime] = useState();
  const [totalTime, setTotalTime] = useState();
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());


  const handleCreate = (e) => {
    e.preventDefault();
    axios
      .post("/tasks/", {
        task_name: taskName,
        start_time: startTime,
        end_time: endTime,
        break_time: breakTime,
        total_time: totalTime,
      })
      .then((response) => {
        console.log(response);
        //const data = response.data;
        alert("Task creation was successful. Click on project to start work");
        window.open("/project/today", "_self"); // with '_self' page will open in current tab
      })
      .catch((error) => {
        return alert(
          "Task creation failed. " +
            error
        );
      });
  };

  return (
    <div className="task-input-form">
      <Container className="container task-input-container border border-light shadow p-3 mb-5 rounded py-3 px-3">
        <h5 className="pb-2">Create Task</h5>
        <p>Add or edit manually your project tasks here</p>
        <br />
        <Form className="createTask-form">
          <Form.Group controlId="formTaskName">
            <Form.Label>Task (optional)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your task"
              maxLength="30"
              pattern="[a-zA-Z0-9]+"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Row className="time-input">
              <Col>
                <Form.Label style={{ marginTop: "0.5em" }}>Start time</Form.Label>
                <br/>
                <DatePicker
                  selected={startTime}
                  onChange={(date) => setStartTime(date)}
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
                  selected={endTime}
                  onChange={(date) => setEndTime(date)}
                  maxDate={new Date()}
                  timeInputLabel="Time:"
                  dateFormat="dd/MM/yyy h:mm aa"
                  showTimeInput
                />
              </Col>
              <Col>
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
                  value={breakTime}
                  onChange={(time) => setBreakTime(time)}
                />
              </Col>
              <Col>
                <Form.Label style={{ marginTop: "0.5em" }}>
                  Total time
                </Form.Label>
                <Form.Control
                  type="number"
                  id="total-time"
                  value={totalTime}
                  onChange={(e) => setTotalTime(e.target.value)}
                />
              </Col>
            </Row>
          </Form.Group>
          <Row>
            <Button
              className="create-task-button ml-3 mr-3"
              variant="primary"
              type="submit"
              block
              onClick={handleCreate}
            >
              Create task!
            </Button>
          </Row>
        </Form>
      </Container>
    </div>
  );
}