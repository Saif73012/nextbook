import React from "react";
import ButtonPair from "../../Element/ButtonPair";
import success from "../../../assets/img/success.svg";
import "./../../../main.sass";

function GuestSuccess() {
  return (
    <div className="guest-success-wrapper">
      <div className="content-wrapper">
        <img src={success} id="successImg" alt="Success !!" />
        <h1>
          Heey cool,
          <br />
          Du bist fertig
          <br />
          Danke!!
          <br />
        </h1>
      </div>
      <ButtonPair
        mainButtonTitle="registieren"
        subButtonTitle="home"
        linkSub="/"
        linkMain="/login"
        disable={false}
      />
    </div>
  );
}

export default GuestSuccess;
