import React from "react";
import ban1 from "../../../assets/images/Extra/top-banners_11.jpg";
import ban2 from "../../../assets/images/Extra/triangleBan.png";
const AboutBanner = () => {
  return (
    <div>
      <section className="aboutpage ">
        <div className="abouttxt ">
          <h1 className="heading40 animated bounceInDown regular-light">
            Company Profile
          </h1>
          <p className="banner_text pt-2 animated fadeInLeft regular-light">
            Delivering value to society
          </p>
        </div>
        <div className="smallbanner">
          <img
            data-src={ban1}
            alt="banner image"
            className="lazyloaded img-fluid"
            src={ban1}
          />
        </div>
        <div className="right_trangle animated bounceInDown">
          <img
            data-src={ban2}
            alt="triangle image"
            className="lazyloaded img-fluid"
            src={ban2}
          />
        </div>
      </section>
    </div>
  );
};

export default AboutBanner;
