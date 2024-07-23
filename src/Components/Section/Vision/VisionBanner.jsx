import React from "react";
import p32 from "../../../assets/images/Extra/top-banners_11.jpg";
import p33 from "../../../assets/images/Extra/triangleBan.png";

const VisionBanner = () => {
  return (
    <div>
      <section className="aboutpage ">
        <div className="abouttxt ">
          <h1 className="heading40 animated bounceInDown regular-light">
            BPC Vision/Mission/Goal
          </h1>
          <p className="banner_text pt-2 animated fadeInLeft regular-light">
            Delivering value of society
          </p>
        </div>
        <div className="smallbanner">
          <img
            data-src={p32}
            alt="banner image"
            className="lazyloaded img-fluid"
            src={p32}
          />
        </div>
        <div className="right_trangle animated bounceInDown">
          <img
            data-src={p33}
            alt="triangle image"
            className="lazyloaded img-fluid"
            src={p33}
          />
        </div>
      </section>
    </div>
  );
};

export default VisionBanner;
