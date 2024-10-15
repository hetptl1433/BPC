import React, { useEffect, useState } from "react";
import SocialVision from "../Section/Vision/SocialVision";
import Commitment from "../Section/Vision/Commitment";
import Banner6 from "../Section/Home/Banner6";
import p32 from "../../assets/images/Extra/top-banners_11.jpg";
import p33 from "../../assets/images/drupal/t3.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import ServiceSlider from "../Section/Home/ServiceSlider";
import Banner5 from "../Section/Home/Banner5";

const NbAboutUs = () => {
  const { subTitle } = useParams(); // Extract subTitle from URL
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL_BPC}/api/auth/get/subContent/${subTitle}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

  
      fetchData();
    
  }, [subTitle]);
  useEffect(() => {
    console.log("Current Data State:", data.Title);
     // Log current data state
  }, [data]);

  return (
    <div>
      <div>
        <section className="aboutpage ">
          <div className="abouttxt ">
            <h1 className="heading40 animated bounceInDown regular-light">
              {data.Title}
            </h1>
            <p className="banner_text pt-2 animated fadeInLeft regular-light">
              Delivering value of society
            </p>
          </div>
          <div className="smallbanner">
            <img
              data-src={p32}
              alt="banner image"
              className="lazyloaded img-fluid"
              src={p32}
            />
          </div>
          <div className="right_trangle animated bounceInDown">
            <img
              data-src={
                subTitle === "OurActivities"
                  ? "../../assets/images/drupal/t2.png"
                  : p33
              }
              alt="triangle image"
              className="lazyloaded img-fluid"
              src={
                subTitle === "OurActivities"
                  ? "../../assets/images/drupal/t2.png"
                  : p33
              }
            />
          </div>
        </section>
      </div>
      <section>
        <div>
          <div className="page_top_text animation-element slide-left in-view">
            <div
              dangerouslySetInnerHTML={{
                __html: data.Desc ,
              }}
            />
          </div>
        </div>
      </section>
      {/* <SocialVision></SocialVision> */}
      {/* <Commitment></Commitment> */}
      <Banner5 />
      <Banner6 />
    </div>
  );
};

export default NbAboutUs;
