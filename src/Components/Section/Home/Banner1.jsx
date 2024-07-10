import React from "react";
import Slider from "react-slick";
import banner1 from "../../../assets/images/home/banner1.png";
import banner2 from "../../../assets/images/home/banner2.png";
import banner3 from "../../../assets/images/home/banner3.png";
import banner4 from "../../../assets/images/home/banner4.png";
import "../../../assets/css/Banner1.css";

const Banner1 = () => {
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-prev tyt" onClick={onClick}>
        Previous
      </button>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-next tyt" onClick={onClick}>
        Next
      </button>
    );
  };

  const settings = {
    dots: false, // Remove dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div>
      <section className="homepage">
        <Slider {...settings}>
          <div className="item">
            <div className="contenthome">
              <div className="bannercont_left">
                <h3 className="banner_heading">
                  Smarter &amp; Swifter Business with Intelligent Insights
                </h3>
                <p className="banner_text pt-3">
                  Unlock the value of the data and unearth your business
                  insights
                </p>
                <a href="#" className="bannerBtn_orange">
                  Know More
                </a>
              </div>
              <div className="img_right bounceInDown">
                <img src={banner3} alt="Data Analytics" />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="contenthome">
              <div className="bannercont_left">
                <h3 className="banner_heading">
                  Conducting end-to-end
                  <br />
                  online examination services
                </h3>
                <p className="banner_text pt-3">
                  India’s largest state witnessed its successful Police
                  Recruitment Exam conducted end-to-end by us <br />
                </p>
                <a href="#" className="bannerBtn_orange">
                  Know More
                </a>
              </div>
              <div className="img_right bounceInDown">
                <img
                  src={banner4}
                  alt="online examination service provider NSEIT"
                />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="contenthome">
              <div className="bannercont_left">
                <h3 className="banner_heading">Ready to Build Smarter?</h3>
                <p className="banner_text pt-3">
                  Unlock your Digital Transformation Journey with us
                </p>
                <a href="#" className="bannerBtn_orange">
                  Know More
                </a>
              </div>
              <div className="img_right bounceInDown">
                <img src={banner1} alt="Digital Transformation" />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="contenthome">
              <div className="bannercont_left">
                <h3 className="banner_heading">
                  Strategic Technology Partner for Leading Insurers
                </h3>
                <p className="banner_text pt-3">
                  India's 6 out of top 10 insurers trust us for all their
                  solution
                </p>
                <a href="#" className="bannerBtn_orange">
                  Know More
                </a>
              </div>
              <div className="img_right bounceInDown">
                <img
                  src={banner2}
                  alt="Strategic Technology Partner for Leading Insurers"
                />
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </div>
  );
};

export default Banner1;
