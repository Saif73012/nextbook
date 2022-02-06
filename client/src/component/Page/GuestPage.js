import React from "react";
import logo from "../../assets/NextbookLogo.png";
import GuestFlow from "./GuestFlow";
import { Link } from "react-router-dom";
import './../../main.sass'

function GuestPage() {
  return (
    <div className="guest-page">
      <Link to="/">
        <img src={logo} alt="NextBook" id="nextbookLogo" />
      </Link>
      <GuestFlow />
    </div>
  );
}
export default GuestPage;
