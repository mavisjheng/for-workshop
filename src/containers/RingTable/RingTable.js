import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import { useDispatch, useSelector } from "react-redux";
import { setRings } from "../../redux/modules/rings";

const operationTransition = {
  start: "Ongoing",
  pause: "Paused",
  abort: "Aborted",
};

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

const RingTable = () => {
  const dispatch = useDispatch();
  const rings = useSelector((state) => state.rings.rings);
  const statusToShow = useSelector((state) => state.statusSelection.status);
  const rolloutOperation = useSelector(
    (state) => state.rolloutOperation.operation
  );
  const [allData, setAllData] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/adc0e655-b26f-4738-a0d8-9cc976a8fa36")
      .then((response) => response.json())
      .then((data) => dispatch(setRings(data)));
  }, []);

  useEffect(() => {
    setAllData(rings);
    setDisplayedData(rings);
  }, [rings]);

  useEffect(() => {
    const filteredData =
      statusToShow === "All"
        ? allData
        : allData.filter((data) => data.status === statusToShow);
    setDisplayedData(filteredData);
  }, [statusToShow, allData]);

  useEffect(() => {
    const changedData = allData.map((data) => ({
      ...data,
      status:
        data.status === "Paused" || data.status === "Ongoing"
          ? operationTransition[rolloutOperation]
          : data.status,
    }));
    setAllData(changedData);
  }, [rolloutOperation]);

  return (
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
        {displayedData.map((row, index) => (
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
};

export default RingTable;
