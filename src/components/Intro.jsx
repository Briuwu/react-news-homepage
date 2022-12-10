import React from "react";
import ImgMobile from "../assets/images/image-web-3-mobile.jpg";
import ImgDesktop from "../assets/images/image-web-3-desktop.jpg";

const Intro = () => {
  return (
    <>
      <div className="img">
        <img className="img-mobile" src={ImgMobile} alt="the bright future" />
        <img className="img-desktop" src={ImgDesktop} alt="the bright future" />
      </div>
      <h1 className="intro-title">
        The Bright <br /> Future of Web 3.0?
      </h1>
      <div className="intro-desc">
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button>read more</button>
      </div>
    </>
  );
};

export default Intro;
