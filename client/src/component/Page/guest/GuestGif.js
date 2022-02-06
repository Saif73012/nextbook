import React, { useState } from "react";
import ButtonPair from "./../../Element/ButtonPair";
import "./../../../main.sass";
import axios from "axios";
import Loading from "../../Element/Loading";

const api = "https://api.giphy.com/v1/gifs";
const APIKey = "sElNT63k0H0RliJKAVqpsbGf69AVUF1I";
var tags = "meme";

function GuestGif({ increaseStep, decreaseStep, setMeme }) {
  let giff = "https://media.giphy.com/media/3o6gbbuLW76jkt8vIc/giphy.gif";
  const [loading, setLoading] = useState();
  const [gifSrc, setgifSrc] = useState(
    "https://media.giphy.com/media/3o6gbbuLW76jkt8vIc/giphy.gif"
  );

  const handleChange2 = async () => {
    setLoading(true);
    tags = document.getElementById("search").value;
    await axios
      .get(`${api}/random?api_key=${APIKey}&tag=${tags}`, {
        headers: { "content-type": "multipart/form-data" },
      })
      .then((response) => {
        giff = response.data.data.images.downsized_medium.url;
        setgifSrc(giff);
        setMeme(giff);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="guest-wrapper guestGif-wrapper">
      <div className="content-wrapper">
        <h1>Dein Lieblingsgif</h1>
        <span>Überrasche mich!!</span>
        <form>
          <input
            input="text"
            id="search"
            name="meme"
            placeholder="gib ein Begriff ein"
          />

          <button
            onClick={(e) => {
              e.preventDefault();
              handleChange2();
            }}
            className="third-btn"
          >
            Suchen
          </button>
        </form>
        <div className="loading-wrapper">
          {loading && <Loading />}
          <div className="giphy">
            <img src={gifSrc} id="giphy" alt="Meme" />
          </div>
        </div>
      </div>
      <ButtonPair
        mainButtonTitle="weiter"
        subButtonTitle="zurück"
        onClickMain={increaseStep}
        onClickSub={decreaseStep}
        disable={false}
      />
    </div>
  );
}

export default GuestGif;
