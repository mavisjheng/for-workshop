import React from "react";
import Button from "react-bootstrap/Button";
import "./OperationButtons.css";

const OperationButtons = ({ onClick }) => (
  <div className="operation-buttons">
    <Button variant="outline-primary" onClick={() => onClick("start")}>
      Start
    </Button>
    <Button variant="outline-secondary" onClick={() => onClick("pause")}>
      Pause
    </Button>
    <Button variant="outline-danger" onClick={() => onClick("abort")}>
      Abort
    </Button>
  </div>
);

export default OperationButtons;
