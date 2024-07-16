import React from "react";
import pht1 from "../../../assets/images/Extra/top-banners_4.jpg";
import pht2 from "../../../assets/images/Extra/trangle-banner_1.png";

const ActivityBanner = () => {
  return (
    <div>
      <div>
        <section className="aboutpage ">
          <div className="abouttxt ">
            <h1 className="heading40 animated bounceInDown regular-light">
              Our Activity
            </h1>
            <p className="banner_text pt-2 animated fadeInLeft regular-light">
              Delivering value to society
            </p>
          </div>
          <div className="smallbanner">
            <img
              data-src={pht1}
              alt="banner image"
              className="lazyloaded img-fluid"
              src={pht1}
            />
          </div>
          <div className="right_trangle animated bounceInDown">
            <img
              data-src={pht2}
              alt="triangle image"
              className="lazyloaded img-fluid"
              src={pht2}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ActivityBanner;
