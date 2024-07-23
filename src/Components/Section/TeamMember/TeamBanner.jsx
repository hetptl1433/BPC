import React from "react";
import p32 from "../../../assets/images/Extra/triangleBan.png";
import p33 from "../../../assets/images/Extra/top-banners_11.jpg";

const TeamBanner = () => {
  return (
    <div>
      <section className="aboutpage ">
        <div className="abouttxt ">
          <h1 className="heading40 animated bounceInDown regular-light">
            Team Member
          </h1>
        </div>
        <div className="smallbanner">
          <img
            data-src={p33}
            alt="banner image"
            className="lazyloaded img-fluid"
            src={p33}
          />
        </div>
        <div className="right_trangle animated bounceInDown">
          <img
            data-src={p32}
            alt="triangle image"
            className="lazyloaded img-fluid"
            src={p32}
          />
        </div>
      </section>
    </div>
  );
};

export default TeamBanner;
