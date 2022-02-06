import React from "react";
import "../../main.sass";
import { Link } from "react-router-dom";
import defaultProfilPic from "../../assets/img/profpic.svg";

function ProfileCard({ name, city, birthDate, profilPicture, link }) {
  return (
    // it shouldn't be done that way - Link as container.. code smell
    <Link to={link} className="profil-card">
      <img
        className="profil-picture-guest"
        src={
          profilPicture !== " " &&
          profilPicture !== null &&
          profilPicture !== undefined &&
          profilPicture !== ""
            ? profilPicture
            : defaultProfilPic
        }
        alt="Profilpicture"
      />
      <div className="wrapper-user-data">
        <p>{name}</p>
        <p>{city}</p>
        <p>{birthDate}</p>
      </div>
    </Link>
  );
}
export default ProfileCard;
