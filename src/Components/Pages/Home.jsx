import React from "react";
import Carosouel from "../Section/Home/Carosouel";
import IndustrySolution from "../Section/Home/IndustrySolution";
import Banner5 from "../Section/Home/Banner5";

import Banner6 from "../Section/Home/Banner6";
import WhatNew from "../Section/Home/WhatNew";
import ServiceSlider from "../Section/Home/ServiceSlider";

const Home = () => {
  return (
    <div>
      <div className="">
        < Carosouel/>
        <WhatNew/>
        <ServiceSlider/>
        <IndustrySolution/>
        <Banner5/>
        <Banner6/>
      </div>
    </div>
  );
};

export default Home;
