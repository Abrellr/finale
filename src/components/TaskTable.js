import React from 'react'

export default function TaskTable() {
    return (
        <div>
            <Table responsive hover>
        <thead>
          <tr>
            <th>Project</th>
            <th>Task</th>
            <th>Date</th>
            <th>Start time</th>
            <th>End time</th>
            <th>Break time</th>
            <th>Total time</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
        </div>
    )
}
