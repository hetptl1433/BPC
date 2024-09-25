import "./assets/css/main.min.css";
import "./App.css";
import { Outlet } from "react-router-dom";
import Nb from "./Components/Section/Nb";
import $ from "jquery";
import "./assets/css/animate.min.css";

import "./assets/css/picbox.css";
import "./assets/css/style_j.min.css";
import "./assets/css/mediadata.min.css";
import "./assets/css/res_767.min.css";
import { createPopper } from "@popperjs/core";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/css/main.min.css";
import "./assets/font-awesome-4.7.0/css/font-awesome.css";
import "./assets/font-awesome-4.7.0/css/font-awesome.min.css";

import Footer from "./Components/Section/Footer";
import ScrollToTop from "./Components/Common/ScrollToTop ";
import GlobalTooltip from "./Components/Common/GlobalToolTip";

function App() {
  return (
    <>
      <div className="tyt">
        <Nb></Nb>
        {/* <GlobalTooltip/> */}
        <ScrollToTop/>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
