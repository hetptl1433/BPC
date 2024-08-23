import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footerSection" id="footerMain">
      <div className="pageContainer">
        <div className="textndlink">
          <div className="txtCopy">
            <p style={{ color: "#3b2e7e", fontSize: "14px", fontWeight: 400 }}>
              <span>
                © Copyright 2021 Baroda Productivity Council. All Right Reserved
              </span>
            </p>
            <p>
              <span
                style={{ color: "#3b2e7e", fontSize: "14px", fontWeight: 400 }}
              >
                Powered by
              </span>
              <span style={{ color: "#e86f24", fontWeight: "bold" }}>
                Barodaweb The E-Catalogue Designer
              </span>
            </p>
          </div>
          <div className="footerlink">
            <ul>
              <li>
                <Link to="#" target="_blank" className="fbook">
                  <img
                    src="assets/images/1x/linkedincolor.png"
                    width="25px"
                    height="25px"
                    alt="LinkedIn"
                  />
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="fbook">
                  <img
                    src="assets/images/1x/facebookcolor.png"
                    alt="Facebook"
                  />
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="fbook">
                  <img src="assets/images/1x/youtube.png" alt="YouTube" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="nseColorflow">
          <img
            src="assets/images/footer-strip.png"
            width="1283px"
            height="10px"
            alt="Footer Strip"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
