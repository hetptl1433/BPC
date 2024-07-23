import React from "react";
import p33 from "../../../assets/images/Extra/goal1.png";
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
              <p className="pt-3">The Way We Work</p>
              <a className="readmoreRed pt-3" href="#">
                Read More
              </a>
            </div>

            <div className="CommitmentRightsolbox animation-element slide-right in-view">
              <h3 className="heading32 pt-3">BPC Goal</h3>
              <p className="pt-3">
                To create Indian and international treasury of time and motion
                standards. To become leader in Industrial Dispute settlement.
                <br />
                To become a reliable employment exchange both for employer and
                employee.
                <br />
                To become path finder for academic and career counseling for the
                youth, students and parents (they do not become dream stealer)
                <br />
                To become rural folk enabler of their livelihoods by sustaining
                their personal productivity through existing and renewed
                cooperative movement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Commitment;
