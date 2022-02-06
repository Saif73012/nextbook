import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../main.sass";
import homeIcon from "../../assets/img/navIcons/home.svg";
import loginIcon from "../../assets/img/navIcons/login.svg";
import registerIcon from "../../assets/img/navIcons/register.svg";
import aboutIcon from "../../assets/img/navIcons/about.svg";

function LandingPageNav() {
  const [width, setWidth] = useState();
  var onresize = function () {
    //get current width
    let width = document.body.clientWidth;
    setWidth(width);
  };
  useEffect(() => {
    window.addEventListener("resize", onresize);
    onresize();
    // eslint-disable-next-line

    return () => {
      window.removeEventListener("resize", onresize);
    };
  }, []);

  if (width > 1000) {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <button>
                  <span>Home</span>
                  <img src={homeIcon} alt="Home"></img>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <button>
                  <span>Anmelden</span>
                  <img src={loginIcon} alt="login"></img>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <button>
                  <span>Registrieren</span>
                  <img src={registerIcon} alt="registrieren"></img>
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
  } else
    return (
      <>
        <nav className="mobile-nav">
          <ul>
            <li>
              <Link to="/">
                <button>
                  <span>Home</span>
                  <img src={homeIcon} alt="Home"></img>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <button>
                  <span>Anmelden</span>
                  <img src={loginIcon} alt="login"></img>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <button>
                  <span>Registrieren</span>
                  <img src={registerIcon} alt="registrieren"></img>
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
export default LandingPageNav;
