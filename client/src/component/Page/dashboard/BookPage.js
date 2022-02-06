import React, { useState, useEffect } from "react";
import "./../../../main.sass";
import { Link, Redirect, useHistory } from "react-router-dom";
import logo from "../../../assets/NextbookLogo.png";
import "./../../Element/_textInputEdged.sass";
import MainNav from "../../Element/MainNav";
import UserAnswer from "../../Element/UserAnswer";
import hairBlack from "./../../../assets/img/hairBlack.svg";
import hairBlonde from "./../../../assets/img/hairBlonde.svg";
import hairBrown from "./../../../assets/img/hairBrown.svg";
import hairBrownDark from "./../../../assets/img/hairBrownDark.svg";
import hairGold from "./../../../assets/img/hairGold.svg";
import hairRed from "./../../../assets/img/hairRed.svg";
import genderMale from "./../../../assets/img/undraw_superhero.svg";
import genderFemale from "./../../../assets/img/undraw_super_woman.svg";
import genderDiverse from "./../../../assets/img/undraw_diverseheroV2.svg";
import eyeBlue from "./../../../assets/img/blueColor.svg";
import eyeLightblue from "./../../../assets/img/lightblueColor.svg";
import eyeGreen from "./../../../assets/img/greenColor.svg";
import blackColor from "./../../../assets/img/blackColor.svg";
import blueColor from "./../../../assets/img/blueColor.svg";
import greenColor from "./../../../assets/img/greenColor.svg";
import lightBlueColor from "./../../../assets/img/lightblueColor.svg";
import lightPinkColor from "./../../../assets/img/lightpinkColor.svg";
import redColor from "./../../../assets/img/redColor.svg";
import violetColor from "./../../../assets/img/violetColor.svg";
import axios from "axios";
import FloatingButton from "./../../Element/FloatingButton";
import defaultProfilPic from "../../../assets/img/profpic.svg";
import LZString from "lz-string";
import CanvasDraw from "react-canvas-draw";

function BookPage({ match }) {
  let data = localStorage.getItem("key");
  const postId = match.params.id;
  const [post, setpost] = useState([]);
  const REQUEST_GETPOST = `/api/v1/post/${postId}`;
  let history = useHistory();
  const getPost = async () => {
    try {
      const response = await axios.get(REQUEST_GETPOST);
      setpost(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deletePost = async () => {
    try {
      axios.delete(REQUEST_GETPOST).then(history.push("/books"));
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    getPost();
    // eslint-disable-next-line
  }, []);

  if (data === null || data === "" || data === undefined)
    return <Redirect to="/login" />;

  let hairImg;
  switch (post.haircolor) {
    case "blonde":
      hairImg = hairBlonde;
      break;
    case "brown":
      hairImg = hairBrown;
      break;
    case "browndark":
      hairImg = hairBrownDark;
      break;
    case "gold":
      hairImg = hairGold;
      break;
    case "red":
      hairImg = hairRed;
      break;
    case "black":
    default:
      hairImg = hairBlack;
  }

  let eyeColorImg;
  switch (post.eyes) {
    case "blue":
      eyeColorImg = eyeBlue;
      break;
    case "lightblue":
      eyeColorImg = eyeLightblue;
      break;
    case "green":
    default:
      eyeColorImg = eyeGreen;
  }

  let favColorImg;
  switch (post.color) {
    case "violet":
      favColorImg = violetColor;
      break;
    case "blue":
      favColorImg = blueColor;
      break;
    case "green":
      favColorImg = greenColor;
      break;
    case "lightBlue":
      favColorImg = lightBlueColor;
      break;
    case "lightPink":
      favColorImg = lightPinkColor;
      break;
    case "red":
      favColorImg = redColor;
      break;
    case "black":
      favColorImg = blackColor;
      break;
    default:
      favColorImg = blackColor;
  }

  let genderImg;
  switch (post.gender) {
    case "male":
      genderImg = genderMale;
      break;
    case "female":
      genderImg = genderFemale;
      break;
    case "divers":
      genderImg = genderDiverse;
      break;
    default:
      genderImg = genderDiverse;
  }

  return (
    <div className="book-page">
      <Link to="/home">
        <img src={logo} alt="NextBook" id="nextbookLogo" />
      </Link>
      <MainNav />
      <FloatingButton />
      <main className="dashboard-wrapper">
        <div className="wrapper-content">
          <div className="frame">
            <div className="header">
              <img
                className="profil-picture-guest"
                src={
                  post.selfie !== "" &&
                  post.selfie !== null &&
                  post.selfie !== undefined &&
                  post.selfie !== ""
                    ? post.selfie
                    : defaultProfilPic
                }
                alt="Profil Bild"
              />
              <div className="header-content">
                <UserAnswer
                  question="Wie heißt du?"
                  answer={post.name}
                  classname="narrow"
                />
                <UserAnswer
                  question="Woher kommst du?"
                  answer={post.city}
                  classname="narrow"
                />
                <UserAnswer
                  question="Wann hast du Geburtstag?"
                  answer={post.birth}
                  classname="narrow"
                />
              </div>
            </div>
            <section className="grid">
              <div>
                <h2>Geschlecht</h2>
                <img alt="Geschlecht" src={genderImg} />
              </div>
              <div>
                <h2>Körpergröße</h2>
                <p>{post.size} cm</p>
              </div>
              <div>
                <h2>Lieblingsfarbe</h2>
                <img alt="Lieblingsfarbe" src={favColorImg} />
              </div>
              <div>
                <h2>Haarfarbe</h2>
                <img alt="Haarfarbe" src={hairImg} />
              </div>
            </section>
            <section className="main">
              <UserAnswer
                question="Wie haben wir uns kennengelernt?"
                answer={post.getToKnow}
                classname="wide"
              />
              <UserAnswer
                question="Hast du ein Haustier?"
                answer={post.pet}
                classname="wide"
              />
              <div className="space-between">
                <div>
                  <h2>Künstlerei</h2>
                  <CanvasDraw
                    canvasHeight={350}
                    canvasWidth={260}
                    disabled
                    saveData={LZString.decompressFromEncodedURIComponent(
                      post.drawing
                    )}
                    className="draw-box"
                  />
                </div>
                <div>
                  <h2>Meme</h2>
                  <img src={post.meme} alt="meme" id="gif" />
                </div>
              </div>
              <div className="space-between">
                <UserAnswer
                  question="Was ist dein Lieblingsessen?"
                  answer={post.food}
                  classname="narrow block"
                />
                <UserAnswer
                  question="Was wäre deine Superkraft?"
                  answer={post.superpower}
                  classname="narrow block"
                />
              </div>
              <UserAnswer
                question="Das steht auf meiner Bucketliste ganz oben"
                answer={post.smthToDieFor}
                classname="wide"
              />
              <UserAnswer
                question="Worauf bist du besonders Stolz?"
                answer={post.proud}
                classname="wide"
              />
            </section>
          </div>
          <button onClick={deletePost} className="prim-btn">
            Delete
          </button>
        </div>
      </main>
    </div>
  );
}

export default BookPage;
