import React from "react";
import ph5 from "../../../assets/images/Extra/top-banners_11.jpg";
const BookBanner = () => {
  return (
    <div>
      <section className="aboutpage ">
        <div className="abouttxt ">
          <h1 className="heading40 animated bounceInDown regular-light">
            Booking Detail
          </h1>
        </div>
        <div className="smallbanner">
          <img
            data-src={ph5}
            alt="banner image"
            className="lazyloaded img-fluid"
            src={ph5}
          />
        </div>
      </section>
    </div>
  );
};

export default BookBanner;
