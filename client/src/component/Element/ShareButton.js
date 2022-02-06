import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import "../../main.sass";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function ShareButton({ sharelink }) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(sharelink);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <button className="share-button" onClick={handleClick}>
        Link Kopieren
      </button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Der Link wurde erfolgreich kopiert !
        </Alert>
      </Snackbar>
    </>
  );
}
