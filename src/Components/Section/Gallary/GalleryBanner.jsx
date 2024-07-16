import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ph10 from "../../../assets/images/Extra/top-banners_4.jpg";
import ph11 from "../../../assets/images/Extra/trangle-banner_1.png";

const GalleryBanner = () => {
  return (
    <div>
      <section className="aboutpage ">
        <div className="abouttxt ">
          <h1 className="heading40 animated bounceInDown regular-light">
            Photo Gallery
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
            data-src={ph11}
            alt="triangle image"
            className="lazyloaded img-fluid"
            src={ph11}
          />
        </div>
      </section>
    </div>
  );
};

export default GalleryBanner;
