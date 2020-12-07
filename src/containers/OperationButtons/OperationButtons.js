import React from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { executeOperation } from "../../redux/modules/rolloutOperation";
import "./OperationButtons.css";

const OperationButtons = ({ onOperationExecuted }) => (
  <div className="operation-buttons">
    <Button
      variant="outline-primary"
      onClick={() => onOperationExecuted("start")}
    >
      Start
    </Button>
    <Button
      variant="outline-secondary"
      onClick={() => onOperationExecuted("pause")}
    >
      Pause
    </Button>
    <Button
      variant="outline-danger"
      onClick={() => onOperationExecuted("abort")}
    >
      Abort
    </Button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  onOperationExecuted: (operation) => dispatch(executeOperation(operation)),
});

export default connect(null, mapDispatchToProps)(OperationButtons);
