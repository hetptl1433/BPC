import React from "react";

const RouteHeader = () => {
  return (
    <div>
      <section>
        <div className="container">
          <header id="headerMain">
            <div
              className="pageContainer d-flex justify-content-between"
              id="pc-screen"
            >
              <div
                className="logo"
                style={{ display: "flex", alignItems: "center" }}
              >
                <a href="/">
                  <img
                    src="http://bpcindia.org/Content/Client/assets/images/formimg/50.jpg"
                    style={{
                      width: "auto",
                      height: "110px",
                      background: "white",
                      padding: "6px 12px",
                      borderRadius: "15px",
                    }}
                    className="lazyloaded"
                    alt="Logo 1"
                  />
                </a>
              </div>
              <div
                className="middle-menu"
                style={{
                  textAlign: "center",
                  border: "2px solid black",
                  padding: "10px",
                }}
              >
                <h1>BARODA PRODUCTIVITY COUNCIL</h1>
                <p>(An ISO 9001 : 2015 Organization)</p>
              </div>
              <div className="right_menu">
                <div
                  className="logo"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <a href="/">
                    <img
                      src="http://bpcindia.org/Content/Client/assets/images/formimg/bpc.jpg"
                      style={{
                        width: "auto",
                        height: "110px",
                        background: "white",
                        padding: "6px 12px",
                        borderRadius: "15px",
                      }}
                      className="lazyloaded"
                      alt="Logo 2"
                    />
                  </a>
                </div>
              </div>
            </div>
          </header>
        </div>
      </section>
    </div>
  );
};

export default RouteHeader;
