import React, { useState } from 'react'
import { Table, Button } from "react-bootstrap"

export default function TaskTable({ tasks, deleteTasksFromTable }) {
  console.log(tasks)


  const deleteTask = task_id => {
    let confirmDelete = window.confirm('Delete task forever?')
    if(confirmDelete) {
      fetch(`/tasks/$task_id`, {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          task_id
        })
      })
      .then(resp => resp.json())
      .then(item => {
        deleteTasksFromTable(task_id)
      })
      .catch(err => console.log(err))
    }
  }
    return (
        <div>
        <Table responsive hover>
        <thead className="thead-dark">
          <tr>
            <th scope="col">Project_Id</th>
            <th scope="col">Task</th>
            <th scope="col">Date</th>
            <th scope="col">Start time</th>
            <th scope="col">End time</th>
            <th scope="col">Break time</th>
            <th scope="col">Total time</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        
          {tasks && tasks.map((item, index) => {
            return(
              <>
              <tbody>
              <tr key={index}>
              <td>{item.project_id}</td>
              <td>{item.task_name}</td>
              <td>{item.task_create_at}</td>
              <td>{item.start_time}</td>
              <td>{item.end_time}</td>
              <td>{item.break_time}</td>
              <td>{item.total_time}</td>
              <div style={{ display: "flex", flexDirection: "row"}}>
              <Button variant="success">Edit</Button>
              <Button variant="danger" onClick={() => deleteTask(item.task_id)}>Del</Button>
              </div>
              </tr>
              </tbody>
              </>
            )
          })}
      </Table>
        </div>
    )
}
