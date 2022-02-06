import React from "react";
import MainNav from "../Element/MainNav";
import "../../main.sass";
import logo from "../../assets/NextbookLogo.png";
import teamMeeting from "../../assets/img/teammeeting.jpg";
import { Link } from "react-router-dom";
function AboutPage() {
  return (
    <div className="about-page">
      <img src={logo} alt="NextBook" id="nextbookLogo" />
      <main className="about-wrapper">
        <div className="about-content-div">
          <h1>About NextBook</h1>
          <img className="teamMet" src={teamMeeting} alt="Team Meeting" />
          <p>
            Als Entwicklerteam wollen wir das alte gute Freundschaftsbuch wieder
            zum Leben bringen, indem wir das Konzept des Freundschaftsbuch
            digitalisieren. Um das Freundschaftsbuch, wie aus der
            Grundschulzeit, rumzugeben, wird ein individueller QR-Code erstellt,
            womit man Zugriff auf den Fragenkatalog bekommt.
          </p>
          <p>
            Das Team besteht aus 5 Entwickler: <br /> <b>Linus Rösler</b>
            <br /> <b>Saifali Ali</b>
            <br /> <b>Tim</b>
            <br /> <b>Oliver Rascheja</b> <br /> <b>Kübra Simsek</b>.
          </p>
        </div>
      </main>
    </div>
  );
}

export default AboutPage;
