import React from "react";

function RadioInput({ name, id, value, handleChange }) {
  return <>
    <input
      name={name}
      type={'radio'}
      id={id}
      value={value}
      onChange={(e) => { handleChange(e); }}
    >
    </input>
  </ >;
}

export default RadioInput;
