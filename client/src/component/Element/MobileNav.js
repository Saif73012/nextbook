import React from "react";
import { Link } from "react-router-dom";
import "../../main.sass";
import homeIcon from "../../assets/img/navIcons/home.svg";
import aboutIcon from "../../assets/img/navIcons/about.svg";
import bookIcon from "../../assets/img/navIcons/books.svg";
import logoutIcon from "../../assets/img/navIcons/logout.svg";
import settingsIcon from "../../assets/img/navIcons/settings.svg";

export default function MobileNav() {
  return (
    <>
      <nav className="mobile-nav">
        <ul>
          <li>
            <Link to="/home">
              <button>
                <span>Home</span>
                <img src={homeIcon} alt="Home"></img>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/books">
              <button>
                <span>Bücher</span>
                <img src={bookIcon} alt="Books"></img>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <button>
                <span>Account</span>
                <img src={settingsIcon} alt="Einstellungen"></img>
              </button>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => {
                localStorage.clear();
              }}
            >
              <button>
                <span>Ausloggen</span>
                <img src={logoutIcon} alt="registrieren"></img>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/about" target="_blank">
              <button>
                <span>About</span>
                <img src={aboutIcon} alt="about Nextbook"></img>
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
