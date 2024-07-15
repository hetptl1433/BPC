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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
