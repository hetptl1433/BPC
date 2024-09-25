import React, { useEffect, useState } from "react";
import axios from "axios";
  import { ToastContainer, toast } from "react-toastify";


import logo1 from "../../assets/images/home/icon/50.png";
import { Container, Row, Col, Form, Button, Alert, Modal } from "react-bootstrap";
import ff from "../../assets/images/Extra/download_icon.png";
import gg from "../../assets/images/Extra/hallbooking_icon.png";
import ii from "../../assets/images/Extra/contact_icon.png";
import jj from "../../assets/images/Extra/news_icon.png";
import hh from "../../assets/images/Extra/5.png";
import contactImg from "../../assets/images/home-banner-btn.png";
import close from '../../assets/images/Extra/close-contact.png'
import { Link } from "react-router-dom";
import { NbAboutUs, Logo } from "../../Functions/NbAboutUs";
import { listCourses } from "../../Functions/Courses";
// import { createContactForm } from "../../Functions/ContactForm";

import ReCAPTCHA from "react-google-recaptcha";
const initialState = {
  Name: "",
  Email: "",
  Mobile: "",
  Company: "",
  City: "",
  Services: "",
  Help: "",
  HereFrom: "",
  KnowMore: false,
  IsActive: true,
};


const Nb = () => {


  const [values, setValues] = useState(initialState);
  const [scrolled, setScrolled] = useState();
  const [menu, setMenu] = useState(false);
  const [contact, setContact] = useState(false);
   const [isToastVisible, setToastVisibility] = useState(false);
  const toggleContact = () => {
    setContact(!contact);
  };

   const [NbAboutUsLinks, setNbAboutUsLinks] = useState([]);
  const [logodata, setLogodata] = useState([]);
  const [coursesData, setCoursesData] = useState([]);

const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [captchaVerified, setCaptchaVerified] = useState(false);

const [filter, setFilter] = useState(true);
const [errName, setErrName] = useState(false);
const [errEmail, setErrEmail] = useState(false);
const [errMobile, setErrMobile] = useState(false);
const [errCompany, setErrCompany] = useState(false);
const [errCity, setErrCity] = useState(false);
const [errServices, setErrServices] = useState(false);
const [errHelp, setErrHelp] = useState(false);
const [errHereFrom, setErrHereFrom] = useState(false);
const [capchaErr, setCaptchaErr] = useState(false);




 useEffect(() => {
   const fetchNbAboutUs = async () => {
     try {
       const data = await NbAboutUs();
       setNbAboutUsLinks(data); // Update the state with the fetched data
     } catch (error) {
       console.error("Error loading NbAboutUs:", error);
     }
   };
    const Courses = async () => {
      try {
        const data = await listCourses();
        setCoursesData(data.data);
        // Update the state with the fetched data
      } catch (error) {
        console.error("Error loading Course:", error);
      }
    };
     const LogoLoad = async () => {
       try {
         const data = await Logo();
         console.log("Logo qwData:", data);
             const logo = data.find(
               (item) => item.Title === "logo" && item.IsActive
             );

             // Set the logo data in the state
             setLogodata(logo);
 // Log the data to the console
       } catch (error) {
         console.error("Error loading NbAboutUs:", error);
       }
     };
 



   fetchNbAboutUs(); // Call the function
   LogoLoad();
   Courses();
 }, []);

 
 useState(()=>{
  console.log("logoqwdata:", logodata);
 }, [logodata]);
   const handleChange = (e) => {
     setValues({ ...values, [e.target.name]: e.target.value });
   };
   const handleCheck = (e) => {
     setValues({ ...values, KnowMore: e.target.checked });
   };
 const validate = (
   Name,
   Email,
   Mobile,
   Company,
   City,
   Services,
   Help,
   HereFrom,
   KnowMore
 ) => {
   const errors = {};

   // Validate MailerName
   if (Name === "") {
     errors.Name = "Name is required!";
     setErrName(true);
   } else {
     setErrName(false);
   }

   // Validate Email
   if (Email === "") {
     errors.Email = "Email is required!";
     setErrEmail(true);
   } else {
     setErrEmail(false);
   }

   // Validate Mobile
   if (Mobile === "") {
     errors.Mobile = "Mobile is required!";
     setErrMobile(true);
   } else {
     setErrMobile(false);
   }

   // Validate Company
   if (Company === "") {
     errors.Company = "Company is required!";
     setErrCompany(true);
   } else {
     setErrCompany(false);
   }

   // Validate City
   if (City === "") {
     errors.City = "City is required!";
     setErrCity(true);
   } else {
     setErrCity(false);
   }

   // Validate Services
   if (Services === "") {
     errors.Services = "Services are required!";
     setErrServices(true);
   } else {
     setErrServices(false);
   }

   // Validate Help
   if (Help === "") {
     errors.Help = "Help is required!";
     setErrHelp(true);
   } else {
     setErrHelp(false);
   }

   // Validate HereFrom
   if (HereFrom === "") {
     errors.HereFrom = "Source of referral (Here From) is required!";
     setErrHereFrom(true);
   } else {
     setErrHereFrom(false);
   }

   return errors;
 };

  const handleRedirect = () => {
    window.location.href =
      "http://bpcindia.org/Business-Development-Professional-Wanted.html";
  };
    const handleClick = async (e) => {
      e.preventDefault();
       setFormErrors({});
       console.log("country", values);
       let errors = validate(
         values.Name,
         values.Email,
         values.Mobile,
         values.Company,
         values.City,
         values.Services,
         values.Help,
         values.HereFrom
       );
       if(!captchaVerified){
        setCaptchaErr(true);
       }
       setFormErrors(errors);
       setIsSubmit(true);
       if (Object.keys(errors).length === 0 && captchaVerified) {

         try {
           const response = await axios.post(
             `${process.env.REACT_APP_API_URL_BPC}/api/auth/ContactForm`,
             values
           );

           if (response.data.isOk) {
             console.log(
               "Contact form submitted successfully:",
               response.data.data
               
             );
             toast.success("Sent Successfully", {
              position: "bottom-right",
             })
            setValues(initialState);
            setContact(false);
           } else {
             console.error(
               "Error submitting contact form:",
               response.data.message
             );
             // Handle error (e.g., show error message)
           }
         } catch (error) {
           console.error("Error creating contact form:", error);
           // Handle network or other errors
         }
       }
    };
  const handleMenuToggle = (value) => {
    setMenu(value);
    setScrolled(false);
    if (value === true) {
      document.body.classList.add("no-overflow");
    } else {
      document.body.classList.remove("no-overflow");
    }
  };
    const onCaptchaChange = (token) => {
      if (token) {
        setCaptchaVerified(true);
        setCaptchaErr(false);

      } else {
        setCaptchaVerified(false);
      }
    };
  window.addEventListener("scroll", function () {
    var scrollTop = window.scrollY;

    if (scrollTop > 50) {
      // Change 50 to the desired scroll position where you want the header to become sticky
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });
  
  
  return (
    <div>
      <ToastContainer />

      <header id="headerMain">
        <div
          className={`header ${
            scrolled === true && menu === false && "active"
          }`}
        >
          <div className="pageContainer d-flex justify-content-between">
            <div
              className="logo"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Link to="/">
                <img
                  src={logo1}
                  alt=""
                  style={{ width: "auto", height: "110px" }}
                />
              </Link>
            </div>
            <div className="middle-menu">
              <ul className="pull-left">
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/Services">Services</Link>
                </li>
                <li>
                  <Link to="/Gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/News">News</Link>
                </li>
                <li>
                  <Link to="/Contactus">Contact Us</Link>
                </li>
                <li>
                  <Link onClick={handleRedirect} to="#">
                    Career
                  </Link>
                </li>
                <li>
                  <Link to="#">Login</Link>
                </li>
              </ul>
            </div>
            <div className="right_menu">
              <div
                className={`menuBtn button_container ${
                  menu === true && "active"
                }`}
                id="menuLogo"
              >
                <div
                  className="menu-button"
                  onClick={() => handleMenuToggle(!menu)}
                >
                  <span className="top"></span>
                  <span className="middle"></span>
                  <span className="bottom"></span>
                </div>
                <p>Menu</p>
                <p onClick={() => handleMenuToggle(!menu)}>Close</p>
              </div>
              <div
                className="logo"
                style={{ display: "flex", alignItems: "center" }}
              >
                {!menu && (
                  <Link to="/">
                    <img
                      src={`${process.env.REACT_APP_API_URL_BPC}/${logodata.MediaFile}`}
                      style={{
                        width: "140px",
                        height: "auto",
                        marginRight: "10px",
                      }}
                      alt=""
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
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
      <div className="headerMenuWrap">
        <div className={`headerMenu ${menu === true && "active-menu"}`}>
          <div className="pageContainer">
            <div className={`Menubx ${menu === true && "in-view"}`}>
              <div>
                <div className="menuContent">
                  <div className="mainMainbox">
                    <div className="text-center">
                      <Link to="index.html" className="white_headertxt">
                        BARODA PRODUCTIVITY COUNCIL
                      </Link>
                    </div>

                    <hr />

                    <div className="menu-content">
                      <div className="row rtr">
                        <div className="col-sm-9">
                          <div className="row">
                            <div className="col-sm-4">
                              <h4>
                                <img
                                  data-src="assets/images/home/icon/9.png"
                                  alt="services"
                                  width="28px"
                                  height="28px"
                                  style={{ verticalAlign: "middle" }}
                                  className="lazyloaded"
                                  src="../../assets/images/home/icon/9.png"
                                />
                                Career Planning
                              </h4>
                              <ul>
                                <li>
                                  <Link
                                    to="/"
                                    onClick={() => handleMenuToggle(!menu)}
                                  >
                                    Students of Class 8, 9, and 10
                                  </Link>
                                </li>
                                <li>
                                  <Link to="PAtest.html">Employees</Link>
                                </li>
                                <li>
                                  <a
                                    href="/RouteActivity"
                                    onClick={() => handleMenuToggle(!menu)}
                                  >
                                    Routine Activity Scheet
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-4">
                              <h4>
                                <img
                                  data-src="assets/images/home/icon/8.png"
                                  alt="services"
                                  width="29px"
                                  height="29px"
                                  style={{ verticalAlign: "middle" }}
                                  className="lazyloaded"
                                  src="../../assets/images/home/icon/8.png"
                                />
                                Gallery
                              </h4>
                              <ul>
                                <li>
                                  <Link
                                    to="/Gallery"
                                    onClick={() => handleMenuToggle(!menu)}
                                  >
                                    Photo Gallery
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/Video"
                                    onClick={() => handleMenuToggle(!menu)}
                                  >
                                    Video Gallery
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-4">
                              <h4>
                                <img
                                  alt="services"
                                  width="34px"
                                  height="30px"
                                  style={{ verticalAlign: "middle" }}
                                  className="lazyloaded"
                                  src="../../assets/images/home/icon/solution.png"
                                />
                                <Link
                                  to="/Training"
                                  onClick={() => handleMenuToggle(!menu)}
                                >
                                  Training Programs
                                </Link>
                              </h4>
                              <h4>
                                <img
                                  src={ff}
                                  alt="services"
                                  width="34px"
                                  height="30px"
                                  style={{ verticalAlign: "middle" }}
                                  className="lazyloaded"
                                />
                                <Link
                                  to="/Download"
                                  onClick={() => handleMenuToggle(!menu)}
                                >
                                  Download
                                </Link>
                              </h4>
                            </div>

                            <div className="col-sm-4">
                              <h4>
                                <img
                                  data-src="../../assets/images/Extra/3.png"
                                  alt="services"
                                  width="28px"
                                  height="28px"
                                  style={{ verticalAlign: "middle" }}
                                  className="lazyloaded"
                                  src="../../assets/images/home/icon/3.png"
                                />
                                About Us
                              </h4>
                              <ul>
                                {NbAboutUsLinks.length > 0 ? (
                                  NbAboutUsLinks.map((item, index) => (
                                    <li key={index}>
                                      <Link
                                        to={`/about-us/${item.subTitle}`}
                                        onClick={() => handleMenuToggle(!menu)}
                                      >
                                        {item.Title}
                                      </Link>
                                    </li>
                                  ))
                                ) : (
                                  <p>Loading menu items...</p>
                                )}
                                <li>
                                  <Link>career</Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-4">
                              <h4>
                                <img
                                  data-src="assets/images/home/icon/6.png"
                                  alt="services"
                                  width="28px"
                                  height="28px"
                                  style={{ verticalAlign: "middle" }}
                                  className="lazyloaded"
                                  src="../../assets/images/home/icon/6.png"
                                />
                                Courses
                              </h4>
                              <ul>
                                {coursesData
                                  .sort((a, b) => a.SortOrder - b.SortOrder)
                                  .map((course) => (
                                    <li key={course._id}>
                                      <Link
                                        to={`course/${course._id}`}
                                        onClick={() => handleMenuToggle(!menu)}
                                      >
                                        {course.Name}
                                      </Link>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                            <div className="col-sm-4">
                              <h4>
                                <img
                                  src={gg}
                                  alt="services"
                                  width="28px"
                                  height="28px"
                                  style={{ verticalAlign: "middle" }}
                                  className="lazyloaded"
                                />
                                <Link
                                  to="/HallBooking"
                                  onClick={() => handleMenuToggle(!menu)}
                                >
                                  Hall Booking
                                </Link>
                              </h4>
                              <h4>
                                <img
                                  src={ii}
                                  alt="services"
                                  width="28px"
                                  height="28px"
                                  style={{ verticalAlign: "middle" }}
                                  className="lazyloaded"
                                />
                                <Link
                                  to="/ContactUs"
                                  onClick={() => handleMenuToggle(!menu)}
                                >
                                  Contact Us
                                </Link>
                              </h4>
                              <h4>
                                <img
                                  src={jj}
                                  alt="services"
                                  width="28px"
                                  height="28px"
                                  style={{ verticalAlign: "middle" }}
                                  className="lazyloaded"
                                />
                                <Link
                                  to="/News"
                                  onClick={() => handleMenuToggle(!menu)}
                                >
                                  News
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 fgf">
                          <h4>
                            <img
                              src={hh}
                              alt="services"
                              width="34px"
                              height="30px"
                              style={{ verticalAlign: "middle" }}
                              className="lazyloaded"
                            />
                            <Link to="#">Services</Link>
                          </h4>
                          <ul className="main-header-menu">
                            <li>
                              <Link
                                to="/Services"
                                onClick={() => handleMenuToggle(!menu)}
                              >
                                People and Organizational Capability Enhancement
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/Services"
                                onClick={() => handleMenuToggle(!menu)}
                              >
                                Industries Offerings & Solutions
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/Services"
                                onClick={() => handleMenuToggle(!menu)}
                              >
                                Business Process Re-engineering
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/Services"
                                onClick={() => handleMenuToggle(!menu)}
                              >
                                Time and Motion Study
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/Services"
                                onClick={() => handleMenuToggle(!menu)}
                              >
                                Budgeting Process Improvement
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/Services"
                                onClick={() => handleMenuToggle(!menu)}
                              >
                                Strategy Implementattion Enablers
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/Services"
                                onClick={() => handleMenuToggle(!menu)}
                              >
                                Recruitment and Promotional Interviews
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/Services"
                                onClick={() => handleMenuToggle(!menu)}
                              >
                                Corporate Social Responsibility (CSR)
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contactBtn animated bounce">
        <img
          src={contactImg}
          width="54px"
          height="129px"
          alt="contact us nseit"
          onClick={toggleContact}
        />
      </div>

      <div className={`contactPopup ${contact === true && "active"}`}>
        <div className="clientdata">
          <h3 className="heading32 pb-3">Contact Us</h3>
          <form onSubmit={handleClick}>
            <div className="container-flu">
              <Link to="#" className="closeContForm" onClick={toggleContact}>
                <img
                  src={close}
                  width="45px"
                  height="43px"
                  alt="close contact us nseit"
                />
              </Link>
              <div className="row">
                <div className="col-lg-4">
                  <div className="form-group">
                    <label
                      htmlFor="homename"
                      generated="true"
                      className={`error text-danger pull-right ${
                        !errName ? "d-none" : ""
                      }`}
                    >
                      * Please enter name.
                    </label>
                    <input
                      type="text"
                      name="Name"
                      value={values.Name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="form-control homefname homevalidation"
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label
                      htmlFor="homeemail"
                      generated="true"
                      className={`error text-danger pull-right ${
                        !errEmail ? "d-none" : ""
                      }`}
                    >
                      * Please enter email.
                    </label>
                    <input
                      type="text"
                      name="Email"
                      value={values.Email}
                      placeholder="Email"
                      onChange={handleChange}
                      className="form-control homeemail homevalidation"
                    />
                    <span
                      id="homelblemail"
                      className="contactusvalidate"
                    ></span>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label
                      htmlFor="homemobile"
                      generated="true"
                      className={`error text-danger pull-right ${
                        !errMobile ? "d-none" : ""
                      }`}
                    >
                      * Please enter mobile.
                    </label>
                    <input
                      type="text"
                      name="Mobile"
                      value={values.Mobile}
                      onChange={handleChange}
                      placeholder="Mobile"
                      className="form-control homephone homevalidation"
                    />
                    <span
                      id="homelblphone"
                      className="contactusvalidate"
                    ></span>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label
                      htmlFor="homecompany"
                      generated="true"
                      className={`error text-danger pull-right ${
                        !errCompany ? "d-none" : ""
                      }`}
                    >
                      * Please enter company.
                    </label>
                    <input
                      type="text"
                      name="Company"
                      value={values.Company}
                      onChange={handleChange}
                      placeholder="Company"
                      className="form-control homedepartment homevalidation"
                    />
                    <span
                      id="homelbldepartment"
                      className="contactusvalidate"
                    ></span>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label
                      htmlFor="homecity"
                      generated="true"
                      className={`error text-danger pull-right ${
                        !errCity ? "d-none" : ""
                      }`}
                    >
                      * Please enter city.
                    </label>
                    <input
                      type="text"
                      name="City"
                      value={values.City}
                      onChange={handleChange}
                      placeholder="City"
                      className="form-control homeCity homevalidation"
                    />
                    <span id="homelblcity" className="contactusvalidate"></span>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label
                      htmlFor="homeservices"
                      generated="true"
                      className={`error text-danger pull-right ${
                        !errServices ? "d-none" : ""
                      }`}
                    >
                      * Please select services.
                    </label>
                    <select
                      name="Services"
                      value={values.Services}
                      onChange={handleChange}
                      className="form-control homeservices homevalidation"
                    >
                      <option value="" selected>
                        Services
                      </option>
                      <option value="Digital Examination (DeX)">
                        Digital Examination (DeX)
                      </option>
                      <option value="Digital Transformation">
                        Digital Transformation
                      </option>
                      <option value="Cyber Security">Cyber Security</option>
                    </select>
                    <span
                      id="homelblservice"
                      className="contactusvalidate"
                    ></span>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label
                      htmlFor="homehelp"
                      generated="true"
                      className={`error text-danger pull-right ${
                        !errHelp ? "d-none" : ""
                      }`}
                    >
                      * Please enter Comment.
                    </label>
                    <textarea
                      className="form-control homecomment homevalidation"
                      placeholder="How can we help you?"
                      rows="1"
                      name="Help"
                      onChange={handleChange}
                      value={values.Help}
                    ></textarea>
                    <span
                      id="homelblcomment"
                      className="contactusvalidate"
                    ></span>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label
                      htmlFor="homeherefrom"
                      generated="true"
                      className={`error text-danger pull-right ${
                        !errHereFrom ? "d-none" : ""
                      }`}
                    >
                      * Please enter how you heard about us.
                    </label>
                    <select
                      name="HereFrom"
                      value={values.HereFrom}
                      onChange={handleChange}
                      className="form-control homeknow homevalidation"
                    >
                      <option value="" selected>
                        How did you hear about us ?
                      </option>
                      <option value="Media Article">Media Article</option>
                      <option value="Web Search">Web Search</option>
                      <option value="From a Partner">From a Partner</option>
                      <option value="Word of Mouth">Word of Mouth</option>
                      <option value="Social Media Post">
                        Social Media Post
                      </option>
                      <option value="Analyst Reference">
                        Analyst Reference
                      </option>
                      <option value="Others">Others</option>
                    </select>
                    <span
                      id="homelblhowdidyouhear"
                      className="contactusvalidate"
                    ></span>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label
                      className="contact-checkbox agree-container"
                      htmlFor="homerecieveinfo"
                    >
                      I would like to know more about your services and
                      offerings
                      <input
                        id="homerecieveinfo"
                        type="checkbox"
                        className="homevalidation"
                        name="KnowMore"
                        checked={values.KnowMore}
                        onChange={handleCheck}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <span
                    id="homelblrecieveinfo"
                    className="contactusvalidate"
                  ></span>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="homehelp"
                    generated="true"
                    className={`error text-danger pull-right ${
                      !capchaErr ? "d-none" : ""
                    }`}
                  >
                    * Please verify capcha.
                  </label>
                  <ReCAPTCHA
                    className="mb-3"
                    onChange={onCaptchaChange}
                    sitekey={process.env.REACT_APP_SITE_KEY}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="submit"
                      className="Button Active"
                      value="Submit"
                      onClick={handleClick}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <span
                      id="homelblstatus"
                      className="contactussuccess"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Nb;
