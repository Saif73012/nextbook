import React, { useState } from "react";
import "./../../main.sass";

function TextInput({
  title,
  error,
  name,
  id,
  password,
  value,
  handleChange,
  maxLength,
}) {
  const [isEmpty, setisEmpty] = useState(true);
  const [wasClicked, setwasClicked] = useState(false);

  function checkEmpty() {
    if (value !== "" && value.trim(" ")) setisEmpty(false);
    else setisEmpty(true);
  }
  return (
    <>
      <div className="input-wrapper">
        <input
          name={name}
          maxLength={maxLength}
          required
          type={password ? "password" : "text"}
          id={id}
          value={value}
          onChange={(e) => {
            handleChange(e);
            checkEmpty();
          }}
          onClick={() => {
            if (!wasClicked) setwasClicked(true);
          }}
          onKeyUp={() => {
            checkEmpty();
          }}
        ></input>
        <label>{title}</label>
      </div>
      {isEmpty && wasClicked && (
        <p className="error">{title} muss ausgefüllt sein</p>
      )}
      {error && wasClicked && !isEmpty && (
        <p p className="error">
          {error}
        </p>
      )}
    </>
  );
}

export default TextInput;
