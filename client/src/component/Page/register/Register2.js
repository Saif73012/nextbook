import React from "react";
import ButtonPair from "./../../Element/ButtonPair";
import Input from "../../Form/Input";
import "./../../../main.sass";
import { checkEmtpy } from './../../../utlis'

function Register2({
  increaseStep,
  decreaseStep,
  handleChange,
  firstName,
  lastName,
  email,
  password,
  password2,
  emailError,
  passwordError,
  password2Error
}) {
  let isDisabled = true;
  if (checkEmtpy(email) && checkEmtpy(firstName) && checkEmtpy(lastName) && checkEmtpy(password2) && checkEmtpy(password) && typeof emailError !== 'string' && typeof passwordError !== 'string' && typeof password2Error !== 'string') isDisabled = false;
  else isDisabled = true;
  return (
    <div className="register-wrapper register2-wrapper">
      <div className="content-wrapper">

        <form>
          <Input
            inputTyp="text"
            title="Vorname"
            id='vorname'
            name='firstName'
            value={firstName}
            handleChange={handleChange}
          />
          <Input
            inputTyp="text"
            title="Nachname"
            name='lastName'
            value={lastName}
            handleChange={handleChange}
          />
          <Input
            inputTyp="text"
            title="Email"
            name='email'
            error={emailError}
            value={email}
            handleChange={handleChange}
          />
          <Input
            inputTyp="text"
            title="Passwort"
            name='password'
            value={password}
            error={passwordError}
            handleChange={handleChange}
          />
          <Input
            inputTyp="text"
            title="Passwort bestätigen"
            name='password2'
            value={password2}
            error={password2Error}
            handleChange={handleChange}
          />
        </form>
        {isDisabled && <p className='error'>Alle Felder müssen ausgefüllt werden</p>}
        <ButtonPair
          mainButtonTitle="weiter"
          subButtonTitle="zurück"
          onClickMain={increaseStep}
          onClickSub={decreaseStep}
          disable={isDisabled}
        />
      </div>


    </div>
  );
}

export default Register2;
