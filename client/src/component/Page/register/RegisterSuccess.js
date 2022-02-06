import React from "react";
import ButtonPair from "./../../Element/ButtonPair";
import success from "../../../assets/img/success.svg";
import "./../../../main.sass";


function RegisterSuccess() {
  return (
    <div className="register-wrapper registerSuc-wrapper">
      <div className="content-wrapper">
        <img src={success} id='successImg' alt="Success !!" />
        <h1>Super, das ist geschafft. <br />
        Willkomen beim <b>Nextbook! </b>
        </h1>
        <ButtonPair
          mainButtonTitle="anmelden"
          subButtonTitle="home"
          linkSub="/"
          linkMain="/login"
          disable={false}
        />
      </div>

    </div>
  );
}

export default RegisterSuccess;
