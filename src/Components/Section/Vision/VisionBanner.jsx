import React from "react";

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
            data-src="http://bpcindia.org/Content/Client/assets/images/drupal/top-banners_11.jpg"
            alt="banner image"
            className="lazyloaded img-fluid"
            src="http://bpcindia.org/Content/Client/assets/images/drupal/top-banners_11.jpg"
          />
        </div>
        <div className="right_trangle animated bounceInDown">
          <img
            data-src="http://bpcindia.org/Content/Client/assets/images/drupal/t3.png"
            alt="triangle image"
            className="lazyloaded img-fluid"
            src="http://bpcindia.org/Content/Client/assets/images/drupal/t3.png"
          />
        </div>
      </section>
    </div>
  );
};

export default VisionBanner;
