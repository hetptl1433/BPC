import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../../assets/css/Banner2.css";
const Banner6 = () => {
  return (
    <section className="contactus">
      <div className="pageContainer">
        <div className="justify-content-center">
          <Col className="contactbx animation-element slide-left in-view ">
            <h3 className="heading32 animated bounceInDown">Contact Us</h3>
            <p className="heading24 animated fadeInLeft">
              Start Growing With BPC India Today
            </p>
            <p>
              Schedule a meeting with our specialist to learn how our services
              can <br />
              transform your business.
            </p>
            <a href="#" className="bannerBtn_white mt-3 ">
              Contact Us
            </a>
          </Col>
        </div>
      </div>
    </section>
  );
};

export default Banner6;
