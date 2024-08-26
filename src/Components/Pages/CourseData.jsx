import React, { useEffect, useState } from "react";
import CoursesBanner from "../Section/Courses/CoursesBanner";
import Banner6 from "../Section/Home/Banner6";
import { useParams } from "react-router-dom";
import { Modal, Button, Form, Row, Col, Container } from "react-bootstrap";
import { listCoursedata } from "../../Functions/CouesesData";
import ReCAPTCHA from "react-google-recaptcha";
import { createCourseForm } from "../../Functions/CoursesForm";

const initialState = {
  Email: "",
  Mobile: "",
  ContactPerson: "",
  CompanyName: "",
  CourseName: "",
  IsActive: true,
};

const CourseForm = () => {
  const { id } = useParams();
  const [values, setValues] = useState(initialState);
  const [courseInnerData, setCourseInnerData] = useState(null);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaErr, setCaptchaErr] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [show, setShow] = useState(false);
   const [isToastVisible, setToastVisibility] = useState(false);


  const handleChange = (e) => {
    setValues({ ...values, CourseName: courseInnerData.Name, [e.target.name]: e.target.value });

  };

  const handleCheck = (e) => {
    setValues({ ...values, IsActive: e.target.checked });
  };

  const validate = () => {
    const errors = {};

    if (!values.CourseName) {
      errors.CourseName = "Course Name is required!";
    }

    if (!values.Email) {
      errors.Email = "Email is required!";
    }

    if (!values.Mobile) {
      errors.Mobile = "Mobile is required!";
    }

    if (!values.ContactPerson) {
      errors.ContactPerson = "Contact person is required!";
    }

    if (!values.CompanyName) {
      errors.CompanyName = "Company Name is required!";
    }

    return errors;
  };

  const handleClick = (e) => {
    e.preventDefault();

    // Check CAPTCHA first
    if (!captchaVerified) {
      setCaptchaErr(true);
      console.log("CAPTCHA not verified");
      return;
    }

    const errors = validate();
    setFormErrors(errors);
    setIsSubmit(true);

    if (Object.keys(errors).length === 0) {
      const formdata = new FormData();
      formdata.append("Email", values.Email);
      formdata.append("Mobile", values.Mobile);
      formdata.append("ContactPerson", values.ContactPerson);
      formdata.append("CompanyName", values.CompanyName);
      formdata.append("CourseName", courseInnerData.Name);
      formdata.append("IsActive", values.IsActive);

      console.log("Submitting form with data:", formdata);

      createCourseForm(formdata)
        .then((res) => {
          console.log("Response from server:", res);
           setToastVisibility(true);
          setValues(initialState);
          handleShow();
          handleClose();
        })
        .catch((err) => {
          console.log("Error from server:", err);
        });
    } else {
      console.log("Form has errors:", errors);
    }
  };


  const onCaptchaChange = (token) => {
    setCaptchaVerified(!!token);
    setCaptchaErr(!token);
  };

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
      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
        <div
          id="liveToast"
          className={`toast ${isToastVisible ? "show" : "hide"}`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <strong className="me-auto">BPC India</strong>
            <small>Just now</small>
            <button
              type="button"
              className="btn-close"
              onClick={() => {
                setToastVisibility(false);
              }}
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">
            Your message has been submitted. Our team will contact you soon.
          </div>
        </div>
      </div>
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
                              name="CompanyName"
                              value={values.CompanyName}
                              onChange={handleChange}
                              placeholder="Enter Company Name"
                              isInvalid={!!formErrors.CompanyName}
                            />
                            {formErrors.CompanyName && (
                              <Form.Control.Feedback type="invalid">
                                {formErrors.CompanyName}
                              </Form.Control.Feedback>
                            )}
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="formContactPerson">
                            <Form.Label>Contact Person:</Form.Label>
                            <Form.Control
                              type="text"
                              name="ContactPerson"
                              value={values.ContactPerson}
                              onChange={handleChange}
                              placeholder="Enter Your Name"
                              isInvalid={!!formErrors.ContactPerson}
                            />
                            {formErrors.ContactPerson && (
                              <Form.Control.Feedback type="invalid">
                                {formErrors.ContactPerson}
                              </Form.Control.Feedback>
                            )}
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Form.Group controlId="formEmailAddress">
                            <Form.Label>Email Address:</Form.Label>
                            <Form.Control
                              type="email"
                              name="Email"
                              value={values.Email}
                              onChange={handleChange}
                              placeholder="Enter Your Email"
                              isInvalid={!!formErrors.Email}
                            />
                            {formErrors.Email && (
                              <Form.Control.Feedback type="invalid">
                                {formErrors.Email}
                              </Form.Control.Feedback>
                            )}
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="formMobileNumber">
                            <Form.Label>Mobile Number:</Form.Label>
                            <Form.Control
                              type="text"
                              name="Mobile"
                              value={values.Mobile}
                              onChange={handleChange}
                              placeholder="Enter Your Mobile Number"
                              isInvalid={!!formErrors.Mobile}
                            />
                            {formErrors.Mobile && (
                              <Form.Control.Feedback type="invalid">
                                {formErrors.Mobile}
                              </Form.Control.Feedback>
                            )}
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group controlId="formCaptcha">
                        <ReCAPTCHA
                          className="mb-3"
                          onChange={onCaptchaChange}
                          sitekey={process.env.REACT_APP_SITE_KEY}
                        />
                        {captchaErr && (
                          <div className="text-danger">
                            Please verify the CAPTCHA
                          </div>
                        )}
                      </Form.Group>
                      <Button variant="primary" onClick={handleClick}>
                        Submit
                      </Button>
                    </Form>
                  </Container>
                </Modal.Body>
              </Modal>
            </p>
          </div>
        </div>
      </section>

      <Banner6 />
    </div>
  );
};

export default CourseForm;
