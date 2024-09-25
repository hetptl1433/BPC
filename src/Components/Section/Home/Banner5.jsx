import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import { fetchServeFiles } from "../../../Functions/Serve"; // Adjust the path as necessary

const Banner5 = () => {
  const [serveFiles, setServeFiles] = useState([]);

  useEffect(() => {
    const getServeFiles = async () => {
      try {
        const data = await fetchServeFiles();
        setServeFiles(data);
      } catch (error) {
        console.error("Error fetching serve files:", error);
      }
    };

    getServeFiles();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="clientbx">
      <Container>
        <Row className="clientdata tnn bounce-up in-view">
          <Col>
            <h3 className="heading32">We Serve</h3>
            <p>25+ Successful Projects</p>
            <div className="box justify-content-between pt-3">
              <Slider {...settings} className="clentbox-slider">
                {serveFiles
                  .sort((a, b) => a.SortOrder - b.SortOrder) // Ensure correct order
                  .map((file) => (
                    <div key={file._id} className="item">
                      <div className="img">
                        <img
                          src={`${process.env.REACT_APP_API_URL_BPC}/${file.ServeFile}`}
                          width="180px"
                          height="80px"
                          alt={file.Title}
                          style={{ opacity: 1 }}
                        />
                      </div>
                    </div>
                  ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner5;
