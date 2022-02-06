import React from "react";
import TextInput from "./TextInput";
import CheckboxInput from "./CheckboxInput";
import RadioInput from "./RadioInput";
import "./../../main.sass";
import AnmeldeInput from "./AnmeldeInput";

function Input({
  inputTyp,
  name,
  title,
  handleChange,
  value,
  error,
  isChecked,
  maxLength,
}) {
  let isPasswort = false;
  if (name === "password" || name === "password2") isPasswort = true;

  switch (inputTyp) {
    case "text":
      return (
        <TextInput
          title={title}
          handleChange={handleChange}
          value={value}
          name={name}
          id={title}
          password={isPasswort}
          error={error}
          maxLength={maxLength}
        />
      );
    case "text1":
      return (
        <AnmeldeInput
          title={title}
          value={value}
          name={name}
          id={title}
          onchange={handleChange}
          password={isPasswort}
        />
      );

    case "checkbox":
      return <CheckboxInput />;
    case "radio":
      return (
        <RadioInput
          value={value}
          name={name}
          id={value}
          isChecked={isChecked}
          handleChange={handleChange}
        />
      );
    default:
      return <p>Lit</p>;
  }
}

export default Input;
