import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";


const Banner3 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div>
      <section className="sevicesbox" id="nseitservice">
        <Container>
          <h3 className="heading32"> Services </h3>
          <p>We deliver services that solve problems for our customers </p>
          <div className="Servicbx justify-content-between pt-5">
            <div className="cyber-security-slider row">
              <Slider {...settings}>
                <div className="fgf">
                  <div className="item">
                    <a href="#">
                      <div className="box service_boxhover">
                        <div className="img">
                          <img
                            src="assets/images/drupal/corposl.jpg"
                            width="75px"
                            height="75px"
                            alt="leading digital transformation expert NSEIT"
                          />
                        </div>
                        <h3 className="regular service-head">
                          Corporate Social Responsibility (CSR)
                        </h3>
                        <p>
                          The focus, therefore, includes contribution of time
                          and money, a duty to provide
                        </p>
                        <a href="#" className="readmoreRed pt-3">
                          Read More
                        </a>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="fgf">
                  <div className="item">
                    <a href="#">
                      <div className="box service_boxhover">
                        <div className="img">
                          <img
                            src="assets/images/drupal/businesseng.jpg"
                            width="75px"
                            height="75px"
                            alt="leading cyber security expert NSEIT"
                          />
                        </div>
                        <h3 className="regular service-head">
                          Business Process Re-engineering (EG)
                        </h3>
                        <p>
                          Controls weakness in Finance function which could lead
                          to possibility of revenue leakages
                        </p>
                        <a href="#" className="readmoreRed pt-3">
                          Read More
                        </a>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="fgf">
                  <div className="item">
                    <a href="#">
                      <div className="box service_boxhover">
                        <div className="img">
                          <img
                            src="assets/images/drupal/recru.jpg"
                            width="75px"
                            height="75px"
                            alt="leading digital examination solution provider NSEIT"
                          />
                        </div>
                        <h3 className="regular service-head">
                          Recruitment and Promotional Interviews
                        </h3>
                        <p>
                          We also conduct promotional written tests, interviews
                          etc and score sheets with results.
                        </p>
                        <a href="#" className="readmoreRed pt-3">
                          Read More
                        </a>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="fgf">
                  <div className="item">
                    <a href="#">
                      <div className="box service_boxhover">
                        <div className="img">
                          <img
                            src="assets/images/drupal/corposl.jpg"
                            width="75px"
                            height="75px"
                            alt="leading digital transformation expert NSEIT"
                          />
                        </div>
                        <h3 className="regular service-head">
                          Corporate Social Responsibility (CSR)
                        </h3>
                        <p>
                          The focus, therefore, includes contribution of time
                          and money, a duty to provide
                        </p>
                        <a href="#" className="readmoreRed pt-3">
                          Read More
                        </a>
                      </div>
                    </a>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Banner3;
