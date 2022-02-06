import React from "react";
import ButtonPair from "./../../Element/ButtonPair";
import Input from "../../Form/Input";
import "./../../../main.sass";
import { checkEmtpy } from "./../../../utlis";

function Question7({ increaseStep, decreaseStep, handleChange, eyecolor }) {
  let isDisabled = true;
  if (checkEmtpy(eyecolor)) isDisabled = false;
  else isDisabled = true;
  return (
    <div className="guest-wrapper question7-wrapper">
      <div className="content-wrapper">
        <h1>Was ist deine Augenfarbe ?</h1>
        <form>
          <Input
            inputTyp="text"
            title="z.B. Blau"
            id="eyecolor"
            name="eyecolor"
            value={eyecolor}
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

export default Question7;
