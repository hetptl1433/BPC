import React from "react";
import ph10 from "../../../assets/images/Extra/top-banners_4.jpg";
import p22 from "../../../assets/images/Extra/triangleBan.png";
const NewsBanner = () => {
  return (
    <div>
      <section className="aboutpage ">
        <div className="abouttxt ">
          <h1 className="heading40 animated bounceInDown regular-light">
            News Event
          </h1>
        </div>
        <div className="smallbanner">
          <img
            data-src={ph10}
            alt="banner image"
            className="lazyloaded img-fluid"
            src={ph10}
          />
        </div>
        <div className="right_trangle animated bounceInDown">
          <img
            data-src={p22}
            alt="triangle image"
            className="lazyloaded img-fluid"
            src={p22}
          />
        </div>
      </section>
    </div>
  );
};

export default NewsBanner;
