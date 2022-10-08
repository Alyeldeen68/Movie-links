import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import "./filterSize.css";
import { filter, filterSize, original } from "./moviesReducer";
const FilterSize = () => {
  const dispatch = useDispatch();
  const action = useSelector((state) => state.movies.nameAction);
  const [value, setValue] = useState(true);

  const handleClick = (e) => {
    // checkbox.checked = true;
  };
  return (
    <div className="main">
      <Form.Check
        type="checkbox"
        label="L"
        className="checkoption"
        onChange={() => {
          setValue(!value);
          if (value) {
            dispatch(filter({ name: action, size: "L" }));
          } else {
            dispatch(filter({ name: action, size: "" }));
          }
        }}
        name="L"
      />

      <Form.Check
        type="checkbox"
        label="M"
        className="checkoption"
        onChange={() => {
          setValue(!value);
          if (value) {
            dispatch(filter({ name: action, size: "M" }));
          } else {
            dispatch(filter({ name: action, size: "" }));
          }
        }}
        name="L"
      />
    </div>
  );
};

export default FilterSize;
