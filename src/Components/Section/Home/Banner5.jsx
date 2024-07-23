import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Banner5 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
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
          slidesToShow:4,
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

  const clients = [
    "client1.png",
    "client2.png",
    "client3.png",
    "client4.png",
    "client5.png",
    "client6.png",
    "client7.png",
    "client8.png",
    "client9.png",
    "client10.png",
    "client11.png",
    "client12.png",
    "client13.png",
    "client14.png",
    "client15.png",
    "client16.png",
    "client17.png",
    "client18.png",
    "client19.png",
    "client20.png",
    "client21.png",
    "client22.png",
    "client23.png",
  ];

  return (
    <section className="clientbx">
      <Container>
        <Row className="clientdata tnn  bounce-up in-view">
          <Col>
            <h3 className="heading32">We Serve</h3>
            <p>25+ Successful Projects</p>
            <div className="box  justify-content-between pt-3">
              <Slider {...settings} className="clentbox-slider">
                {clients.map((client, index) => (
                  <div key={index} className="item">
                    <div className="img">
                      <img
                        src={`assets/images/drupal/${client}`}
                        width="180px"
                        height="80px"
                        alt={`Client ${index + 1}`}
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
