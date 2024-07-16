import React, { useState } from "react";
import logo1 from "../../assets/images/home/icon/50.png";
import LazyLoad from "react-lazyload";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
const Nb = () => {
  const [scrolled, setScrolled] = useState();
  const [menu, setMenu] = useState(false);
  const [contact, setContact] = useState(false);
  const toggleContact = () => {
    setContact(!contact);
  };

  const handleRedirect = () => {
    window.location.href =
      "http://bpcindia.org/Business-Development-Professional-Wanted.html";
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
              <a href="/about">
                <img
                  src={logo1}
                  alt=""
                  style={{ width: "auto", height: "110px" }}
                />
              </a>
            </div>
            <div className="middle-menu">
              <ul className="pull-left">
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/Services">Services</a>
                </li>
                <li>
                  <a href="/Gallery">Gallery</a>
                </li>
                <li>
                  <a href="/News">News</a>
                </li>
                <li>
                  <a href="/Contactus">Contact Us</a>
                </li>
                <li>
                  <a onClick={handleRedirect} href="#">
                    Career
                  </a>
                </li>
                <li>
                  <a href="#">Login</a>
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
                  <a href="index.html">
                    <img
                      src="assets/images/logonew1.png"
                      style={{
                        width: "140px",
                        height: "auto",
                        marginRight: "10px",
                      }}
                      alt=""
                    />
                  </a>
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
                      <a href="index.html" className="white_headertxt">
                        BARODA PRODUCTIVITY COUNCIL
                      </a>
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
                                  <a href="/Courses">
                                    Students of Class 8, 9, and 10
                                  </a>
                                </li>
                                <li>
                                  <a href="PAtest.html">Employees</a>
                                </li>
                                <li>
                                  <a href="/RouteActivity">
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
                                  src="assets/images/home/icon/8.png"
                                />
                                Gallery
                              </h4>
                              <ul>
                                <li>
                                  <a href="/Gallery">Photo Gallery</a>
                                </li>
                                <li>
                                  <a href="videogallery.html">Video Gallery</a>
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
                                <a href="/Training">Training Programs</a>
                              </h4>
                              <h4>
                                <img
                                  src="http://bpcindia.org/Content/Client/assets/images/home/icon/download_icon.png"
                                  alt="services"
                                  width="34px"
                                  height="30px"
                                  style={{ verticalAlign: "middle" }}
                                  className="lazyloaded"
                                />
                                <a href="/Home/Download">Download</a>
                              </h4>
                            </div>

                            <div className="col-sm-4">
                              <h4>
                                <img
                                  data-src="assets/images/home/icon/3.png"
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
                                <li>
                                  <a href="/about">Company Profile</a>
                                </li>
                                <li>
                                  <a href="/TeamMember">Team Members</a>
                                </li>
                                <li>
                                  <a href="/Vision">Vision / Mission</a>
                                </li>
                                <li>
                                  <a href="/Activity">Activities</a>
                                </li>
                                <li>
                                  <a href="/Program">Programme</a>
                                </li>
                                <li>
                                  <a onClick={handleRedirect} href="#">
                                    Career
                                  </a>
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
                                  src="assets/images/home/icon/6.png"
                                />
                                Courses
                              </h4>
                              <ul>
                                <li>
                                  <a href="/English">English Improvement</a>
                                </li>
                                <li>
                                  <a href="/Human">Human Resource Management</a>
                                </li>
                                <li>
                                  <a href="/Indirect">Indirect Taxation</a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-4">
                              <h4>
                                <img
                                  src="http://bpcindia.org/Content/Client/assets/images/home/icon/hallbooking_icon.png"
                                  alt="services"
                                  width="28px"
                                  height="28px"
                                  style={{ verticalAlign: "middle" }}
                                  className="lazyloaded"
                                />
                                <a href="/Home/HallBooking">Hall Booking</a>
                              </h4>
                              <h4>
                                <img
                                  src="http://bpcindia.org/Content/Client/assets/images/home/icon/contact_icon.png"
                                  alt="services"
                                  width="28px"
                                  height="28px"
                                  style={{ verticalAlign: "middle" }}
                                  className="lazyloaded"
                                />
                                <a href="/ContactUs">Contact Us</a>
                              </h4>
                              <h4>
                                <img
                                  src="http://bpcindia.org/Content/Client/assets/images/home/icon/news_icon.png"
                                  alt="services"
                                  width="28px"
                                  height="28px"
                                  style={{ verticalAlign: "middle" }}
                                  className="lazyloaded"
                                />
                                <a href="/News">News</a>
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 fgf">
                          <h4>
                            <img
                              src="http://bpcindia.org/Content/Client/assets/images/home/icon/5.png"
                              alt="services"
                              width="34px"
                              height="30px"
                              style={{ verticalAlign: "middle" }}
                              className="lazyloaded"
                            />
                            <a href="#">Services</a>
                          </h4>
                          <ul className="main-header-menu">
                            <li>
                              <a href="/Home/ServiceDetail/1">
                                People and Organizational Capability Enhancement
                              </a>
                            </li>
                            <li>
                              <a href="/Home/ServiceDetail/2">
                                Industries Offerings & Solutions
                              </a>
                            </li>
                            <li>
                              <a href="/Home/ServiceDetail/3">
                                Business Process Re-engineering
                              </a>
                            </li>
                            <li>
                              <a href="/Home/ServiceDetail/4">
                                Time and Motion Study
                              </a>
                            </li>
                            <li>
                              <a href="/Home/ServiceDetail/5">
                                Budgeting Process Improvement
                              </a>
                            </li>
                            <li>
                              <a href="/Home/ServiceDetail/6">
                                Strategy Implementattion Enablers
                              </a>
                            </li>
                            <li>
                              <a href="/Home/ServiceDetail/7">
                                Recruitment and Promotional Interviews
                              </a>
                            </li>
                            <li>
                              <a href="/Home/ServiceDetail/8">
                                Corporate Social Responsibility (CSR)
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <a href="#" className="bannerBtn_orange">
                        Get in Touch
                      </a>
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
          <form
            action="/Home/ContactPopupPost"
            encType="multipart/form-data"
            id="Inquiryform"
            method="post"
            noValidate
          >
            <div className="container-flu">
              <a href="#" className="closeContForm" onClick={toggleContact}>
                <img
                  src="http://bpcindia.org/Content/Client/assets/images/close-contact.png"
                  width="45px"
                  height="43px"
                  alt="close contact us nseit"
                />
              </a>
              <div className="row">
                <div className="col-lg-4">
                  <div className="form-group">
                    <input
                      type="text"
                      name="Name"
                      id="homename"
                      aria-labelledby="fnameLabel"
                      placeholder="Name"
                      className="form-control homefname homevalidation"
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <input
                      type="text"
                      id="homeemailid"
                      name="Email"
                      aria-labelledby="emailidLabel"
                      placeholder="Email"
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
                      id="homephonenu"
                      name="Mobile"
                      aria-labelledby="phoneLabel"
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
                      id="homedepartmentval"
                      name="Company"
                      aria-labelledby="departmentLabel"
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
                      id="homecityval"
                      name="City"
                      aria-labelledby="cityLabel"
                      placeholder="City"
                      className="form-control homeCity homevalidation"
                    />
                    <span id="homelblcity" className="contactusvalidate"></span>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <select
                      id="homeservices"
                      name="Services"
                      aria-labelledby="servicesLabel"
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
                      name="Comment"
                      id="homecommentval"
                      aria-labelledby="commentLabel"
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
                      id="homehowdidyouhear"
                      name="Know"
                      aria-labelledby="howdidLabel"
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
              <div className="row">
                <div className="col-lg-4">
                  <script type="text/javascript">
                    {`$(function () {$('#fb666c7970814f13ae231d453e2d9a29').show();});
                                        function ______7ff92b0813174b5aa851179e688026c8________() { 
                                            $('#fb666c7970814f13ae231d453e2d9a29').hide(); 
                                            $.post("/DefaultCaptcha/Refresh", { t: $('#CaptchaDeText').val() }, function(){
                                                $('#fb666c7970814f13ae231d453e2d9a29').show();
                                            }); 
                                            return false; 
                                        }`}
                  </script>
                  <br />
                  <img
                    id="CaptchaImage"
                    src="/DefaultCaptcha/Generate?t=243ac51203b042ccb52d619c67da878a"
                    alt="Captcha"
                  />
                  <input
                    id="CaptchaDeText"
                    name="CaptchaDeText"
                    type="hidden"
                    value="243ac51203b042ccb52d619c67da878a"
                  />
                  <br />
                  <a
                    href="#CaptchaImage"
                    id="fb666c7970814f13ae231d453e2d9a29"
                    onClick="______7ff92b0813174b5aa851179e688026c8________()"
                    style={{ display: "none" }}
                  >
                    Refresh
                  </a>
                  <br />
                  Input symbols
                  <br />
                  <input
                    autoComplete="off"
                    autoCorrect="off"
                    id="CaptchaInputText"
                    name="CaptchaInputText"
                    type="text"
                    value=""
                  />
                  <br />
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
                        type="checkbox"
                        className="homevalidation"
                        id="homerecieveinfo"
                        name="Terms"
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
