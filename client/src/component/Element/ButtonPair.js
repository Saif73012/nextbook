import React from "react";
import "../../main.sass";
import { Link } from "react-router-dom";

function ButtonPair({
  mainButtonTitle,
  subButtonTitle,
  onClickMain,
  onClickSub,
  onSubmit,
  linkMain,
  linkSub,
  onlyMain,
  disable,
  type,
}) {
  return (
    <div className="button-bar">
      <button className={onlyMain ? "hide" : "sub-button"} onClick={onClickSub}>
        <Link to={linkSub}>{subButtonTitle}</Link>
      </button>
      <button
        onClick={onClickMain}
        onSubmit={onSubmit}
        disabled={disable}
        type={type}
        className={disable ? "disable-btn" : " "}
      >
        <Link to={linkMain}>{mainButtonTitle}</Link>
      </button>
    </div>
  );
}
export default ButtonPair;
