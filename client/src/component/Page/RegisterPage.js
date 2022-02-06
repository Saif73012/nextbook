import React from "react";
import logo from "../../assets/NextbookLogo.png";
import RegisterFlow from "./RegisterFlow";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div className="register-page">
      <Link to="/">
        <img src={logo} alt="NextBook" id="nextbookLogo" />
      </Link>
      <RegisterFlow />
    </div>
  );
}
export default RegisterPage;
