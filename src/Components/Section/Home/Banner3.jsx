import React from "react";
import Slider from "react-slick";

const Banner3 = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      <section class="sevicesbox" id="nseitservice">
        <div class="pageContainer">
          <h3 class="heading32"> Services </h3>
          <p>We deliver services that solve problems for our customers </p>
          <div class="Servicbx justify-content-between pt-5">
            <div class="cyber-security-slider row">
              <Slider {...settings}>
                <div className="fgf">
                  <div class="item">
                    <a href="#">
                      <div class="box  service_boxhover">
                        <div class="img">
                          <img
                            src="assets/images/drupal/corposl.jpg"
                            width="75px"
                            height="75px"
                            alt="leading digital transformation expert NSEIT"
                          ></img>
                        </div>
                        <h3 class="regular service-head">
                          Corporate Social Responsibility (CSR)
                        </h3>
                        <p>
                          The focus, therefore, includes contribution of time
                          and money, a duty to provide
                        </p>
                        <a href="#" class="readmoreRed pt-3">
                          Read More
                        </a>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="fgf">
                  <div class="item">
                    <a href="#">
                      <div class="box  service_boxhover">
                        <div class="img">
                          <img
                            src="assets/images/drupal/businesseng.jpg"
                            width="75px"
                            height="75px"
                            alt="leading cyber security expert NSEIT"
                          ></img>
                        </div>
                        <h3 class="regular service-head">
                          Business Process Re-engineering (EG)
                        </h3>
                        <p>
                          Controls weakness in Finance function which could lead
                          to possibility of revenue leakages
                        </p>
                        <a href="#" class="readmoreRed pt-3">
                          Read More
                        </a>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="fgf">
                  <div class="item">
                    <a href="#">
                      <div class="box  service_boxhover">
                        <div class="img">
                          <img
                            src="assets/images/drupal/recru.jpg"
                            width="75px"
                            height="75px"
                            alt="leading digital examination solution provider  NSEIT"
                          ></img>
                        </div>
                        <h3 class="regular service-head">
                          Recruitment and Promotional Interviews
                        </h3>
                        <p>
                          We also conduct promotional written tests, interviews
                          etc and score sheets with results.
                        </p>
                        <a href="#" class="readmoreRed pt-3">
                          Read More
                        </a>
                      </div>
                    </a>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner3;
