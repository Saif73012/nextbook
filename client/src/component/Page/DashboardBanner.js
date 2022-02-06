import React, { useState, useEffect } from "react";
import "../../main.sass";
import "./_dashboardPage.sass";
import "./_dashBanner.sass";
import "./../Element/_profileCard.sass";
import defaultProfilPic from "../../assets/img/profpic.svg";
import ShareButton from "./../Element/ShareButton";
import QRCode from "qrcode.react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function DashboardBanner({ firstName, lastName, profilPicture }) {
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
  useEffect(() => {
    getPostId();

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

  return (
    <div className="dashboardBanner-div">
      <div className="profile-banner-card-div">
        <img
          className="profil-picture"
          src={
            profilPicture !== "" &&
            profilPicture !== null &&
            profilPicture !== undefined
              ? profilPicture
              : defaultProfilPic
          }
          alt="Profilpicture"
        />
        <h4>
          {firstName}
          <br />
          {lastName}
          <br />
        </h4>
        <div>
          <button className="share-button" onClick={handleClickOpen}>
            Freund hinzufügen
          </button>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">
              {"Freund hinzufügen"}
            </DialogTitle>
            <DialogContent id="dialog-content-wrapper">
              <div>
                <DialogContentText id="dialog-text-wrapper">
                  Um einen Freund hinzuzufügen Schicke ihm den Link, damit er
                  sich Eintragen kann. Dein Freund muss nicht bei Nextbook
                  registriert sein. <br /> <br />
                  Steht dein Freund neben dir ? Dann kann er auch einfach den
                  QR-Code Scannen.
                  <br /> <br />
                  <small>Der Link ist nur einmal gültig.</small>
                </DialogContentText>
              </div>
              <div>
                <QRCode value={sharelink} size={150} />
                <ShareButton sharelink={sharelink} />
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                schliessen
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
export default DashboardBanner;
