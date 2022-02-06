import React from "react";
import ButtonPair from "./../../Element/ButtonPair";
import Input from "../../Form/Input";
import "./../../../main.sass";
import Black from "../../../assets/img/blackColor.svg";
import Blue from "../../../assets/img/blueColor.svg";
import Lightblue from "../../../assets/img/lightblueColor.svg";
import Red from "../../../assets/img/redColor.svg";
import Lightpink from "../../../assets/img/lightpinkColor.svg";
import Lila from "../../../assets/img/violetColor.svg";
import Green from "../../../assets/img/greenColor.svg";
import { checkEmtpy } from "./../../../utlis";

function Question5({ increaseStep, decreaseStep, handleChange, value }) {
  let isDisabled = true;
  if (checkEmtpy(value)) isDisabled = false;
  else isDisabled = true;
  return (
    <div className="guest-wrapper question5-wrapper">
      <div className="content-wrapper">
        <h1>Was ist deine Lieblingsfarbe ?</h1>
        <form className="radiobox-form">
          <div className="radiobox">
            <label htmlFor="black">
              <img src={Black} alt="Black Color" />
            </label>
            <Input
              inputTyp="radio"
              id="black"
              name="color"
              value="black"
              handleChange={handleChange}
            />
          </div>
          <div className="radiobox">
            <label htmlFor="blue">
              <img src={Blue} alt="Blue Color" />
            </label>
            <Input
              inputTyp="radio"
              id="blue"
              name="color"
              value="blue"
              handleChange={handleChange}
            />
          </div>
          <div className="radiobox">
            <label htmlFor="ligthblue">
              <img src={Lightblue} alt="Lightblue Color" />
            </label>
            <Input
              inputTyp="radio"
              id="ligthblue"
              name="color"
              value="ligthblue"
              handleChange={handleChange}
            />
          </div>
          <div className="radiobox">
            <label htmlFor="red">
              <img src={Red} alt="Red Color" />
            </label>
            <Input
              inputTyp="radio"
              id="red"
              name="color"
              value="red"
              handleChange={handleChange}
            />
          </div>
          <div className="radiobox">
            <label htmlFor="pink">
              <img src={Lightpink} alt="Lightpink Color" />
            </label>
            <Input
              inputTyp="radio"
              id="pink"
              name="color"
              value="pink"
              handleChange={handleChange}
            />
          </div>
          <div className="radiobox">
            <label htmlFor="lila">
              <img src={Lila} alt="Lila Color" />
            </label>
            <Input
              inputTyp="radio"
              id="lila"
              name="color"
              value="lila"
              handleChange={handleChange}
            />
          </div>
          <div className="radiobox">
            <label htmlFor="green">
              <img src={Green} alt="Green Color" />
            </label>
            <Input
              inputTyp="radio"
              id="green"
              name="color"
              value="green"
              handleChange={handleChange}
            />
          </div>
        </form>
      </div>
      {isDisabled && <p>Bitte wähle deine Lieblingsfarbe aus</p>}
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

export default Question5;
