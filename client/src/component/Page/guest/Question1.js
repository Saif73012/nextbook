import React from "react";
import ButtonPair from "./../../Element/ButtonPair";
import Superhero from "../../../assets/img/undraw_superhero.svg";
import Superwoman from "../../../assets/img/undraw_super_woman.svg";
import genderDiverse from "./../../../assets/img/undraw_diverseheroV2.svg";
import Input from "../../Form/Input";
import "./../../../main.sass";
import { checkEmtpy } from "./../../../utlis";

function Question1({ increaseStep, decreaseStep, handleChange, value }) {
  let isDisabled = true;
  if (checkEmtpy(value)) isDisabled = false;
  else isDisabled = true;
  return (
    <div className="guest-wrapper question1-wrapper">
      <div className="content-wrapper">
        <h1>Welches Geschlecht hast du ?</h1>
        <form className="gender-wrapper">
          <div className="radiobox">
            <label htmlFor="female">
              <img id="femalePicture" src={Superwoman} alt="Superwoman" />
            </label>
            <Input
              inputTyp="radio"
              name="gender"
              id="female"
              value="female"
              handleChange={handleChange}
            />
          </div>
          <div className="radiobox">
            <label htmlFor="male">
              <img id="malePicture" src={Superhero} alt="Superhero" />
            </label>
            <Input
              inputTyp="radio"
              name="gender"
              id="male"
              value="male"
              handleChange={handleChange}
            />
          </div>
          <div className="radiobox">
            <label htmlFor="divers">
              <img id="diversePicture" src={genderDiverse} alt="Superdivers" />
            </label>
            <Input
              inputTyp="radio"
              name="gender"
              id="divers"
              value="divers"
              handleChange={handleChange}
            />
          </div>
        </form>
      </div>
      {isDisabled && <p>Du musst ein Geschlecht wählen</p>}
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

export default Question1;
