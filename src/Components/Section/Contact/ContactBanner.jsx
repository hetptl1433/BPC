import React from "react";
import ph8 from "../../../assets/images/Extra/top-banners_11.jpg";
const ContactBanner = () => {
  return (
    <div>
      <section className="aboutpage ">
        <div className="abouttxt ">
          <h1 className="heading40 animated bounceInDown regular-light">
            Contact us
          </h1>
          <p className="banner_text pt-2 animated fadeInLeft regular-light">
            We will help you see bigger picture
          </p>
        </div>
        <div className="smallbanner">
          <img
            data-src={ph8}
            alt="banner image"
            className="lazyloaded img-fluid"
            src={ph8}
          />
        </div>
        <div className="right_trangle animated bounceInDown">
          <img
            data-src="../../../assets/images/Extra/triangleBan.png"
            alt="triangle image"
            className="lazyloaded img-fluid"
            src="../../../assets/images/Extra/triangleBan.png"
          />
        </div>
      </section>
    </div>
  );
};

export default ContactBanner;
