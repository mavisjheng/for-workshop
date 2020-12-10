import React from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { selectStatus } from "../../redux/modules/statusSelection";

const SelectionRadios = ({ radiosText }) => {
  const selected = useSelector((state) => state.statusSelection.status);
  const dispatch = useDispatch();
  return (
    <Form>
      <div style={{ margin: "12px" }}>
        {radiosText.map((text) => (
          <Form.Check
            inline
            label={text}
            value={text}
            type="radio"
            onChange={(e) => dispatch(selectStatus(e.target.value))}
            checked={selected === text}
            key={`selection-radio-${text}`}
          />
        ))}
      </div>
    </Form>
  );
};

export default SelectionRadios;
