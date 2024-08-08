// // src/components/ServiceDetails/ServiceDetails.js

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { serviceData } from "../../../Functions/ServicesData"; // Adjust the path as necessary

// const ServiceDetails = () => {

//   const { id } = useParams(); // Assuming you're using react-router for routing
//   const [service, setService] = useState(null);

//   useEffect(() => {
//     const fetchServiceData = async () => {
//       try {
//         const data = await serviceData(id);
//         setService(data);
//       } catch (error) {
//         console.error("Error fetching service data:", error);
//       }
//     };

//     fetchServiceData();
//   }, [id]);

//   if (!service) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>{service.name}</h1>
//       <img
//         src={`${process.env.REACT_APP_API_URL_BPC}/${service.image}`}
//         alt={service.name}
//       />
//       <p>{service.desc}</p> {/* Assuming there is a description field */}
//     </div>
//   );
// };

// export default ServiceDetails;



import React, { useState } from "react";
import ss1 from "../../../assets/images/Extra/CSR_img.png";

const ServiceDetails = () => {
  const [activePanel, setActivePanel] = useState(null);

  const togglePanel = (panelId) => {
    setActivePanel(activePanel === panelId ? null : panelId);
  };

  return (
    <section className="para_section mb-5">
      <div className="pageContainer">
        <div className="accordion mt-4" id="accordionExample">
          <div className="card">
            <div
              className={`card-header ${
                activePanel === "heading_1" ? "" : "collapsed"
              }`}
              id="heading_1"
              onClick={() => togglePanel("heading_1")}
              aria-expanded={activePanel === "heading_1"}
              data-target="#collapse_1"
              aria-controls="collapse_1"
              style={{ cursor: "pointer" }}
            >
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  style={{
                    color: "#3b2f7e",
                    fontWeight: 400,
                    textDecoration: "none",
                    fontSize: "20px",
                  }}
                >
                  <i
                    className={`fa ${
                      activePanel === "heading_1" ? "fa-minus" : "fa-plus"
                    } me-3`}
                  ></i>
                  People and Organizational Capability Enhancement
                </button>
              </h5>
            </div>
            <div
              id="collapse_1"
              className={`collapse ${
                activePanel === "heading_1" ? "show" : ""
              }`}
              aria-labelledby="heading_1"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <dl>
                  <div>
                    <ul style={{ listStyleType: "disc" }}>
                      <li>Organization Change Management Skills</li>
                      <li>Negotiation Management</li>
                      <li>Conflict Management</li>
                      <li>Technical Skill Enhancement</li>
                      <li>Business Communication Skill Enhancement</li>
                    </ul>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="card">
            <div
              className={`card-header ${
                activePanel === "heading_2" ? "" : "collapsed"
              }`}
              id="heading_2"
              onClick={() => togglePanel("heading_2")}
              aria-expanded={activePanel === "heading_2"}
              data-target="#collapse_2"
              aria-controls="collapse_2"
              style={{ cursor: "pointer" }}
            >
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  style={{
                    color: "#3b2f7e",
                    fontWeight: 400,
                    textDecoration: "none",
                    fontSize: "20px",
                  }}
                >
                  <i
                    className={`fa ${
                      activePanel === "heading_2" ? "fa-minus" : "fa-plus"
                    } me-3`}
                  ></i>
                  Industries Offerings & Solutions
                </button>
              </h5>
            </div>
            <div
              id="collapse_2"
              className={`collapse ${
                activePanel === "heading_2" ? "show" : ""
              }`}
              aria-labelledby="heading_2"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <p>Industries Offerings & Solutions</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div
              className={`card-header ${
                activePanel === "heading_3" ? "" : "collapsed"
              }`}
              id="heading_3"
              onClick={() => togglePanel("heading_3")}
              aria-expanded={activePanel === "heading_3"}
              data-target="#collapse_3"
              aria-controls="collapse_3"
              style={{ cursor: "pointer" }}
            >
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  style={{
                    color: "#3b2f7e",
                    fontWeight: 400,
                    textDecoration: "none",
                    fontSize: "20px",
                  }}
                >
                  <i
                    className={`fa ${
                      activePanel === "heading_3" ? "fa-minus" : "fa-plus"
                    } me-3`}
                  ></i>
                  Business Process Re-engineering
                </button>
              </h5>
            </div>
            <div
              id="collapse_3"
              className={`collapse ${
                activePanel === "heading_3" ? "show" : ""
              }`}
              aria-labelledby="heading_3"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    textDecoration: "none",
                    color: "#4d428a",
                  }}
                >
                  Issues:
                </p>
                <ul style={{ listStyleType: "disc" }}>
                  <li>Absence of formalized processes</li>
                  <li>
                    Non homogeneity of processes across various business units
                  </li>
                  <li>Duplication of activities done at various locations</li>
                  <li>Inefficient utilization of management time</li>
                  <li>
                    Lack of coordination and information flow distortion across
                    departments
                  </li>
                  <li>
                    Multiple systems for capturing data and thus for generating
                    MIS.
                  </li>
                </ul>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    textDecoration: "none",
                    color: "#4d428a",
                  }}
                >
                  Our Solutions:
                </p>
                <ul style={{ listStyleType: "disc" }}>
                  <li>
                    Controls weakness in Finance function which could lead to
                    possibility of revenue leakages
                  </li>
                  <li>Provides well defined standard operating procedure</li>
                  <li>
                    Provides clear and role demarcated organizational structure
                  </li>
                  <li>
                    Standardizes efficiency of Marketing, Sales, Procurement,
                    F&A team across the group
                  </li>
                  <li>
                    Streamlines processes across organization enabling
                    digitization
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <div
              className={`card-header ${
                activePanel === "heading_4" ? "" : "collapsed"
              }`}
              id="heading_4"
              onClick={() => togglePanel("heading_4")}
              aria-expanded={activePanel === "heading_4"}
              data-target="#collapse_4"
              aria-controls="collapse_4"
              style={{ cursor: "pointer" }}
            >
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  style={{
                    color: "#3b2f7e",
                    fontWeight: 400,
                    fontSize: "20px",
                    textDecoration: "none",
                  }}
                >
                  <i
                    className={`fa ${
                      activePanel === "heading_4" ? "fa-minus" : "fa-plus"
                    } me-3`}
                  ></i>
                  Time and Motion Study
                </button>
              </h5>
            </div>
            <div
              id="collapse_4"
              className={`collapse ${
                activePanel === "heading_4" ? "show" : ""
              }`}
              aria-labelledby="heading_4"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#4d428a",
                  }}
                >
                  Why to conduct Time & Motion study?
                </p>
                <p className="mt-3">
                  In order to make the operation more competitive so that growth
                  in productivity and performance can be sustained time & motion
                  study is conducted.
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#4d428a",
                  }}
                >
                  Who should conduct Time & Motion study?
                </p>
                <p className="mt-3">
                  Time study establishes standard times, while motion study
                  identifies techniques for improving work methods. These two
                  techniques are fused into a widely accepted method applicable
                  to the improvement and upgrading of work systems and it is
                  applied today to industrial as well as service organizations,
                  including telecom, banks, BPOs, schools, colleges and
                  hospitals.
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#4d428a",
                  }}
                >
                  What is Time & Motion study?
                </p>
                <ul style={{ listStyleType: "disc" }}>
                  <li className="mt-2">
                    Time and motion study is a work measurement technique for
                    carefully recording the time of performing a certain
                    specific job or its elements carried out under specified
                    conditions for analyzing the data so as to obtain the time
                    necessary for an operator to carry it out at a defined rate
                    of performance.
                  </li>
                  <li className="mt-2">
                    The Industrial Engineering Terminology Standard defines time
                    study as "a work measurement technique consisting of careful
                    time measurement of the task with a time measuring
                    instrument manual, digital including Video Camera, adjusted
                    for any observed variance from normal effort or pace and to
                    allow adequate time for such items as foreign elements,
                    unavoidable or machine delays, rest to overcome fatigue, and
                    personal needs.”
                  </li>
                  <li className="mt-2">
                    Some new products and plants are under project/expansion
                    stage or new wage settlement is to take place or proper
                    productivity norms/standards have to be created. This may
                    require redeployment of manpower and restructuring of
                    departments. In view of this it is necessary to know the
                    present utilization factor of manpower, under load or
                    overload. The excess manpower if any can be utilized for its
                    expansion. If the present manpower is in shortage the
                    recruitment activity can be initiated well in advance.
                  </li>
                  <li className="mt-2">
                    To study and take suitable actions to upgrade the conditions
                    of the employees, morale improvement, better discipline,
                    control of absenteeism and time-keeping, better working
                    conditions and better safety standards.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <div
              className={`card-header ${
                activePanel === "heading_5" ? "" : "collapsed"
              }`}
              id="heading_5"
              onClick={() => togglePanel("heading_5")}
              aria-expanded={activePanel === "heading_5"}
              data-target="#collapse_1"
              aria-controls="collapse_1"
              style={{ cursor: "pointer" }}
            >
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  style={{
                    color: "#3b2f7e",
                    fontWeight: 400,
                    textDecoration: "none",
                    fontSize: "20px",
                  }}
                >
                  <i
                    className={`fa ${
                      activePanel === "heading_5" ? "fa-minus" : "fa-plus"
                    } me-3`}
                  ></i>
                  Budgeting Process Improvement
                </button>
              </h5>
            </div>
            <div
              id="collapse_1"
              className={`collapse ${
                activePanel === "heading_5" ? "show" : ""
              }`}
              aria-labelledby="heading_5"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <dl>
                  <div>
                    <ul style={{ listStyleType: "disc" }}>
                      <li>
                        Disconnect between budgeting process and situation on
                        the ground
                      </li>
                      <li>
                        Management dissatisfaction with the robustness, quality
                        and duration of budgeting process
                      </li>
                      <li>
                        Complex structure where even delivery units were
                        considered to be profit centers
                      </li>
                      <li>
                        Absence of well defined standard operating procedure.
                      </li>
                      <li>
                        No standardized templates for the budgeting process
                        across service lines and support departments
                      </li>
                      <li>No reconciliation and control mechanisms</li>
                    </ul>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="card">
            <div
              className={`card-header ${
                activePanel === "heading_6" ? "" : "collapsed"
              }`}
              id="heading_6"
              onClick={() => togglePanel("heading_6")}
              aria-expanded={activePanel === "heading_6"}
              data-target="#collapse_1"
              aria-controls="collapse_1"
              style={{ cursor: "pointer" }}
            >
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  style={{
                    color: "#3b2f7e",
                    fontWeight: 400,
                    textDecoration: "none",
                    fontSize: "20px",
                  }}
                >
                  <i
                    className={`fa ${
                      activePanel === "heading_6" ? "fa-minus" : "fa-plus"
                    } me-3`}
                  ></i>
                  Strategy Implementattion Enablers
                </button>
              </h5>
            </div>
            <div
              id="collapse_1"
              className={`collapse ${
                activePanel === "heading_6" ? "show" : ""
              }`}
              aria-labelledby="heading_6"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <dl>
                  <div>
                    <ul style={{ listStyleType: "disc" }}>
                      <li>
                        Lack of efficiency and Excess compliance and control
                        limit organization’s ability to implement strategy
                      </li>
                      <li>
                        We also help organizations in developing road-map to
                        implement strategy
                      </li>
                    </ul>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="card">
            <div
              className={`card-header ${
                activePanel === "heading_7" ? "" : "collapsed"
              }`}
              id="heading_7"
              onClick={() => togglePanel("heading_7")}
              aria-expanded={activePanel === "heading_7"}
              data-target="#collapse_1"
              aria-controls="collapse_1"
              style={{ cursor: "pointer" }}
            >
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  style={{
                    color: "#3b2f7e",
                    fontWeight: 400,
                    textDecoration: "none",
                    fontSize: "20px",
                  }}
                >
                  <i
                    className={`fa ${
                      activePanel === "heading_7" ? "fa-minus" : "fa-plus"
                    } me-3`}
                  ></i>
                  Recruitment and Promotional Interviews
                </button>
              </h5>
            </div>
            <div
              id="collapse_1"
              className={`collapse ${
                activePanel === "heading_7" ? "show" : ""
              }`}
              aria-labelledby="heading_7"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <dl>
                  <div>
                    <ul style={{ listStyleType: "disc" }}>
                      <li>
                        We provide complete recruitment assistance right from
                        sending call letters to conducting written tests, GD/PI
                        , short listing and finalization.
                      </li>
                      <li>
                        We also conduct promotional written tests, interviews
                        etc and score sheets with results
                      </li>
                      <li>
                        BPC conducts surveys for service conditions, salary,
                        incentives and other benefits being offered in different
                        types of Industries in different industrial zones for
                        workers, managers (junior-mid-senior)
                      </li>
                    </ul>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="card">
            <div
              className={`card-header ${
                activePanel === "heading_8" ? "" : "collapsed"
              }`}
              id="heading_8"
              onClick={() => togglePanel("heading_8")}
              aria-expanded={activePanel === "heading_8"}
              data-target="#collapse_4"
              aria-controls="collapse_4"
              style={{ cursor: "pointer" }}
            >
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  style={{
                    color: "#3b2f7e",
                    fontWeight: 400,
                    fontSize: "20px",
                    textDecoration: "none",
                  }}
                >
                  <i
                    className={`fa ${
                      activePanel === "heading_8" ? "fa-minus" : "fa-plus"
                    } me-3`}
                  ></i>
                  Corporate Social Responsibility (CSR)
                </button>
              </h5>
            </div>
            <div
              id="collapse_4"
              className={`collapse ${
                activePanel === "heading_8" ? "show" : ""
              }`}
              aria-labelledby="heading_8"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#4d428a",
                  }}
                >
                  What is CSR?
                </p>
                <p className="mt-3">
                  CSR, or Corporate Social Responsibility, is the ownership an
                  organization takes to ‘give back to society’ through which it
                  prospers. Forward looking companies assume such responsibility
                  with a sense of this purpose in everything they do.
                </p>
                <p className="mt-3">
                  The focus, therefore, includes contribution of time and money,
                  a duty to provide environment friendly products and services,
                  and a desire to improve the lives of individuals.
                </p>
                <p
                  className="mt-3"
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#4d428a",
                  }}
                >
                  How can CSR benefit society?
                </p>
                <p className="mt-3">
                  A committed, well laid out and implemented strategy helps
                  society, while earning goodwill for the organization, by:
                </p>
                <ul style={{ listStyleType: "disc" }}>
                  <li className="mt-2">Encouraging ethical behavior</li>
                  <li className="mt-2">Contributing to economic development</li>
                  <li className="mt-2">
                    Improving quality of life of communities and society at
                    large
                  </li>
                </ul>
                <p
                  className="mt-3"
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#4d428a",
                  }}
                >
                  How does CSR help businesses grow?
                </p>
                <p className="mt-3">
                  An effective CSR implementation helps a business continue to
                  differentiate itself, and be visible. Even with dozens of
                  competitors, a real commitment to CSR lets businesses stand
                  out. CSR can lead to new products and services that reflect
                  company’s chosen values.
                </p>
                <p className="mt-3">
                  Companies with a history of good CSR strategies are recognized
                  as prime examples of how they coupled social responsibility
                  productively to advance goodwill, while building sustainable
                  and impressive businesses. They have provided demonstrated
                  leadership in pursuing both objectives simultaneously In
                  effect; they have improved their reach out to society to “do
                  more”.
                </p>
                <p
                  className="mt-3"
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#4d428a",
                  }}
                >
                  Develop a CSR Strategy with BPC
                </p>
                <p className="mt-3">
                  CSR today is much more than ad-hoc donations and events and is
                  moving towards a long-term strategic engagement that will reap
                  social and business dividends for the company in the long run.
                </p>
                <p
                  className="mt-3"
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#4d428a",
                  }}
                >
                  BPC’s Working Model for CSR:
                </p>
                <p>
                  <img
                    src={ss1}
                    style={{ marginLeft: "120px" }}
                    alt="BPC's Working Model for CSR"
                  />
                </p>
                <p className="mt-3">
                  Baroda Productivity Council has the capability and expertise
                  to act as a CSR advisory and implementation partner to
                  Corporates. We offer strategic, administrative and
                  implementation support to CSR initiatives tied to your
                  mission, philosophy and your values.
                </p>
                <p
                  className="mt-3"
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#4d428a",
                  }}
                >
                  BPC can assist you to:
                </p>
                <ul style={{ listStyleType: "disc" }}>
                  <li className="mt-2">Define your CSR objectives</li>
                  <li className="mt-2">Co-create a CSR strategy/ Plan</li>
                  <li className="mt-2">
                    Suggest causes or social initiatives (along with locations)
                    in sync with your corporate agenda
                  </li>
                  <li className="mt-2">
                    Source Social Workers and Implement the plan in a desired
                    time frame
                  </li>
                  <li className="mt-2">
                    Survey and measure effectiveness / impact of your CSR
                    initiative
                  </li>
                </ul>
                <p
                  className="mt-3"
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#4d428a",
                  }}
                >
                  Let BPC Administer Your CSR Initiatives
                </p>
                <p className="mt-3">
                  You have a trusted partner in BPC. In order that you can
                  accord full attention to business, BPC will manage your CSR
                  initiatives entirely. Our expertise in planning and execution,
                  allocation of optimum resources will help execute CSR
                  effectively.
                </p>
                <p className="mt-3">
                  With direct access to beneficiaries and our capability to
                  spread and reach out to the grassroots level, BPC will
                  transform strategy into practice. BPC will also continuously
                  measure effectiveness of each initiative so that periodically
                  strategies can be revisited whenever necessary.
                </p>
                <p className="mt-3">
                  Broadly, our methodology of administration of CSR initiatives
                  will be:
                </p>
                <ul style={{ listStyleType: "disc" }}>
                  <li className="mt-2">Assessing community needs</li>
                  <li className="mt-2">Preparing an action plan</li>
                  <li className="mt-2">
                    Identifying and selecting partners and volunteers, including
                    social workers, students, NGOs, etc.
                  </li>
                  <li className="mt-2">
                    Imparting training on execution of CSRs to partners,
                    volunteers, etc.
                  </li>
                  <li className="mt-2">
                    Drawing up implementation processes, procedures, internal
                    reporting mechanisms
                  </li>
                  <li className="mt-2">Closely monitoring progress</li>
                  <li className="mt-2">
                    Measuring outcome / impact of CSR initiative
                  </li>
                  <li className="mt-2">
                    Submitting periodic reports for your review
                  </li>
                </ul>
                <p
                  className="mt-3"
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#4d428a",
                  }}
                >
                  Sample CSR Initiatives
                </p>
                <p className="mt-3">
                  Sample CSR initiatives which can be undertaken for various
                  Corporate are:
                </p>
                <ul style={{ listStyleType: "disc" }}>
                  <li className="mt-2">
                    Developing basic rural amenities (bore wells, waste
                    disposals, etc.)
                  </li>
                  <li className="mt-2">Promoting children’s education</li>
                  <li className="mt-2">Imparting adult education</li>
                  <li className="mt-2">Promoting family planning</li>
                  <li className="mt-2">Promoting awareness campaigns</li>
                  <li className="mt-2">Coaching rural school teachers</li>
                  <li className="mt-2">Organizing blood camps</li>
                  <li className="mt-2">Organizing medical camps</li>
                  <li className="mt-2">
                    Creating entrepreneurship, skill training and placement
                    assistance programs for youth
                  </li>
                  <li className="mt-2">
                    Imparting education to farmers & rural folks (on
                    agriculture, organic compost, storm water harvesting)
                  </li>
                  <li className="mt-2">Creating self-help groups</li>
                  <li className="mt-2">Promotion of Art and Culture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
