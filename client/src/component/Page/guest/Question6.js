import React from "react";
import ButtonPair from "./../../Element/ButtonPair";
import Input from "../../Form/Input";
import "./../../../main.sass";
import HairBlack from "../../../assets/img/hairBlack.svg";
import HairBrown from "../../../assets/img/hairBrown.svg";
import HairBrownDark from "../../../assets/img/hairBrownDark.svg";
import HairBlonde from "../../../assets/img/hairBlonde.svg";
import HairGold from "../../../assets/img/hairGold.svg";
import HairRed from "../../../assets/img/hairRed.svg";
import { checkEmtpy } from "./../../../utlis";

function Question6({ increaseStep, decreaseStep, handleChange, value }) {
  let isDisabled = true;
  if (checkEmtpy(value)) isDisabled = false;
  else isDisabled = true;
  return (
    <div className="guest-wrapper question6-wrapper">
      <div className="content-wrapper">
        <h1>Was ist deine Haarfarbe ?</h1>
        <form className="radiobox-form">
          <div className="radiobox">
            <label htmlFor="black">
              <img src={HairBlack} alt="Black Color" />
            </label>
            <Input
              inputTyp="radio"
              id="black"
              name="hair"
              value="black"
              handleChange={handleChange}
            />
          </div>
          <div className="radiobox">
            <label htmlFor="brown">
              <img src={HairBrown} alt="brown Color" />
            </label>
            <Input
              inputTyp="radio"
              id="brown"
              name="hair"
              value="brown"
              handleChange={handleChange}
            />
          </div>
          <div className="radiobox">
            <label htmlFor="darkbrown">
              <img src={HairBrownDark} alt="darkbrown Color" />
            </label>
            <Input
              inputTyp="radio"
              id="darkbrown"
              name="hair"
              value="darkbrown"
              handleChange={handleChange}
            />
          </div>
          <div className="radiobox">
            <label htmlFor="blonde">
              <img src={HairBlonde} alt="blonde Color" />
            </label>

            <Input
              inputTyp="radio"
              id="blonde"
              name="hair"
              value="blonde"
              handleChange={handleChange}
            />
          </div>
          <div className="radiobox">
            <label htmlFor="gold">
              <img src={HairGold} alt="gold Color" />
            </label>
            <Input
              inputTyp="radio"
              id="gold"
              name="hair"
              value="gold"
              handleChange={handleChange}
            />
          </div>
          <div className="radiobox">
            <label htmlFor="red">
              <img src={HairRed} alt="red Color" />
            </label>
            <Input
              inputTyp="radio"
              id="red"
              name="hair"
              value="red"
              handleChange={handleChange}
            />
          </div>
        </form>
      </div>
      {isDisabled && <p>Bitte wähle deine Haarfarbe aus</p>}
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

export default Question6;
