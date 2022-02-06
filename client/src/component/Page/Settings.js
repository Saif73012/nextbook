import React, { useState, useEffect } from "react";
import MainNav from "../Element/MainNav";
import DashboardBanner from "./DashboardBanner";
import "../../main.sass";
import "./_dashboardPage.sass";
import "./_settings.sass";
import "./_dashBanner.sass";
import "./../Element/_profileCard.sass";
import logo from "../../assets/NextbookLogo.png";
import profilepic from "../../assets/img/profpic.svg";
import ButtonPair from "../Element/ButtonPair";
import Input from "../Form/Input";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { validate, checkEmtpy, getCurrentDate } from "./../../utlis";
import FloatingButton from "../Element/FloatingButton";

function Settings() {
  const userId = localStorage.getItem("user");
  const [userdata, setuserdata] = useState([]);
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [password, setpassword] = useState("");
  const [password2, setpassword2] = useState("");
  const [isUpdated, setisUpdated] = useState(false);
  const [email, setemail] = useState("");
  const REQUEST_PATCH = `/api/v1/user/${userId}`;
  const REQUEST_USER = `/api/v1/user/${userId}`;
  axios.defaults.headers.common["Authorization"] =
    "Bearer " + localStorage.getItem("key");

  const handlefirstname = (e) => {
    setfirstname(e.target.value);
  };
  const handlelastname = (e) => {
    setlastname(e.target.value);
  };

  const handleemail = (e) => {
    setemail(e.target.value);
  };

  const handlepassword = (e) => {
    setpassword(e.target.value);
  };

  const handlepassword2 = (e) => {
    setpassword2(e.target.value);
  };

  let passwordError = true;
  if (password.valueOf() !== '' || password.trim(' ')) {
    passwordError = validate(password, "password");
  }

  let password2Error = true;
  if (!checkEmtpy(password2)) {
    password2Error = validate(password2, "password2", password);
  }
  //get user Data
  // update userdata
  const updateUser = async () => {
    console.log("patch");
    try {
      if (password.valueOf() === '') { // if password textField empty
        await axios.patch(REQUEST_PATCH, {
          firstName: firstname,
          lastName: lastname,
          email: email,
        });
      }
      else {
        await axios.patch(REQUEST_PATCH, {
          firstName: firstname,
          lastName: lastname,
          email: email,
          password: password,
        });
      }

      setisUpdated(true);
      console.log("updated user");
      console.log(isUpdated);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(REQUEST_USER);
        setuserdata(data);
        setfirstname(data.firstName);
        setlastname(data.lastName);
        setemail(data.email);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    // eslint-disable-next-line
  }, []);
  let data = localStorage.getItem("key");
  if (data === null || data === "" || data === undefined)
    return <Redirect to="/login" />;

  let isDisabled = true;
  if (
    checkEmtpy(email) &&
    checkEmtpy(firstname) &&
    checkEmtpy(firstname) &&
    typeof emailError !== "string" &&
    typeof passwordError !== "string" &&
    typeof password2Error !== "string"
  )
    isDisabled = false;
  else isDisabled = true;
  return (
    <div className="settings-page">
      <Link to="/home">
        <img src={logo} alt="NextBook" id="nextbookLogo" />
      </Link>
      <MainNav />
      <FloatingButton />
      <main className="dashboard-wrapper">
        <DashboardBanner
          firstName={userdata.firstName}
          lastName={userdata.lastName}
          profilPicture={userdata.img}
        />

        <div className="settings-content-div">
          <p className="date">{getCurrentDate(".")}</p>
          <h1>Einstellungen</h1>
          <img className="pro-pic" src={profilepic} alt="Profilpicture" />
          <form>
            <Input
              inputTyp="text"
              title="Vorname"
              value={firstname}
              name="vorname"
              handleChange={handlefirstname}
            />
            <Input
              inputTyp="text"
              title="Nachname"
              value={lastname}
              name="nachname"
              handleChange={handlelastname}
            />
            <Input
              inputTyp="text"
              title="Email Adresse"
              value={email}
              name="email"
              handleChange={handleemail}
            />
            <Input
              inputTyp="text"
              title="Neues Passwort"
              name="password"
              passwort={true}
              value={password}
              handleChange={handlepassword}
              error={passwordError}
            />
            <Input
              inputTyp="text"
              title="Neues Passwort Bestätigen"
              name="password2"
              value={password2}
              handleChange={handlepassword2}
              error={password2Error}
            />
          </form>
          {isUpdated && <p>Deine Daten wurden aktualisiert</p>}
          <ButtonPair
            mainButtonTitle="speichern"
            subButtonTitle="abbrechen"
            linkSub="/home"
            onClickMain={updateUser}
            disable={isDisabled}
          />
        </div>
      </main>
    </div>
  );
}

export default Settings;
