import React, { useState, useEffect } from "react";
import Fab from "@material-ui/core/Fab";
import "../../main.sass";
import floatingImage from "../../assets/img/navIcons/newFriend.png";
import axios from "axios";
import ShareButton from "./../Element/ShareButton";
import QRCode from "qrcode.react";

// floatingbtn and the drawing- badnaming I know
export default function FloatingActionButtons() {
  axios.defaults.headers.common["Authorization"] =
    "Bearer " + localStorage.getItem("key");
  const userId = localStorage.getItem("user");
  //get current url
  const [postId, setpostId] = useState();
  const [open, setOpen] = useState(false);
  const [sharelink, setShareLink] = useState(" ");
  const getUrl = window.location;
  const baseUrl =
    getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split("/")[0];
  const REQUEST_POSTID = "/token";
  const getPostId = async () => {
    try {
      const { data } = await axios.get(REQUEST_POSTID);
      setpostId(data);
    } catch (error) {
      console.log(error);
    }
  };
  var onresize = function () {
    //get current width
    let width = document.body.clientWidth;
    setWidth(width);
  };
  useEffect(() => {
    window.addEventListener("resize", onresize);
    getPostId();
    onresize();
    return () => {
      window.removeEventListener("resize", onresize);
    };
    // eslint-disable-next-line
  }, []);
  const createSharelink = (postId) => {
    setShareLink(`${baseUrl}guest/${userId}/${postId}`);
  };

  const handleClickOpen = () => {
    getPostId();
    createSharelink(postId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [width, setWidth] = useState();

  if (width < 1000) {
    return (
      <>
        <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
          <img
            className="new-Friend-Icon"
            src={floatingImage}
            alt="neue/r Freund/in"
            style={{ height: 32 }}
          />
        </Fab>
        <div className={`drawer ${open ? "show" : "hide"}`}>
          <div className="drawer-header">
            <h2>Freund hinzufügen</h2>
            <button onClick={handleClose}>schliessen</button>
          </div>
          <div className="drawer-wrapper">
            <div className="drawer-content-wrapper">
              <p>
                Um einen Freund hinzuzufügen Schicke ihm den Link, damit er sich
                Eintragen kann. Dein Freund muss nicht bei Nextbook registriert
                sein.
                <br /> <br />
                Steht dein Freund neben dir ? Dann kann er auch einfach den
                QR-Code Scannen.
                <br /> <br />
                <small>Der Link ist nur einmal gültig.</small>
              </p>
            </div>
            <div className="drawer-image-wrapper">
              <QRCode value={sharelink} size={150} />
              <ShareButton sharelink={sharelink} />
            </div>
          </div>
        </div>
      </>
    );
  } else return <></>;
}
