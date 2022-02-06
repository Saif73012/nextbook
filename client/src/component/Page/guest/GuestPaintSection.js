import React, { useRef, useState } from "react";
import ButtonPair from "./../../Element/ButtonPair";
import "./../../../main.sass";
import CanvasDraw from "react-canvas-draw";
import LZString from "lz-string";

function Question9({ increaseStep, decreaseStep, setDraw }) {
  const [isDisabled, setisDisabled] = useState(true);
  const canvansDraw = useRef();
  const saveDraw = () => {
    let draw = canvansDraw.current.getSaveData();
    let compressedDraw = LZString.compressToEncodedURIComponent(draw);
    setDraw(compressedDraw);
  };

  return (
    <div className="guest-wrapper draw-wrapper">
      <div className="content-wrapper">
        <h1>Male etwas- sei kreativ :)</h1>
        <CanvasDraw
          ref={canvansDraw}
          brushColor="#333333"
          brushRadius={1}
          lazyRadius={2}
          className="draw-box"
          canvasHeight={375}
          canvasWidth={345}
        />
      </div>

      <button
        onClick={() => {
          saveDraw();
          setisDisabled(false);
        }}
        className="third-btn"
      >
        Speichern
      </button>
      {isDisabled && <p>Bitte Male etwas und Drücke dann Speichern</p>}
      <ButtonPair
        mainButtonTitle="absenden"
        subButtonTitle="zurück"
        onClickMain={increaseStep}
        onClickSub={decreaseStep}
        disable={isDisabled}
      />
    </div>
  );
}

export default Question9;
