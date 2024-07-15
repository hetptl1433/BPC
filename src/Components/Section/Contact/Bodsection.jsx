import React from "react";

const Bodsection = () => {
  return (
    <div>
      <section className="bod_section">
        <div className="pageContainer animation-element slide-left in-view">
          <div className="bod_top_text">
            <h2 className="heading32 pb-3 lh-1">Contact Person Details:</h2>
            <div className="row bodbox">
              <div className="col-lg-4 col-md-4 inner_bodybox">
                <h1 className="heading18 ee">Mr. G.P. Namdeo</h1>
                <h2 className="heading16 ee">
                  <p>Executive Director</p>
                  <a href="mailto:gpnamdeo@gmail.com">gpnamdeo@gmail.com</a>
                </h2>
              </div>
              <div className="col-lg-4 col-md-4 inner_bodybox">
                <h1 className="heading18 ee">Ms. Deepa Dube</h1>
                <h2 className="heading16 ee">
                  <p>Accounts &amp; Finance</p>
                  <a href="mailto:accts@bpcindia.org">accts@bpcindia.org</a>
                </h2>
              </div>
              <div className="col-lg-4 col-md-4 inner_bodybox">
                <h1 className="heading18 ee">Mr. Nilesh H Ladva</h1>
                <h2 className="heading16 ee">
                  <p>Sr. Executive Commercial &amp; IT</p>
                  <a href="mailto:admn@bpcindia.org">admn@bpcindia.org</a>
                </h2>
              </div>
              <div className="col-lg-4 col-md-4 inner_bodybox">
                <h1 className="heading18 ee">Ms. Anjana Kothari</h1>
                <h2 className="heading16 ee">
                  <p>Administration &amp; HR</p>
                  <a href="mailto:pr@bpcindia.org">pr@bpcindia.org</a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bodsection;
