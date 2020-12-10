import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { executeOperation } from "../../redux/modules/rolloutOperation";
import "./OperationButtons.css";

const OperationButtons = () => {
  const dispatch = useDispatch();
  return (
    <div className="operation-buttons">
      <Button
        variant="outline-primary"
        onClick={() => dispatch(executeOperation("start"))}
      >
        Start
      </Button>
      <Button
        variant="outline-secondary"
        onClick={() => dispatch(executeOperation("pause"))}
      >
        Pause
      </Button>
      <Button
        variant="outline-danger"
        onClick={() => dispatch(executeOperation("abort"))}
      >
        Abort
      </Button>
    </div>
  );
};

export default OperationButtons;
