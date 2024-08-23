import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../../../assets/css/Banner1.css";
import { listBanner } from "../../../Functions/BannerImage";

const Banner1 = () => {
  const [banner, setBanner] = useState([]);


 useEffect(() => {
   listBanner().then((res) => {
     console.log("datais",res.data);
     setBanner(res.data);
   });

 }, []);

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
    dots: false,
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
    <section className="homepage">
      <Slider {...settings}>
        {banner.map((item) => (
          <div className="item" key={item.id}>
            <div className="contenthome">
              <div className="bannercont_left">
                <h3 className="banner_heading">{item.Title}</h3>
                <p className="banner_text pt-3">{item.Text}</p>
                <Link to="#" className="bannerBtn_orange">
                  Know More
                </Link>
              </div>
              <div className="img_right bounceInDown">
                <img
                  src={`${process.env.REACT_APP_API_URL_BPC}/${item.bannerImage}`}
                  alt={item.Title}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Banner1;
