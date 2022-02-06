import React, { useState } from "react";
import ButtonPair from "./../../Element/ButtonPair";
import "./../../../main.sass";
import Loading from "../../Element/Loading";
import defaultProfilPic from "../../../assets/img/profpic.svg";

function GuestPicUpload({ increaseStep, decreaseStep, setImage }) {
  const [image, setimage] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState(defaultProfilPic);

  const handleChange = async (e) => {
    let files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "postpicture");
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
    let selfie = file.url;
    setLoading(false);
    setImageSrc(selfie);
    setImage(selfie);
  };
  return (
    <div className="guest-wrapper picUpload-wrapper">
      <div className="content-wrapper">
        <p>Füge ein Foto von dir ein</p>
        <form>
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
            <img src={imageSrc} className="profil-picture" alt="Avatar" />
          </div>
        </form>
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

export default GuestPicUpload;
