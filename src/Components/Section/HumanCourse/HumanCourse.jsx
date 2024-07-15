import { useState } from "react";
import React from "react";
import { Modal, Button, Form, Row, Col, Container } from "react-bootstrap";

const HumanCourse = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => setShow(true);

  return (
    <div>
      <section className="course mb-5">
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
                  Human Resource Management
                </h2>
              </div>
              <div className="col-lg-3 col-md-3 inner_bodybox rrk">
                <h1 className="heading18">Duration : 3 Months</h1>
                <h1 className="heading18">Timing : 6:00pm to 8:00pm</h1>
                <h1 className="heading18">Fees : 4000.00</h1>
                <h1 className="heading18">Eligibility Criteria : 12th Pass</h1>
              </div>
            </div>
            <p className="heading16 mb-4">
              <div style={{ fontSize: "20px" }}>Methodology :</div>
              <br />
              <br />
              Course Highlights : Systemized Approach, Enhanced Vocabulary,
              Emphasis on verbal Communication through Role play, GD and
              Extempore.
              <br />
              <br />
              <b style={{ fontSize: "15px" }}>Periodical Tests :</b>
              <br />
              1. English Aptitude Test to judge the level of the participants
              <br />
              2. Intermediate Test
              <br />
              3. Final Assessment Test
              <br />
              <br />
              <b style={{ fontSize: "20px" }}>Programme Module :</b>
              <br />
              <br />
              <b style={{ fontSize: "15px" }}>
                Module 1: Introduction to English - 1hr
              </b>
              <br />
              <br />
              To acclimatize students with the world of English. Getting to know
              each other and bonding with the faculty to make the learning
              experience enriching.Welcome to EditPad.org - your online plain
              text editor. Enter or paste your text here. To download and save
              it, click on the button below.
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
    </div>
  );
};

export default HumanCourse;
