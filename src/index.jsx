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
import HumanCourse from "./Components/Section/HumanCourse/HumanCourse";
import Human from "./Components/Pages/Human";
import Indirect from "./Components/Pages/Indirect";
import Training from "./Components/Pages/Training";
import HallBooking from "./Components/Pages/HallBooking";
import BookNow from "./Components/Pages/BookNow";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <Aboutus></Aboutus>,
      },
      {
        path: "/Services",
        element: <Services></Services>,
      },
      {
        path: "/Gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/NEWS",
        element: <News></News>,
      },
      {
        path: "/Contactus",
        element: <Contactus></Contactus>,
      },
      {
        path: "/Courses",
        element: <Courses></Courses>,
      },
      {
        path: "/TeamMember",
        element: <TeamMember></TeamMember>,
      },
      {
        path: "/Vision",
        element: <Vision></Vision>,
      },
      {
        path: "/Activity",
        element: <Activity></Activity>,
      },
      {
        path: "/Program",
        element: <Program></Program>,
      },
      {
        path: "/Video",
        element: <Video></Video>,
      },
      {
        path: "/English",
        element: <English></English>,
      },
      {
        path: "/Human",
        element: <Human></Human>,
      },
      {
        path: "/Indirect",
        element: <Indirect></Indirect>,
      },
      {
        path: "/Training",
        element: <Training></Training>,
      },
      {
        path: "/HallBooking",
        element: <HallBooking></HallBooking>,
      },
      {
        path: "/BookNow",
        element: <BookNow></BookNow>,
      },
    ],
  },
  {
    path: "/RouteActivity",
    element: <RouteActivity></RouteActivity>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
