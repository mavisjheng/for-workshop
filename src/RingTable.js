import React from "react";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";

const getBadgeVariant = (status) => {
  switch (status) {
    case "Complete":
      return "success";

    case "Ongoing":
      return "warning";

    case "Failed":
      return "danger";

    case "Aborted":
      return "dark";

    default:
      return "secondary";
  }
};

const RingTable = ({ rows }) => (
  <Table bordered>
    <thead>
      <tr>
        <th></th>
        <th>Rollout Status</th>
        <th>Windows</th>
        <th>Linux</th>
        <th>Unix</th>
      </tr>
    </thead>
    <tbody>
      {rows.map((row, index) => (
        <tr key={`ring-row-${index}`}>
          <td>{row.target}</td>
          <td>
            <Badge variant={getBadgeVariant(row.status)}>{row.status}</Badge>
          </td>
          <td>{row.windows}</td>
          <td>{row.linux}</td>
          <td>{row.unix}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default RingTable;
