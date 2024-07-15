import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CommitmentSection = () => {
  return (
    <section className="Commitment">
      <div className="pageContainer container">
        <div className="panel row">
          <div className="CommitmentContent animation-element slide-left in-view col-md-6">
            <img
              alt="csr policy"
              className="lazyloaded img-fluid"
              data-src="http://bpcindia.org/Content/Client/assets/images/drupal/1.png"
              src="http://bpcindia.org/Content/Client/assets/images/drupal/1.png"
            />
            <p className="pt-3">
              CSR Policy (As per Section 135(4) and Rule 9 of Companies-
              (Corporate Social Responsibility Policy) Rules, 2014)
            </p>
            <a className="readmoreRed  regular" href="#">
              Read More
            </a>
          </div>
          <div className="CommitmentRightsolbox animation-element slide-right in-view col-md-6">
            <h3 className="heading32 pt-3">Commitment</h3>
            <p className="pt-3">
              Within the BPC family, we recognize and share responsibilities
              enabling continuous improvement of its operations.
              <br />
              <br />
              Baroda Productivity Council is a multi-activity proactive &amp;
              innovative learning organization having pioneered the HR movement
              in Gujarat in 1959 through Education, Corporate Training &amp;
              Management Development Activities with a gradual shift &amp; focus
              on HRD, PROGRAMMES, INDUSTRIAL CONSULTANCY &amp; RECRUITMENT.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
