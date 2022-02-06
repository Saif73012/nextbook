import React from "react";
import ButtonPair from "./../../Element/ButtonPair";
import Input from "../../Form/Input";
import "./../../../main.sass";
import { checkEmtpy } from "./../../../utlis";

function Question4({ increaseStep, decreaseStep, handleChange, size }) {
  let isDisabled = true;
  if (checkEmtpy(size) && !isNaN(size)) isDisabled = false;
  else isDisabled = true;
  return (
    <div className="guest-wrapper question4-wrapper">
      <div className="content-wrapper">
        <h1>Wie groß bist du denn ?</h1>
        <form>
          <Input
            inputTyp="text"
            title="Größe in cm"
            id="size"
            name="size"
            value={size}
            handleChange={handleChange}
            maxLength="3"
          />
        </form>
      </div>
      {isDisabled && <p>Bitte Trage nur Zahlen ein</p>}
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

export default Question4;
