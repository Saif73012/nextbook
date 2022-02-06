import React, { useState } from "react";
import ButtonPair from "../Element/ButtonPair";
import "../../main.sass";
import logo from "../../assets/NextbookLogo.png";
import Input from "../Form/Input";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import LandingPageNav from "../Element/LandingPageNav";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [passwort, setpasswort] = useState("");
  const [isError, setisError] = useState(false);
  const REQUEST_USER = "/login";
  let history = useHistory();
  // first try- its not so secure
  localStorage.setItem("key", "");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePasswort = (e) => {
    setpasswort(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(REQUEST_USER, {
        email: email,
        password: passwort,
      });
      localStorage.setItem("key", response.data.token);
      localStorage.setItem("user", response.data.id);
      history.push("/home");
    } catch (error) {
      setisError(true);
      console.log(error);
    }
  };

  return (
    <div className="login-page">
      <Link to="/">
        <img src={logo} alt="NextBook" id="nextbookLogo" />
      </Link>
      <LandingPageNav />
      <div className="content-wrapper">
        <h1 className="anmelden">Anmelden</h1>
        <form>
          <Input
            inputTyp="text1"
            title="Email"
            id="email"
            handleChange={handleChangeEmail}
            value={email}
          />
          <Input
            inputTyp="text1"
            title="Passwort"
            name="password"
            id="password"
            handleChange={handleChangePasswort}
            value={passwort}
          />
          {isError && (
            <p className="error">Deine Login Daten sind leider falsch</p>
          )}
        </form>
      </div>

      <ButtonPair
        mainButtonTitle="anmelden"
        subButtonTitle="home"
        linkSub="/"
        linkMain="/login"
        disable={false}
        onSubmit={handleSubmit}
        type="submit"
        onClickMain={handleSubmit}
      />
    </div>
  );
}
export default LoginPage;
