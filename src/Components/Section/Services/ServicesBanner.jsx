import React from "react";

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
            data-src="http://bpcindia.org/Content/Client/assets/images/drupal/top-banners_11.jpg"
            alt="banner image"
            className="lazyloaded img-fluid"
            src="http://bpcindia.org/Content/Client/assets/images/drupal/top-banners_11.jpg"
          />
        </div>
        <div className="right_trangle text-center animated bounceInDown">
          <img
            data-src="http://bpcindia.org/Content/Client/assets/images/drupal/t1.png"
            alt="triangle image"
            className="lazyloaded img-fluid"
            src="http://bpcindia.org/Content/Client/assets/images/drupal/t1.png"
          />
        </div>
      </section>
    </div>
  );
};

export default ServicesBanner;
