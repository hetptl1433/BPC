import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from "react-player";
import vid4 from "../../../assets/images/drupal/vid4.png";

const Banner4 = () => {
  const [showPlayer, setShowPlayer] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleImageClick = () => {
    setShowPlayer(true);
  };

  return (
    <section className="industrySolution" id="nseitindustry">
      <div className="pageContainer">
        <div className="panel">
          <div className="letfsolbox animation-element in-view">
            <div className="player-wrapper">
              {showPlayer ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=DTvypRzWL2M"
                  width="90%"
                  height="280px"
                  className="border-none"
                  playing
                  muted
                  controls
                />
              ) : (
                <img
                  src={vid4}
                  alt="Application and infra modernization solution provider"
                  height=" 240px"
                  width="300px"
                  onClick={handleImageClick}
                  style={{ cursor: "pointer" }}
                />
              )}
            </div>
          </div>
          <div className="industryContent sliderValue animation-element in-view">
            <h3 className="heading32">Industry Solutions</h3>
            <p className="darkgrey">
              Meet the rapidly evolving business needs & create impactful
              customer experiences by leveraging our strong industry foothold
            </p>
            <Slider {...settings}>
              <div className="item">
                <div className="ownerbox pt-3">
                  <h3 className="heading22 regular">Advertisement</h3>
                  <div className="txtowner mt-3">
                    <p className="darkgrey">
                      Digital economies are witnessing a transformational era
                      with the Open Banking ecosystem blurring boundaries and
                      NSEIT is living the change
                    </p>
                    <a href="#" className="readmoreRed pt-3">
                      {" "}
                      Read More{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="ownerbox pt-3">
                  <h3 className="heading22 regular">Latest Articles</h3>
                  <div className="txtowner mt-3">
                    <p className="darkgrey">
                      Our DNA breeds Digital excellence for Capital Markets and
                      Non-Banking Financial Companies
                    </p>
                    <a href="#" className="readmoreRed pt-3">
                      {" "}
                      Read More{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="ownerbox pt-3">
                  <h3 className="heading22 regular">Event Calendar</h3>
                  <div className="txtowner mt-3">
                    <p className="darkgrey">
                      Empowering consumers and providers of Insurance with
                      digital touch points to drive experience is the essence of
                      our portfolio
                    </p>
                    <a href="#" className="readmoreRed pt-3">
                      {" "}
                      Read More{" "}
                    </a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner4;
