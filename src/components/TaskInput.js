import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import TimePicker from "react-bootstrap-time-picker";
import NumericInput from "react-numeric-input";
import "./TaskInput.scss";

export default function TaskInput({ projects, tasks }) {

  //const [value, onChange] = useState("10:00");
  const [taskName, setTaskName] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [breakTime, setBreakTime] = useState();
  const [totalTime, setTotalTime] = useState();

  const handleCreate = (e) => {
    e.preventDefault();
    
    axios
      .post("/tasks/", {
        task_create_at: createDate,
        task_name: taskName,
        start_time: startTime,
        end_time: endTime,
        break_time: breakTime,
        total_time: totalTime,
      })
      .then((response) => {
        console.log(response);
        const data = response.data;
        alert("Task creation was successful. Click on project to start work");
        window.open("/", "_self"); // with '_self' page will open in current tab
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
        <h4 className="pb-2">Create Task</h4>
        <p>Add or edit manually your project tasks here</p>
        <br />
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
              maxLength="30"
              pattern="[a-zA-Z0-9]+"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Row className="time-input">
              <Col>
              <Form.Label>Start time</Form.Label>
                <TimePicker
                  type="time"
                  className="timepicker"
                  step={5}
                  style={{ width: "120px" }}
                  value={startTime}
                  onChange={time => setStartTime(time)}
                />
              </Col>
              <Col>
              <Form.Label style={{marginTop: "0.5em"}}>End time</Form.Label>
                <TimePicker
                  type="time"
                  className="timepicker"
                  step={5}
                  style={{ width: "120px" }}
                  value={endTime}
                  onChange={time => setEndTime(time)} 
                  
                />
              </Col>
              <Col>
              <Form.Label style={{marginTop: "0.5em"}}>Break time</Form.Label>
                <NumericInput
                  type="time"
                  className="break-time-input"
                  min={0}
                  step={15}
                  max={120}
                  value={breakTime}
                  onChange={time => setBreakTime(time)}
                />
              </Col>
              <Col>
              <Form.Label style={{marginTop: "0.5em"}}>Total time</Form.Label>
                <Form.Control
                  //className="mx-sm-3"
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
        {/* <MDBDatePickerV5 theme="warning" getValue={(e)=> console.log(e)} /> */}
      </Container>
    </div>
  );
}
