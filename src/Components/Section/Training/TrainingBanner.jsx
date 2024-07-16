import React from "react";

const TrainingBanner = () => {
  return (
    <div>
      <section className="aboutpage ">
        <div className="abouttxt ">
          <h1 className="heading40 animated bounceInDown regular-light">
            BPC Programme
          </h1>
        </div>
        <div className="smallbanner">
          <img
            data-src="../../../assets/images/Extra/top-banners_11.jpg"
            alt="banner image"
            className="lazyloaded img-fluid"
            src="../../../assets/images/Extra/top-banners_11.jpg"
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

export default TrainingBanner;
