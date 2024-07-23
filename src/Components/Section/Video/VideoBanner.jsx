import React from "react";
import p32 from "../../../assets/images/Extra/top-banners_11.jpg";
const VideoBanner = () => {
  return (
    <div>
      <section className="aboutpage ">
        <div className="abouttxt ">
          <h1 className="heading40 animated bounceInDown regular-light">
            Video Gallery
          </h1>
        </div>
        <div className="smallbanner">
          <img
            data-src={p32}
            alt="banner image"
            className="lazyloaded img-fluid"
            src={p32}
          />
        </div>
      </section>
    </div>
  );
};

export default VideoBanner;
