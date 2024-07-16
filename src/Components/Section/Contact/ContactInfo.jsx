import React from "react";
import ph7 from "../../../assets/images/Extra/contactus1.png";
const ContactInfo = () => {
  return (
    <div>
      <section className="ContactInfo" id="locations">
        <div className="pageContainer">
          <div className="panel">
            <div className="ContactInfoletfsolbox animation-element slide-left in-view">
              <div className="locationbxCont">
                <h3
                  className="heading32 text-left pb-3 Worldcolor"
                  style={{ textAlign: "center" }}
                >
                  BARODA PRODUCTIVITY COUNCIL
                </h3>
                <img src={ph7} alt="Contact Us" />
              </div>
            </div>
            <div className="ContactInfoContent animation-element slide-right in-view">
              <div
                className="country tab_content indiatab"
                style={{ display: "block" }}
              >
                <h3 className="heading32 pb-3">India - Vadodara</h3>
                <h1>Office</h1>
                <p>Vadodara</p>
                <span>
                  2nd Floor, Productivity House, Productivity Road, Alkapuri,
                  Vadodara-390007
                  <br />
                  Tel No. : 9904066644
                  <br />
                  Tel No. : 9979849825
                </span>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.173696084472!2d73.17167391426867!3d22.30926974820845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ae257f2e03%3A0x75c5f4407400f11!2sBaroda%20Productivity%20Council!5e0!3m2!1sen!2sin!4v1612415365067!5m2!1sen!2sin"
                  width="500"
                  height="250"
                  frameBorder="0"
                  style={{ border: 1 }}
                  allowFullScreen=""
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactInfo;
