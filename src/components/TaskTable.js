import React from "react";
import { Table, Button, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CSVLink } from "react-csv";
import "./TaskTable.scss";

export default function TaskTable({ tasks, projects, setTasks, match }) {
  console.log(tasks);
  console.log(projects);

  const deleteTask = ({ task_id }) => {
    fetch(`/tasks/${task_id}`, {
      method: "DELETE",
    })
      .then((resp) => {
        if (!resp.ok) throw new Error("Error during task deletion");
        resp.json();
      })
      .then((data) =>
        setTasks((prevTasks) =>
          prevTasks.filter((task) => task.task_id !== task_id)
        )
      )
      .catch((err) => console.log(err.message));
  };

  return (
    <Container
      id="taskTable"
      className="border-light shadow p-3 mb-5 rounded py-3 px-3"
    >
      <Table border responsive hover>
        <thead className="thead-dark">
          <tr>
            {/* <th scope="col">Username</th> */}
            <th scope="col">Project name</th>
            <th scope="col">Task</th>
            <th scope="col">Start time</th>
            <th scope="col">End time</th>
            <th scope="col">Total hours</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        {tasks &&
          tasks.map((task, idx) => {
            console.log(task);
            return (
              <>
                <tbody key={idx}>
                  <tr key={task.task_id}>
                    <td>{task.project_name}</td>
                    <td>{task.task_name}</td>
                    <td>{task.start_time}</td>
                    <td>{task.end_time}</td>
                    <td>
                      {/* {task.total_time.toLocalTimeString()} */}
                      {task.total_time.hours}hr(s) {task.total_time.minutes}
                      minutes
                    </td>
                    <td style={{ display: "flex", flexDirection: "row" }}>
                      <Button variant="danger" onClick={() => deleteTask(task)}>
                        Del
                      </Button>
                    </td>
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
          style={{ float: "left", marginLeft: "1em" }}
          className="btn btn-primary"
          data={tasks && tasks.map(task => {
            return{
              ...task,
              total_time: `${task.total_time.hours || '0'} hours, ${task.total_time.minutes || '0'} minutes, ${task.total_time.seconds || '0'} seconds`
            };
          })}
        >
          Download CSV
        </CSVLink>
      </Row>
    </Container>
  );
}
