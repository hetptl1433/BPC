import React from "react";
import p33 from "../../../assets/images/Extra/goal1.png";
import { Link } from "react-router-dom";
const Commitment = () => {
  return (
    <div>
      <section className="Commitment">
        <div className="pageContainer">
          <div className="panel">
            <div className="CommitmentContent animation-element slide-left in-view">
              <img
                alt="csr policy"
                className="lazyloaded"
                data-src={p33}
                src={p33}
              />
              <p className="pt-3">Commitment</p>
              <Link className="readmoreRed pt-3" to="/">
                Read More
              </Link>
            </div>

            <div className="CommitmentRightsolbox animation-element slide-right in-view">
              <h3 className="heading32 pt-3">BPC Goal</h3>
              <p className="pt-3">
                Within the BPC family, we recognize and share responsibilities
                enabling continuous improvement of its operations. Baroda
                Productivity Council is a multi-activity proactive & innovative
                learning organization having pioneered the HR movement in
                Gujarat in 1959 through Education, Corporate Training &
                Management Development Activities with a gradual shift & focus
                on HRD, PROGRAMMES, INDUSTRIAL CONSULTANCY & RECRUITMENT.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Commitment;
