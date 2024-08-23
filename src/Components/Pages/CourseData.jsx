import React, { useEffect, useState } from "react";
import CoursesBanner from "../Section/Courses/CoursesBanner";
import Banner6 from "../Section/Home/Banner6";
import { useParams } from "react-router-dom";
import { Modal, Button, Form, Row, Col, Container } from "react-bootstrap";
import { listCoursedata } from "../../Functions/CouesesData";

const CourseData = () => {
  const { id } = useParams();
  const [courseInnerData, setCourseInnerData] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchInnerData = async () => {
      try {
        const data = await listCoursedata(id);
        setCourseInnerData(data.data);
        console.log("Course Data:", data.data);
      } catch (error) {
        console.error("Error loading course data:", error);
      }
    };
    fetchInnerData();
  }, [id]);

  return (
    <div>
      <CoursesBanner />
      <section className="course">
        <div className="pageContainer">
          <div
            className="page_top_text animation-element slide-left in-view"
            style={{
              boxShadow: "0px 0px 10px grey",
              padding: "20px 20px 30px 20px",
              margin: "30px 0px",
            }}
          >
            <div className="row bodbox" style={{ marginTop: "50px" }}>
              <div
                className="h1 col-lg-8 col-md-8"
                style={{ border: "0px", paddingLeft: "0px" }}
              >
                <h2 className="heading32 pb-3 px-3 ft-3">
                  {courseInnerData?.Name || "Course Title"}
                </h2>
              </div>
              <div className="col-lg-3 col-md-3 inner_bodybox rrk">
                <h1 className="heading18">
                  Duration : {courseInnerData?.Duration || "N/A"}
                </h1>
                <h1 className="heading18">
                  Timing : {courseInnerData?.Timing || "N/A"}
                </h1>
                <h1 className="heading18">
                  Fees : {courseInnerData?.Fees || "N/A"}
                </h1>
                <h1 className="heading18">
                  Eligibility Criteria : {courseInnerData?.Eligibility || "N/A"}
                </h1>
              </div>
            </div>
            <p className="heading16 mb-4">
              <div style={{ fontSize: "20px" }}>Methodology :</div>
              <br />
              <br />
              <div
                dangerouslySetInnerHTML={{
                  __html: courseInnerData?.Desc || "",
                }}
              />
            </p>
            <p>
              <button
                type="button"
                onClick={handleShow}
                style={{
                  float: "right",
                  padding: "0px 8px",
                  backgroundColor: "#4d428a",
                  borderRadius: "9px",
                  color: "#fff",
                }}
              >
                Inquiry
              </button>
              <Modal
                show={show}
                className="rrfr"
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Inquiry Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Container>
                    <Form>
                      <Row>
                        <Col md={6}>
                          <Form.Group controlId="formCompanyName">
                            <Form.Label>Company Name:</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Company Name"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="formContactPerson">
                            <Form.Label>Contact Person:</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Your Name"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Form.Group controlId="formEmailAddress">
                            <Form.Label>Email Address:</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Enter Your Email"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="formMobileNumber">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Contact Number"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group controlId="formCaptcha">
                        <div className="d-flex align-items-center">
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA... (Captcha Image)"
                            alt="captcha"
                            style={{ marginRight: "10px" }}
                          />
                        </div>
                        <Button variant="link" style={{ paddingLeft: "0" }}>
                          Refresh
                        </Button>
                        <div className="row">
                          <div className="col-md-6">
                            <Form.Label>Input symbols</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Input symbols"
                            />
                          </div>
                        </div>
                      </Form.Group>
                    </Form>
                  </Container>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="danger" onClick={handleClose}>
                    Book Now
                  </Button>
                </Modal.Footer>
              </Modal>
            </p>
          </div>
        </div>
      </section>
      <Banner6 />
    </div>
  );
};

export default CourseData;
