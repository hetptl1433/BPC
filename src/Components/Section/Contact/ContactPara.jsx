import React from "react";
import cn1 from "../../../assets/images/Extra/corporate.png";
import cn2 from "../../../assets/images/Extra/business.png";
import cn3 from "../../../assets/images/Extra/fax.png";
import cn4 from "../../../assets/images/Extra/business_mail(1).png";

const ContactPara = () => {
  return (
    <div>
      <section className="Cont_section" id="corporateoffice">
        <div className="pageContainer">
          <div className="page_top_text animation-element slide-left in-view">
            <h2 className="heading32 pb-3">BARODA PRODUCTIVITY COUNCIL</h2>
            <h5 className="heading21 pb-3 rt">
              For growing your business with BPC India &amp; exploring
              opportunities, please drop us a line - our experts will contact
              you soon
            </h5>
            <div className="getintouch">
              <img src={cn1} alt="corporate" className="contdiv" />
              <div className="contnt">
                <h5>Corporate Office</h5>
                <p>
                  2nd Floor, Productivity House, Productivity Road, Alkapuri,
                  Vadodara-390007
                </p>
              </div>
            </div>
            <div className="getintouch">
              <img src={cn2} alt="business" className="contdiv" />
              <div className="contnt">
                <h5>Business Phone</h5>
                <p className="mb-0">9904066644</p>
                <p>9979849825</p>
              </div>
            </div>
            <div className="getintouch">
              <img src={cn3} alt="exam mail" className="contdiv" />
              <div className="contnt">
                <h5>For Digital Examination Enquiries</h5>
                <div className="dexenquiries">
                  <ul className="liDisc px-0 ">
                    <li>
                      <strong>For Digital/Online Exam Sales Enquiries :</strong>{" "}
                      pr@bpcindia.org
                    </li>
                    <li>
                      <strong>
                        For Setting up Partner Test Center Enquiries :
                      </strong>{" "}
                      info@bpcindia.org
                    </li>
                    <li>
                      <strong>
                        For Enrolled Exam Candidate Support Enquires :
                      </strong>{" "}
                      prbpcindia5@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="getintouch mt-12">
              <img src={cn4} alt="business mail" className="contdiv" />
              <div className="contnt sales-email">
                <h5>For Sales related Enquiries</h5>
                <p>info@bpcindia.org</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPara;
