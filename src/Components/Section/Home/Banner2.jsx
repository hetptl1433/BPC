import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../../../assets/images/drupal/whatsnew_2.jpg";
import "../../../assets/css/Banner2.css";

const Banner2 = () => {
  return (
    <section className="valueSection mt-5">
      <Container className="xxx">
        <Row className="ree">
          <Col
            xl={6}
            md={5}
            sm={12}
            className="leftCommitext animation-element"
          >
            <div className="box">
              <h2 className="heading32 mb-3">What's New</h2>
              <div className="item">
                <img
                  data-src={img1}
                  alt="IMEA Partner Awards 2020"
                  src={img1}
                />
                <h3 className="heading22 regular pt-3">Dear Sir / Madam,</h3>
                <p className="pt-3 pb-3 animated fadeInLeft">
                  This novel COVID 19 has challenged every organization into
                  finding-out Novel Survival Strategies. To conquer economic,
                  humanitarian, psychological, and sociological onslaught of
                  this deadly enemy, let's pool our learning and ideas for
                  rebuilding the Nation by registering for{" "}
                  <b>"Productivity in COVID Uncertainty Contest 2020"</b>
                </p>
                <Link to="#" className="readmoreRed pt-3">
                  Read More
                </Link>
              </div>
            </div>
          </Col>
          <Col xl={4} md={5} sm={0} className="rightValuetxt animation-element">
            <Carousel
              id="OurcompanySlider"
              className="sliderValue sliderValuehome"
              controls={false}
            >
              <Carousel.Item>
                <div className="item">
                  <h3 className="heading32">What's New</h3>
                  <h2 className="heading24">
                    We imbibe Innovation & Knowledge
                  </h2>
                  <p style={{ color: "#483773", fontWeight: "bold" }}>
                    This novel COVID 19 has challenged every organization into
                    finding-out Novel Survival Strategies. To conquer economic,
                    humanitarian, psychological, and sociological onslaught of
                    this deadly enemy, let's pool our learning and ideas for
                    rebuilding the Nation by registering for "Productivity in
                    COVID Uncertainty Contest 2020"
                  </p>
                  <Link to="#" className="readmoreRed1 pt-3">
                    Read More
                  </Link>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="item">
                  <h3 className="heading32">Who We Are?</h3>
                  <h2 className="heading24">
                    We imbibe Innovation & Knowledge
                  </h2>
                  <p style={{ color: "#483773", fontWeight: "bold" }}>
                    An equal representation of Government, Industry, and Labor
                    Organizations on its Managing Committee. Registered under
                    the Societies Registration Act, 1860...
                  </p>
                  <div className="ownerbox pt-3">
                    <h3 className="heading24 regular">Ownership</h3>
                    <div className="txtowner mt-3">
                      <p style={{ color: "#483773", fontWeight: "bold" }}>
                        An autonomous, non-profit institution affiliated with
                        the National Productivity Council, New Delhi, and Asian
                        Productivity Organization, Tokyo.
                      </p>
                      <Link to="#" className="readmoreRed1 pt-3">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="item">
                  <h3 className="heading32">Ongoing Forums</h3>
                  <h2 className="heading24">
                    We imbibe Innovation & Knowledge
                  </h2>
                  <p style={{ color: "#483773", fontWeight: "bold" }}>
                    An equal representation of Government, Industry, and Labor
                    Organizations on its Managing Committee. Registered under
                    the Societies Registration Act, 1860...
                  </p>
                  <Link to="#" className="readmoreRed1 pt-3">
                    Read More
                  </Link>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner2;
