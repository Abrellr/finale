import React, { useState } from "react";
import { Table, Button, Container, Row } from "react-bootstrap";
import { CSVLink } from "react-csv";
import "./TaskTable.scss";

export default function TaskTable({ tasks, match,params }) {
  console.log(tasks);

  const [updatedTasks, setUpdatedTasks] = useState();

  console.log(params)
  console.log(match)

  const deleteTask = (id) => {

      //const id = match.params.id
      fetch(`/tasks/${id}`, {
        method: "DELETE",
        })
        .then((resp) => resp.json())
        .then((data) => console.log(data))

        .catch((err) => console.log(err))
    
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
          tasks.map((item) => {
            return (
              <>
                <tbody>
                  <tr key={item.task_id}>
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
