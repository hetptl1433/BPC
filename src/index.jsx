import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Home from "./Components/Pages/Home";

import "./assets/css/main.min.css";
import Aboutus from "./Components/Pages/Aboutus";
import Services from "./Components/Pages/Services";
import Gallery from "./Components/Pages/Gallery";
import News from "./Components/Pages/News";
import Contactus from "./Components/Pages/Contactus";
import RouteActivity from "./Components/Pages/RouteActivity";
import Courses from "./Components/Pages/Courses";
import TeamMember from "./Components/Pages/TeamMember";
import Vision from "./Components/Pages/Vision";
import Activity from "./Components/Pages/Activity";
import Program from "./Components/Pages/Program";
import Video from "./Components/Pages/Video";
import English from "./Components/Pages/English";
import Human from "./Components/Pages/Human";
import Indirect from "./Components/Pages/Indirect";
import Training from "./Components/Pages/Training";
import HallBooking from "./Components/Pages/HallBooking";
import BookNow from "./Components/Pages/BookNow";
import Form from "./Components/Pages/Form";
import ServiceDetails from "./Components/Section/Home/ServiceDetails";
import NbAboutUs from "./Components/Pages/NbAboutus";
import Download from "./Components/Pages/Download";
import IndirectCourse from "./Components/Section/Indirect/IndirectCourse";
import CourseData from "./Components/Pages/CourseData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <Aboutus />,
      },
      {
        path: "/Services",
        element: <Services />,
      },
      {
        path: "/Gallery",
        element: <Gallery />,
      },
      {
        path: "/NEWS",
        element: <News />,
      },
      {
        path: "/Contactus",
        element: <Contactus />,
      },
      {
        path: "/Courses",
        element: <Courses />,
      },
      {
        path: "/TeamMember",
        element: <TeamMember />,
      },
      {
        path: "/Vision",
        element: <Vision />,
      },
      {
        path: "/Activity",
        element: <Activity />,
      },
      {
        path: "/Program",
        element: <Program />,
      },
      {
        path: "/Video",
        element: <Video />,
      },
      {
        path: "/English",
        element: <English />,
      },
      {
        path: "/Human",
        element: <Human />,
      },
      {
        path: "/Indirect",
        element: <Indirect />,
      },
      {
        path: "/Training",
        element: <Training />,
      },
      {
        path: "/HallBooking",
        element: <HallBooking />,
      },
      {
        path: "/BookNow",
        element: <BookNow />,
      },
      {
        path: "/Service/:id",
        element: <ServiceDetails />,
      },
      {
        path: "/about-us/:subTitle",
        element: <NbAboutUs />,
      },
      {
        path: "/course/:id",
        element: <CourseData />,
      },
      {
        path: "/download",
        element: <Download />,
      },
      {
        path: "bookNow/:id",
        element: <BookNow />,
      },
    ],
  },
  {
    path: "/RouteActivity",
    element: <RouteActivity />,
  },

  {
    path: "/Form",
    element: <Form />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
      <RouterProvider router={router} />
  
  </React.StrictMode>
);
