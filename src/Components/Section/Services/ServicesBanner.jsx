import React from "react";
import ss2 from "../../../assets/images/Extra/t1.png";
import ss3 from "../../../assets/images/Extra/top-banners_11.jpg";

const ServicesBanner = () => {
  return (
    <div>
      {" "}
      <section className="aboutpage">
        <div className="abouttxt text-center">
          <h1 className="heading40 animated bounceInDown">Our Services</h1>
        </div>
        <div className="smallbanner text-center">
          <img
            data-src={ss3}
            alt="banner image"
            className="lazyloaded img-fluid"
            src={ss3}
          />
        </div>
        <div className="right_trangle text-center animated bounceInDown">
          <img
            data-src={ss2}
            alt="triangle image"
            className="lazyloaded img-fluid"
            src={ss2}
          />
        </div>
      </section>
    </div>
  );
};

export default ServicesBanner;
