import React from "react";
import Form from "react-bootstrap/Form";

const SelectionRadios = ({ radiosText, selected, onSelect }) => (
  <Form>
    <div style={{ margin: "12px" }}>
      {radiosText.map((text) => (
        <Form.Check
          inline
          label={text}
          value={text}
          type="radio"
          onChange={(e) => onSelect(e.target.value)}
          checked={selected === text}
          key={`selection-radio-${text}`}
        />
      ))}
    </div>
  </Form>
);

export default SelectionRadios;
