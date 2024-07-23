import React from "react";
import p33 from "../../../assets/images/Extra/top-banners_11.jpg";

const CoursesBanner = () => {
  return (
    <div>
      <div>
        <section className="aboutpage ">
          <div className="abouttxt ">
            <h1 className="heading40 animated bounceInDown regular-light">
              Courses
            </h1>
          </div>
          <div className="smallbanner">
            <img
              data-src={p33}
              alt="banner image"
              className="lazyloaded img-fluid"
              src={p33}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default CoursesBanner;
