import React, { useState, useReducer } from "react";
import Question0 from "./guest/Question0";
import Question1 from "./guest/Question1";
import Question2 from "./guest/Question2";
import Question3 from "./guest/Question3";
import Question31 from "./guest/Question3-1";
import Question32 from "./guest/Question3-2";
import Question33 from "./guest/Question3-3";
import Question4 from "./guest/Question4";
import Question5 from "./guest/Question5";
import Question6 from "./guest/Question6";
import Question7 from "./guest/Question7";
import Question8 from "./guest/Question8";
import Question9 from "./guest/Question9";
import Question91 from "./guest/Question9-1";
import Question92 from "./guest/Question9-2";
import GuestPicUpload from "./guest/GuestPicUpload";
import GuestPaintSection from "./guest/GuestPaintSection";
import GuestSuccess from "./guest/GuestSuccess";
import GuestGif from "./guest/GuestGif";
import axios from "axios";

const initalState = {
  name: "",
  birthday: "",
  gender: "",
  size: "",
  hair: "",
  eyecolor: "",
  know: "",
  superpower: "",
  picture: "",
  draw: "",
  color: "",
  meme: "",
  pet: "",
  smthToDieFor: "",
  city: "",
  proud: "",
  food: "",
};

function fieldReducer(state, action) {
  return {
    ...state,
    [action.fieldName]: action.fieldValue,
  };
}
const url = window.location.pathname.split("/");
const userID = url[2];
const token = url[3];
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

// navigate from register-step to register step using switch
function GuestFlow() {
  const [image, setimage] = useState("");
  const setImage = (image) => {
    setimage(image);
  };
  const [meme, setMeme] = useState(
    "https://media.giphy.com/media/3o6gbbuLW76jkt8vIc/giphy.gif"
  );
  const [draw, setDraw] = useState();
  const [step, setStep] = useState(1);

  const increaseStep = () => {
    setStep(step + 1);
  };
  const decreaseStep = () => {
    setStep(step - 1);
  };
  const REQUEST_POST = "/api/v1/post";
  const submitPost = async () => {
    try {
      await axios
        .post(REQUEST_POST, {
          name: name,
          owner: userID,
          birth: birthday,
          color: color,
          city: city,
          gender: gender,
          size: size,
          eyes: eyecolor,
          haircolor: hair,
          getToKnow: know,
          food: food,
          superpower: superpower,
          smthToDieFor: smthToDieFor,
          meme: meme,
          proud: proud,
          pet: pet,
          selfie: image,
          drawing: draw,
        })
        .then(increaseStep);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const [fieldValues, dispatchFieldAction] = useReducer(
    fieldReducer,
    initalState
  );

  const handleChange = (e) => {
    dispatchFieldAction({
      fieldName: e.target.name,
      fieldValue: e.target.value,
    });
  };
  const {
    name,
    birthday,
    gender,
    size,
    color,
    hair,
    eyecolor,
    know,
    food,
    superpower,
    proud,
    pet,
    smthToDieFor,
    city,
  } = fieldValues;
  switch (step) {
    case 1:
      // start
      return <Question0 increaseStep={increaseStep} />;
    case 2:
      //gender
      return (
        <Question1
          increaseStep={increaseStep}
          decreaseStep={decreaseStep}
          handleChange={handleChange}
          value={gender}
        />
      );
    case 3:
      // name
      return (
        <Question2
          increaseStep={increaseStep}
          decreaseStep={decreaseStep}
          handleChange={handleChange}
          name={name}
        />
      );
    case 4:
      // birthday
      return (
        <Question3
          increaseStep={increaseStep}
          decreaseStep={decreaseStep}
          birthday={birthday}
          handleChange={handleChange}
        />
      );
    case 5:
      // size
      return (
        <Question4
          increaseStep={increaseStep}
          decreaseStep={decreaseStep}
          size={size}
          handleChange={handleChange}
        />
      );
    case 6:
      // city
      return (
        <Question31
          increaseStep={increaseStep}
          decreaseStep={decreaseStep}
          city={city}
          handleChange={handleChange}
        />
      );
    case 7:
      // pet
      return (
        <Question32
          increaseStep={increaseStep}
          decreaseStep={decreaseStep}
          pet={pet}
          handleChange={handleChange}
        />
      );
    case 8:
      // food
      return (
        <Question33
          increaseStep={increaseStep}
          decreaseStep={decreaseStep}
          food={food}
          handleChange={handleChange}
        />
      );
    case 9:
      //color - radiobutton
      return (
        <Question5
          increaseStep={increaseStep}
          decreaseStep={decreaseStep}
          handleChange={handleChange}
          value={color}
        />
      );
    case 10:
      // hair- radiobutton
      return (
        <Question6
          increaseStep={increaseStep}
          decreaseStep={decreaseStep}
          handleChange={handleChange}
          value={hair}
        />
      );
    case 11:
      // eye color
      return (
        <Question7
          increaseStep={increaseStep}
          decreaseStep={decreaseStep}
          handleChange={handleChange}
          eyecolor={eyecolor}
        />
      );
    case 12:
      // where do we know each other
      return (
        <Question8
          increaseStep={increaseStep}
          decreaseStep={decreaseStep}
          know={know}
          handleChange={handleChange}
        />
      );
    case 13:
      // superpower
      return (
        <Question9
          increaseStep={increaseStep}
          decreaseStep={decreaseStep}
          superpower={superpower}
          handleChange={handleChange}
        />
      );
    case 14:
      // something to die for
      return (
        <Question91
          increaseStep={increaseStep}
          decreaseStep={decreaseStep}
          smthToDieFor={smthToDieFor}
          handleChange={handleChange}
        />
      );
    case 15:
      // proud
      return (
        <Question92
          increaseStep={increaseStep}
          decreaseStep={decreaseStep}
          proud={proud}
          handleChange={handleChange}
        />
      );
    case 16:
      // gif
      return (
        <GuestGif
          increaseStep={increaseStep}
          decreaseStep={decreaseStep}
          setMeme={setMeme}
          handleChange={handleChange}
        />
      );
    case 17:
      // Picture select
      return (
        <GuestPicUpload
          increaseStep={increaseStep}
          decreaseStep={decreaseStep}
          setImage={setImage}
        />
      );
    case 18:
      // drawing
      return (
        <GuestPaintSection
          increaseStep={submitPost}
          decreaseStep={decreaseStep}
          setDraw={setDraw}
        />
      );
    case 19:
      return (
        <GuestSuccess increaseStep={increaseStep} decreaseStep={decreaseStep} />
      );
    default:
      return <p>Lit</p>;
  }
}

export default GuestFlow;
