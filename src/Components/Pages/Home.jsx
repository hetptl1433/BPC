import React, { useEffect, useState } from "react";
import Carosouel from "../Section/Home/Carosouel";
import IndustrySolution from "../Section/Home/IndustrySolution";
import Banner5 from "../Section/Home/Banner5";


import Banner6 from "../Section/Home/Banner6";
import WhatNew from "../Section/Home/WhatNew";
import ServiceSlider from "../Section/Home/ServiceSlider";
import { Modal } from "react-bootstrap";
import { PopUpData } from "../../Functions/PopUp";


const Home = () => {
   const [showIntialPopup, setShowPopUp] = useState(true);
   const handleClosePopUp = () => setShowPopUp(false);
   const [popUpData, setPopUpData] = useState([]);

   useEffect(()=>{
const LoadPopUpData = async () => {
  try {
    const data = await PopUpData();
    setPopUpData(data);
    // Update the state with the fetched data
  } catch (error) {
    console.error("Error loading PopUp data:", error);
  }
};
   LoadPopUpData();

   },[])


  return (
    <div>
      <div className="">
        <Modal
          show={showIntialPopup}
          onHide={handleClosePopUp}
          size="xl"
          style={{ zIndex: 5000000000 }}
          className="mt-5"
        >
          <Modal.Body>
            {" "}
            <div className="pt-4">
              {popUpData
                .sort((a, b) => a.SortOrder - b.SortOrder) // Sort directly inside map
                .map((popup) => (
                  <h5
                    key={popup._id}
                    style={{ fontWeight: 600, display: "table" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#5f6368"
                    >
                      <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"></path>
                    </svg>
                    <a
                      href={`${process.env.REACT_APP_API_URL_BPC}/${popup.PopUpFile}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2"
                      style={{ color: "#3a2e7e", display: "table-cell" }}
                    >
                      {popup.Title}
                    </a>
                  </h5>
                ))}

              <div className="text-center mb-3">
                <button
                  className="buttonStyle bannerBtn_orange"
                  style={{ margin: "20px auto 0" }}
                  id="button"
                  onClick={() => handleClosePopUp()} // Replace with actual close modal functionality
                >
                  Close
                </button>
              </div>
            </div>
            ;
          </Modal.Body>
        </Modal>
        <Carosouel />
        <WhatNew />
        <ServiceSlider />
        <IndustrySolution />
        <Banner5 />
        <Banner6 />
      </div>
    </div>
  );
};

export default Home;
