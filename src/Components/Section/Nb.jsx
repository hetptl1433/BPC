import React, { useEffect, useState } from "react";
import logo1 from "../../assets/images/home/icon/50.png";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import ff from "../../assets/images/Extra/download_icon.png";
import gg from "../../assets/images/Extra/hallbooking_icon.png";
import ii from "../../assets/images/Extra/contact_icon.png";
import jj from "../../assets/images/Extra/news_icon.png";
import hh from "../../assets/images/Extra/5.png";
import close from '../../assets/images/Extra/close-contact.png'
import { Link } from "react-router-dom";
import { NbAboutUs, Logo } from "../../Functions/NbAboutUs";
import { listCourses } from "../../Functions/Courses";
import { createContactForm } from "../../Functions/ContactForm";
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
  IsActive: false,
};

const Nb = () => {
  const [values, setValues] = useState(initialState);
  const [scrolled, setScrolled] = useState();
  const [menu, setMenu] = useState(false);
  const [contact, setContact] = useState(false);
  const toggleContact = () => {
    setContact(!contact);
  };

   const [NbAboutUsLinks, setNbAboutUsLinks] = useState([]);
  const [logodata, setLogodata] = useState([]);
  const [coursesData, setCoursesData] = useState([]);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Company, setCompany] = useState("");
  const [City, setCity] = useState("");
  const [Services, setServices] = useState("");
  const [Help, setHelp] = useState("");
  const [HereFrom, setHereFrom] = useState("");
  const [KnowMore, setKnowMore] = useState(false);
  const [IsActive, setIsActive] = useState(false);

const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});

const [filter, setFilter] = useState(true);
const [errName, setErrName] = useState(false);
const [errEmail, setErrEmail] = useState(false);
const [errMobile, setErrMobile] = useState(false);
const [errCompany, setErrCompany] = useState(false);
const [errCity, setErrCity] = useState(false);
const [errServices, setErrServices] = useState(false);
const [errHelp, setErrHelp] = useState(false);
const [errHereFrom, setErrHereFrom] = useState(false);


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
    const handleClick = (e) => {
      e.preventDefault();
      console.log("ydbudb");
      setFormErrors({});
      console.log("country", values);
      let errors = validate(
        Name,
        Email,
        Mobile,
        Company,
        City,
        Services,
        Help,
        HereFrom
      );
      setFormErrors(errors);
      setIsSubmit(true);

      if (Object.keys(errors).length === 0) {
        // setLoadingOption(true);
        const formdata = new FormData();

        formdata.append("Name", Name);
        formdata.append("Email", Email);
        formdata.append("Mobile", Mobile);
        formdata.append("Company", Company);
        formdata.append("City", City);
        formdata.append("Services", Services);
        formdata.append("Help", Help);
        formdata.append("HereFrom", HereFrom);
        formdata.append("KnowMore", KnowMore);
        formdata.append("IsActive", IsActive);
        createContactForm(formdata)
          .then((res) => {
            console.log(res);
            setName("");
            setEmail("");
            setMobile("");
            setCompany("");
            setCity("");
            setServices("");
            setHelp("");
            setHereFrom("");
            setKnowMore(false);
            setIsActive(false);

            toggleContact();
          })
          .catch((err) => {
            console.log("Error from server:", err);
          });
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
      <header id="headerMain">
        <div className={`header ${scrolled === true && "active"}`}>
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
                                  src="assets/images/home/icon/9.png"
                                />
                                Career Planning
                              </h4>
                              <ul>
                                <li>
                                  <Link to="/">
                                    Students of Class 8, 9, and 10
                                  </Link>
                                </li>
                                <li>
                                  <Link to="PAtest.html">Employees</Link>
                                </li>
                                <li>
                                  <Link to="/RouteActivity">
                                    Routine Activity Scheet
                                  </Link>
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
                                  src="assets/images/home/icon/8.png"
                                />
                                Gallery
                              </h4>
                              <ul>
                                <li>
                                  <Link to="/Gallery">Photo Gallery</Link>
                                </li>
                                <li>
                                  <Link to="/Video">Video Gallery</Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-4">
                              <h4>
                                <img
                                  data-src="assets/images/home/icon/solution.png"
                                  alt="services"
                                  width="34px"
                                  height="30px"
                                  style={{ verticalAlign: "middle" }}
                                  className="lazyloaded"
                                  src="assets/images/home/icon/solution.png"
                                />
                                <Link to="/Training">Training Programs</Link>
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
                                <Link to="/Home/Download">Download</Link>
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
                                  src="assets/images/home/icon/3.png"
                                />
                                About Us
                              </h4>
                              <ul>
                                {NbAboutUsLinks.length > 0 ? (
                                  NbAboutUsLinks.map((item, index) => (
                                    <li key={index}>
                                      <a href={`/about-us/${item.subTitle}`}>
                                        {item.Title}
                                      </a>
                                    </li>
                                  ))
                                ) : (
                                  <p>Loading menu items...</p>
                                )}
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
                                  src="assets/images/home/icon/6.png"
                                />
                                Courses
                              </h4>
                              <ul>
                                {coursesData
                                  .sort((a, b) => a.SortOrder - b.SortOrder)
                                  .map((course) => (
                                    <li key={course._id}>
                                      <Link to={`course/${course._id}`}>
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
                                <Link to="/HallBooking">Hall Booking</Link>
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
                                <Link to="/ContactUs">Contact Us</Link>
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
                                <Link to="/News">News</Link>
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
                              <Link to="/Services">
                                People and Organizational Capability Enhancement
                              </Link>
                            </li>
                            <li>
                              <Link to="/Home/ServiceDetail/2">
                                Industries Offerings & Solutions
                              </Link>
                            </li>
                            <li>
                              <Link to="/Home/ServiceDetail/3">
                                Business Process Re-engineering
                              </Link>
                            </li>
                            <li>
                              <Link to="/Home/ServiceDetail/4">
                                Time and Motion Study
                              </Link>
                            </li>
                            <li>
                              <Link to="/Home/ServiceDetail/5">
                                Budgeting Process Improvement
                              </Link>
                            </li>
                            <li>
                              <Link to="/Home/ServiceDetail/6">
                                Strategy Implementattion Enablers
                              </Link>
                            </li>
                            <li>
                              <Link to="/Home/ServiceDetail/7">
                                Recruitment and Promotional Interviews
                              </Link>
                            </li>
                            <li>
                              <Link to="/Home/ServiceDetail/8">
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
          src="assets/images/home-banner-btn.png"
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
