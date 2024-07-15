import React from "react";

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
            data-src="http://bpcindia.org/Content/Client/assets/images/drupal/top-banners_11.jpg"
            alt="banner image"
            className="lazyloaded img-fluid"
            src="http://bpcindia.org/Content/Client/assets/images/drupal/top-banners_11.jpg"
          />
        </div>
      </section>
    </div>
  );
};

export default VideoBanner;
