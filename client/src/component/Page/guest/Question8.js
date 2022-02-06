import React from "react";
import ButtonPair from "./../../Element/ButtonPair";
import Input from "../../Form/Input";
import "./../../../main.sass";
import { checkEmtpy } from "./../../../utlis";

function Question8({ increaseStep, decreaseStep, handleChange, know }) {
  let isDisabled = true;
  if (checkEmtpy(know)) isDisabled = false;
  else isDisabled = true;
  return (
    <div className="guest-wrapper question8-wrapper">
      <div className="content-wrapper">
        <h1>Wie haben wir uns kennengelernt ?</h1>
        <form>
          <Input
            inputTyp="text"
            title="Kennengelernt"
            id="know"
            name="know"
            value={know}
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

export default Question8;
