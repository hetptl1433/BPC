import React, { useEffect, useState } from "react";
import axios from "axios";
import cn1 from "../../../assets/images/Extra/corporate.png";
import cn2 from "../../../assets/images/Extra/business.png";
import cn3 from "../../../assets/images/Extra/fax.png";
import cn4 from "../../../assets/images/Extra/business_mail(1).png";

// Function to fetch contact data
const fetchContactData = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL_BPC}/api/auth/list/CompanyProfile-details`
    );
    return response.data[0]; // Assuming you get a single item array
  } catch (error) {
    console.error("Error fetching ContactData data:", error);
    throw error;
  }
};

const ContactPara = () => {
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    // Fetch data on component mount
    const getData = async () => {
      try {
        const data = await fetchContactData();
        setContactData(data);
      } catch (error) {
        console.error("Error setting contact data:", error);
      }
    };
    getData();
  }, []);

  if (!contactData) return <p>Loading...</p>;

  return (
    <div>
      <section className="Cont_section" id="corporateoffice">
        <div className="pageContainer">
          <div className="page_top_text animation-element slide-left in-view">
            <h2 className="heading32 pb-3">{contactData.CompanyName}</h2>
            <h5 className="heading21 pb-3 rt">
              For growing your business with us & exploring opportunities,
              please drop us a line - our experts will contact you soon
            </h5>
            <div className="getintouch">
              <img src={cn1} alt="corporate" className="contdiv" />
              <div className="contnt">
                <h5>Corporate Office</h5>
                <p>{contactData.Address}</p>
              </div>
            </div>
            <div className="getintouch">
              <img src={cn2} alt="business" className="contdiv" />
              <div className="contnt">
                <h5>Business Phone</h5>
                <p className="mb-0">{contactData.PhoneOff1}</p>
                <p>{contactData.PhoneOff2}</p>
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
                      {contactData.SalesEmail}
                    </li>
                    <li>
                      <strong>
                        For Setting up Partner Test Center Enquiries :
                      </strong>{" "}
                      {contactData.PartnerEmail}
                    </li>
                    <li>
                      <strong>
                        For Enrolled Exam Candidate Support Enquiries :
                      </strong>{" "}
                      {contactData.SupportEmail}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="getintouch mt-12">
              <img src={cn4} alt="business mail" className="contdiv" />
              <div className="contnt sales-email">
                <h5>For Sales related Enquiries</h5>
                <p>{contactData.Email}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPara;
