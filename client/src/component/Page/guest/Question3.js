import React from "react";
import ButtonPair from "./../../Element/ButtonPair";
import Input from "../../Form/Input";
import "./../../../main.sass";
import { checkEmtpy } from "./../../../utlis";

function Question3({ increaseStep, decreaseStep, handleChange, birthday }) {
  let isDisabled = true;
  if (checkEmtpy(birthday)) isDisabled = false;
  else isDisabled = true;
  return (
    <div className="guest-wrapper question3-wrapper">
      <div className="content-wrapper">
        <h1>Wann hast du Geburtstag ?</h1>
        <form>
          <Input
            inputTyp="text"
            title="Geburtstag"
            id="birthday"
            name="birthday"
            value={birthday}
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

export default Question3;
