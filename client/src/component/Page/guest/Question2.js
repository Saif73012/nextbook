import React from "react";
import ButtonPair from "./../../Element/ButtonPair";
import Input from "../../Form/Input";
import "./../../../main.sass";
import { checkEmtpy } from "./../../../utlis";

function Question2({ increaseStep, decreaseStep, handleChange, name }) {
  let isDisabled = true;
  if (checkEmtpy(name)) isDisabled = false;
  else isDisabled = true;
  return (
    <div className="guest-wrapper question2-wrapper">
      <div className="content-wrapper">
        <h1>Wie heißt du ?</h1>
        <form>
          <Input
            inputTyp="text"
            title="Name"
            id="name"
            name="name"
            value={name}
            handleChange={handleChange}
          />
        </form>
      </div>
      {isDisabled && <p>Du musst die Frage beantworten</p>}
      <ButtonPair
        mainButtonTitle="weiter"
        subButtonTitle="zurück"
        onClickMain={increaseStep}
        onClickSub={decreaseStep}
        disable={isDisabled}
      />
    </div>
  );
}

export default Question2;
