import React from "react";

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
              data-src="http://bpcindia.org/Content/Client/assets/images/drupal/top-banners_4.jpg"
              alt="banner image"
              className="lazyloaded img-fluid"
              src="http://bpcindia.org/Content/Client/assets/images/drupal/top-banners_4.jpg"
            />
          </div>
          <div className="right_trangle animated bounceInDown">
            <img
              data-src="http://bpcindia.org/Content/Client/assets/images/drupal/trangle-banner_1.png"
              alt="triangle image"
              className="lazyloaded img-fluid"
              src="http://bpcindia.org/Content/Client/assets/images/drupal/trangle-banner_1.png"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ActivityBanner;
