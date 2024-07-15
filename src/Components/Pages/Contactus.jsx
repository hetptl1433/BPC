import React from "react";
import ContactBanner from "../Section/Contact/ContactBanner";
import ContactPara from "../Section/Contact/ContactPara";
import Bodsection from "../Section/Contact/Bodsection";
import ContactInfo from "../Section/Contact/ContactInfo";

const Contactus = () => {
  return (
    <div>
      <ContactBanner></ContactBanner>
      <ContactPara></ContactPara>
      <Bodsection></Bodsection>
      <ContactInfo></ContactInfo>
    </div>
  );
};

export default Contactus;
