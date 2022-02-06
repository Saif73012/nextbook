import React from "react";
import ButtonPair from "../../Element/ButtonPair";
import Input from "../../Form/Input";
import "./../../../main.sass";
import { checkEmtpy } from "./../../../utlis";

function Question9({ increaseStep, decreaseStep, handleChange, proud }) {
  let isDisabled = true;
  if (checkEmtpy(proud)) isDisabled = false;
  else isDisabled = true;
  return (
    <div className="guest-wrapper question9-wrapper">
      <div className="content-wrapper">
        <h1>Worauf bist du besonders stolz ?</h1>
        <form>
          <Input
            inputTyp="text"
            title="Stolz auf"
            id="proud"
            name="proud"
            value={proud}
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

export default Question9;
