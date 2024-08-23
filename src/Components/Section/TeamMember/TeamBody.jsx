import React from "react";
import { Link } from "react-router-dom";

const TeamBody = () => {
  return (
    <div>
      <section className="bod_section">
        <div className="pageContainer animation-element slide-left in-view">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li aria-current="page" className="breadcrumb-item active">
                <Link to="/">Leadership</Link>
              </li>
            </ol>
          </nav>

          <div className="bod_top_text">
            <h2 className="heading32 pb-3 lh-1">Managing Committee Member:</h2>

            <div className="row bodbox rr">
              <div className="col-lg-4 col-md-4 inner_bodybox">
                <h1 className="heading18">Shri Vipinchandra R. Patel</h1>
                <h2 className="heading16">Majoor Mahajan Mandal</h2>
                <p>Vinobabhave Marg Salatwada Vadodara-390001 Ph: 9909912231</p>
              </div>

              <div className="col-lg-4 col-md-4 inner_bodybox">
                <h1 className="heading18">Shri. A B Gor, IAS</h1>
                <h2 className="heading16">Collector &amp; Dis. Megistrate</h2>
                <p>
                  Collector Office Kothi Building, Raopura, Vadodara - 390001
                  Ph: 9978406224 / 0265-2433000
                </p>
              </div>
            </div>

            <div className="row bodbox rr">
              <div className="col-lg-4 col-md-4 inner_bodybox">
                <h1 className="heading18">Shri. G P Namdeo</h1>
                <h2 className="heading16">ED &amp; Secretary</h2>
                <p>
                  Baroda Productivity Council, 2nd Floor, Productivity House,
                  Productivity Road, Vadodara-390007, Ph: 9979892996
                </p>
              </div>

              <div className="col-lg-4 col-md-4 inner_bodybox">
                <h1 className="heading18">Shri. S C Bamaniya</h1>
                <h2 className="heading16">
                  Jt. Director of Industrial Safety &amp; Health
                </h2>
                <p>
                  Block-1, 7th Floor Kuber Bhavan, Vadodara Ph: 2432543 /
                  2434464
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamBody;
