import React from "react";

const TeamPhotos = () => {
  return (
    <div>
      <section
        className="Management_team MTbx animation-element bounce-up in-view"
        style={{ overflow: "hidden" }}
      >
        <div className="pageContainer" id="management">
          <h3 className="heading32 mb-5">Management Team</h3>

          <div className="clientdata">
            <div className="row MT leadersdetails">
              <div className="col-lg-3 col-sm-6 mtbox">
                <div className="plpr">
                  <img
                    className="imgdiv lazyloaded"
                    data-src="http://bpcindia.org/Content/Client/assets/images/Managment_Team/images/owner.jpg"
                    src="http://bpcindia.org/Content/Client/assets/images/Managment_Team/images/owner.jpg"
                    alt="Shri Vipinchandra Patel"
                  />
                  <h1 className="heading20">Shri Vipinchandra Patel</h1>
                  <p className="details">President</p>

                  <div className="overlay">
                    <h1 className="heading20" style={{ marginTop: "80px" }}>
                      Shri Vipinchandra Patel
                    </h1>
                    <p className="details">President</p>
                    <div className="overlay-content">
                      <a
                        className="readmoreRed mt-4"
                        data-toggle="modal"
                        href="#"
                        target="#murlipdatapop"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 mtbox">
                <div className="plpr">
                  <img
                    className="imgdiv lazyloaded"
                    data-src="http://bpcindia.org/Content/Client/assets/images/Managment_Team/images/VPBPC.png"
                    src="http://bpcindia.org/Content/Client/assets/images/Managment_Team/images/VPBPC.png"
                    alt="Shri Rajeev Yadav"
                  />
                  <h1 className="heading20">Shri Rajeev Yadav</h1>
                  <p className="details">Vice President</p>

                  <div className="overlay">
                    <h1 className="heading20" style={{ marginTop: "80px" }}>
                      Shri Rajeev Yadav
                    </h1>
                    <p className="details">Vice President</p>
                    <div className="overlay-content">
                      <a
                        className="readmoreRed mt-4"
                        data-target="#satishdatapop"
                        data-toggle="modal"
                        href="#"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 mtbox">
                <div className="plpr">
                  <img
                    className="imgdiv lazyloaded"
                    data-src="http://bpcindia.org/Content/Client/assets/images/Managment_Team/images/owner5.jpg"
                    src="http://bpcindia.org/Content/Client/assets/images/Managment_Team/images/owner5.jpg"
                    alt="Shri Maganbhai M Patel"
                  />
                  <h1 className="heading20">Shri Maganbhai M Patel</h1>
                  <p className="details">Hon. Treasurer</p>

                  <div className="overlay">
                    <h1 className="heading20" style={{ marginTop: "80px" }}>
                      Shri Maganbhai M Patel
                    </h1>
                    <p className="details">Hon. Treasurer</p>
                    <div className="overlay-content">
                      <a
                        className="readmoreRed mt-4"
                        data-target="#krishnadatapop"
                        data-toggle="modal"
                        href="#"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 mtbox">
                <div className="plpr">
                  <img
                    className="imgdiv lazyloaded"
                    data-src="http://bpcindia.org/Content/Client/assets/images/Managment_Team/images/owner3.jpg"
                    src="http://bpcindia.org/Content/Client/assets/images/Managment_Team/images/owner3.jpg"
                    alt="Shri N M Shah"
                  />
                  <h1 className="heading20">Shri N M Shah</h1>
                  <p className="details">Patron</p>

                  <div className="overlay">
                    <h1 className="heading20" style={{ marginTop: "80px" }}>
                      Shri N M Shah
                    </h1>
                    <p className="details">Patron</p>
                    <div className="overlay-content">
                      <a
                        className="readmoreRed mt-4"
                        data-target="#pratap"
                        data-toggle="modal"
                        href="#"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPhotos;
