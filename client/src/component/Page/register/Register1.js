import React from "react";
import ButtonPair from "./../../Element/ButtonPair";
import profpic from "../../../assets/img/profpic.svg";
import "./../../../main.sass";

function Register1({ increaseStep }) {
  return (
    <div className="register-wrapper">
      <div className="content-wrapper">
        <img src={profpic} alt="Profilbild Avatar" />
        <h1><b>Hey!</b></h1>
        <h2>
          <strong>Newcomer</strong>
        </h2>
        <h3>
          Wir brauchen noch ein paar Informationen, <br />
          damit es losgehen kann und du dir dein <br />
          eigenes Nextbook anlegen kannst.
        </h3>
        <ButtonPair
          mainButtonTitle="weiter"
          subButtonTitle="abbrechen"
          onClickMain={increaseStep}
          linkSub="/"
          disable={false}
        />
      </div>


    </div>
  );
}

export default Register1;