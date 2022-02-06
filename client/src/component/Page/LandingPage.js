import React from "react";
import ButtonPair from "../Element/ButtonPair";
import LandingPageNav from "../Element/LandingPageNav";
import "../../main.sass";
import logo from "../../assets/NextbookLogo.png";
import friends from "../../assets/img/friends.svg";
import school from "../../assets/img/school.svg";
import book from "../../assets/img/book.svg";
import facts from "../../assets/img/facts.svg";
import ownBook from "../../assets/img/own_book.svg";
import share from "../../assets/img/share.svg";
import reading from "../../assets/img/reading.svg";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="lp">
      <Link to="/">
        <img src={logo} alt="NextBook" id="nextbookLogo" />
      </Link>
      <LandingPageNav />
      <div className="dialog-wrapper">
        <h1>
          Weißt du noch, <br /> damals?
        </h1>
        <img src={friends} alt="Schulfreunde" />
      </div>
      <div className="dialog-wrapper">
        <h1>In der Schulzeit?</h1>
        <img src={school} alt="Schulzeit" />
      </div>
      <div className="dialog-wrapper">
        <h1>Jeder hatte so ein Freundschaftsbuch.</h1>
        <img src={book} alt="Freundschaftsbuch" />
      </div>
      <div className="dialog-wrapper">
        <h1> Mit Botschaften und Fakten seiner Freunde.</h1>
        <img src={facts} alt="Fakten und Bootschaften" />
      </div>
      <p>
        In unserer Generation folgst du deinen Freunden ganz einfach auf Social
        Media. Aber hast du dir mal die Zeit genommen und reflektiert, wie du
        deine Freunde kennengelernt hast, und was Sie eigentlich so mögen?
      </p>
      <p className="center">
        <strong>Wahrscheinlich nicht oder?</strong>
      </p>
      <p>
        Wie wärs denn mit einem neuen Freundschaftsbuch? Kein altmodisches,
        sondern ein Modernes und Neues. Quasi ein Freundschaftsbuch der nächsten
        Generation.
      </p>
      <figure>
        <img src={logo} alt="Nextbook" />
        <figcaption>
          <strong>Das Freundschatsbuch der nächsten Generation !</strong>
        </figcaption>
      </figure>
      <div className="dialog-wrapper">
        <h1> Erstelle dein eigenes Freundschaftsbuch</h1>
        <img src={ownBook} alt="Dein eignes Freundschaftsbuch" />
      </div>
      <div className="dialog-wrapper">
        <h1>Teile einen Link, mitdem sich deine Freunde eintragen können.</h1>
        <img src={share} alt="Teile das Buch" />
      </div>
      <div className="dialog-wrapper">
        <h1>
          Die Seiten werden deinem Buch hinzugefügt und sind für Dich immer
          Online Verfügbar.
        </h1>
        <img src={reading} alt="Teile das Buch" />
      </div>
      <p>
        Registriere dich jetzt damit du weißt, Was deine Freunde mögen, Wann und
        wie Ihr euch kennengelernt habt, Was ihre Lieblingsfarbe ist.
      </p>

      <ButtonPair
        mainButtonTitle="Registrieren"
        subButtonTitle="ANMELDEN"
        linkMain="/register"
        linkSub="/login"
        disable={false}
      />
    </div>
  );
}

export default LandingPage;
