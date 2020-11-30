import React, { useState } from "react";
import { Table, Button, Container, Row } from "react-bootstrap";
import { CSVLink } from "react-csv";
import "./TaskTable.scss";

export default function TaskTable({ tasks, deleteTasksFromTable }) {
  console.log(tasks);

  const deleteTask = (task_id) => {
    let confirmDelete = window.confirm("Delete task forever?");
    if (confirmDelete) {
      fetch(`/tasks/$task_id`, {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task_id,
        }),
      })
        .then((resp) => resp.json())
        .then((item) => {
          deleteTasksFromTable(task_id);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <Container
      id="taskTable"
      className="border-light shadow p-3 mb-5 rounded py-3 px-3"
    >
      <Table border responsive hover>
        <thead className="thead-dark">
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Project name</th>
            <th scope="col">Task</th>
            <th scope="col">Date</th>
            <th scope="col">Start time</th>
            <th scope="col">End time</th>
            <th scope="col">Break time</th>
            <th scope="col">Total time</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        {tasks &&
          tasks.map((item, index) => {
            return (
              <>
                <tbody>
                  <tr key={index}>
                    <td>{item.username}</td>
                    <td>{item.project_name}</td>
                    <td>{item.task_name}</td>
                    <td>{item.task_create_at}</td>
                    <td>{item.start_time}</td>
                    <td>{item.end_time}</td>
                    <td>{item.break_time}</td>
                    <td>{item.total_time}</td>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <Button variant="success">Edit</Button>
                      <Button
                        variant="danger"
                        onClick={() => deleteTask(item.task_id)}
                      >
                        Del
                      </Button>
                    </div>
                  </tr>
                </tbody>
              </>
            );
          })}
      </Table>
      <Row>
            <CSVLink
              filename={"task.csv"}
              color="primary"
              style={{float: "left", marginLeft: "1em"}}
              className="btn btn-primary"
              data={tasks}>
              Download CSV
            </CSVLink>
          </Row>
    </Container>
  );
}
