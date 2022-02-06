import React, { useState, useEffect } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function MainNav() {
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
  //switchtes between mobile and desktop nav
  if (width > 1000) return <DesktopNav />;
  else return <MobileNav />;
}
