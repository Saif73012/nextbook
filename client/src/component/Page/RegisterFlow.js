import React, { useState, useReducer } from "react";
import Register1 from "./register/Register1";
import Register2 from "./register/Register2";
import Register3 from "./register/Register3";
import RegisterSuccess from "./register/RegisterSuccess";
import { validate } from './../../utlis'
import axios from "axios";


const REQUEST_USER = '/api/v1/user';

const initalState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  password2: '',
  img: ''
};



function fieldReducer(state, action) {
  return {
    ...state,
    [action.fieldName]: action.fieldValue
  }
}
// navigate from register-step to register step using switch
function RegisterFlow() {
  const [img, setimage] = useState('');
  const setImage = (image) => {
    setimage(image)
  }
  const [step, setStep] = useState(1);

  const increaseStep = () => {
    setStep(step + 1);
  };
  const decreaseStep = () => {
    setStep(step - 1);
  };

  const [fieldValues, dispatchFieldAction] = useReducer(fieldReducer, initalState)

  const handleChange = (e) => {
    dispatchFieldAction({ fieldName: e.target.name, fieldValue: e.target.value })
  };


  const handleSubmit = async (e) => {
    try {
      await axios.post(REQUEST_USER, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        img: img
      })
        .then(increaseStep);

    }
    catch (error) {
      console.log(error)
    }
  };

  const emailError = validate(fieldValues.email, 'email');
  const passwordError = validate(fieldValues.password, 'password');
  const password2Error = validate(fieldValues.password2, 'password2', fieldValues.password);
  const { firstName, lastName, email, password, password2 } = fieldValues;
  switch (step) {
    case 1:
      return <Register1 increaseStep={increaseStep} />;
    case 2:
      return (
        <Register2
          increaseStep={increaseStep}
          decreaseStep={decreaseStep}
          handleChange={handleChange}
          firstName={firstName}
          lastName={lastName}
          email={email}
          password={password}
          password2={password2}
          emailError={emailError}
          passwordError={passwordError}
          password2Error={password2Error}
        />

      );
    case 3:
      return (
        <Register3 increaseStep={increaseStep} handleSubmit={handleSubmit} onSubmit={handleSubmit} decreaseStep={decreaseStep} setImage={setImage} />
      );
    case 4:
      return <RegisterSuccess />;
    default:
      return <p>Lit</p>;
  }
}

export default RegisterFlow;
