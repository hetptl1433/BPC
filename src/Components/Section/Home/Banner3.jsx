import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import { serviceData } from "../../../Functions/Services"; // Adjust the path as necessary

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

  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const data = await serviceData();
        setServicesData(data);
      } catch (error) {
        console.error("Error fetching service data:", error);
      }
    };

    fetchServiceData();
  }, []);

  return (
    <div>
      <section className="sevicesbox" id="nseitservice">
        <Container>
          <h3 className="heading32"> Services </h3>
          <p>We deliver services that solve problems for our customers </p>
          <div className="Servicbx justify-content-between pt-5">
            <div className="cyber-security-slider row">
              <Slider {...settings}>
                {servicesData.map((service, index) => (
                  <div className="fgf" key={index}>
                    <div className="item">
                      <a href="#">
                        <div className="box service_boxhover">
                          <div className="img">
                            <img
                              src={`${process.env.REACT_APP_API_URL_BPC}/${service.image}`}
                              width="75px"
                              height="75px"
                              alt={service.name}
                            />
                          </div>
                          <h3 className="regular service-head">
                            {service.name}
                          </h3>
                          <p>{service.shortdesc}</p>
                          {/* <a
                            href={`/Service/${service._id}`}
                            className="readmoreRed pt-3"
                          >
                            Read More
                          </a> */}
                          <a
                            href={`/Services`}
                            className="readmoreRed pt-3"
                          >
                            Read More
                          </a>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Banner3;
