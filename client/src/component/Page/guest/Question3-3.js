import React from "react";
import ButtonPair from "../../Element/ButtonPair";
import Input from "../../Form/Input";
import "./../../../main.sass";
import { checkEmtpy } from "./../../../utlis";

function Question3({ increaseStep, decreaseStep, handleChange, food }) {
  let isDisabled = true;
  if (checkEmtpy(food)) isDisabled = false;
  else isDisabled = true;
  return (
    <div className="guest-wrapper question3-wrapper">
      <div className="content-wrapper">
        <h1>Was ist dein Lieblingsessen</h1>
        <form>
          <Input
            inputTyp="text"
            title="Lieblingsessen"
            id="food"
            name="food"
            value={food}
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
