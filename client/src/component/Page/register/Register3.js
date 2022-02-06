import React, { useState } from "react";
import ButtonPair from "./../../Element/ButtonPair";
import "./../../../main.sass";
import Loading from "../../Element/Loading";
import defaultProfilPic from "../../../assets/img/profpic.svg";

function Register3({ handleSubmit, decreaseStep, setImage }) {
  const [image, setimage] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState(defaultProfilPic);

  const handleChange = async (e) => {
    let files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "nextbookheroku");
    setLoading(true);
    const res = await fetch(
      "	https://api.cloudinary.com/v1_1/dscsql3ac/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(file);
    setimage(file.secure_url);
    var img = file.url;
    setImageSrc(img);
    setImage(img);
    setLoading(false);
  };
  return (
    <div className="register-wrapper register3-wrapper">
      <div className="content-wrapper">
        <form>
          <label htmlFor="img">Wähle ein Bild aus</label>
          <input
            type="file"
            id="img"
            name="img"
            accept="image/*"
            onChange={(e) => handleChange(e)}
          />
          <hr />
          <div className="loading-wrapper">
            {loading && <Loading />}
            <img
              src={imageSrc}
              className="profil-picture"
              alt="Profil Picture"
            />
          </div>
        </form>
        <ButtonPair
          mainButtonTitle="registrieren"
          subButtonTitle="zurück"
          onSubmit={handleSubmit}
          onClickMain={handleSubmit}
          onClickSub={decreaseStep}
          disable={false}
        />
      </div>
    </div>
  );
}

export default Register3;
