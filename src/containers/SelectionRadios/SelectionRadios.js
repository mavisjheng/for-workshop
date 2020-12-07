import React from "react";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { selectStatus } from "../../redux/modules/statusSelection";

const SelectionRadios = ({ radiosText, selected, onStatusSelected }) => (
  <Form>
    <div style={{ margin: "12px" }}>
      {radiosText.map((text) => (
        <Form.Check
          inline
          label={text}
          value={text}
          type="radio"
          onChange={(e) => onStatusSelected(e.target.value)}
          checked={selected === text}
          key={`selection-radio-${text}`}
        />
      ))}
    </div>
  </Form>
);

const mapStateToProps = (state) => ({
  selected: state.statusSelection.status,
});

const mapDispatchToProps = (dispatch) => ({
  onStatusSelected: (status) => dispatch(selectStatus(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectionRadios);
