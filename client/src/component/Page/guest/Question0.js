import React from "react";
import ButtonPair from "./../../Element/ButtonPair";
import "./../../../main.sass";

function Question0({ increaseStep }) {
  return (
    <div className="guest-wrapper question0-wrapper">
      <div className="content-wrapper">
        <h1 className="red">Hey Du !</h1>
        <p>
          Ich hätte dich gerne als Freund in meinem <br />
          <b className="red">Nextbook </b> <br /> <br />
          bitte, bitte beantworte alle Fragen für Mich :) <br />
          Je kreativer du die Fragen beantwortest, desto besser !
        </p>
        <ButtonPair
          mainButtonTitle="start"
          onClickMain={increaseStep}
          disable={false}
          onlyMain={true}
        />
      </div>
    </div>
  );
}

export default Question0;
