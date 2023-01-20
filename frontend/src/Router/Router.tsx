import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Construction from "../Pages/Construction/Construction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  },
  {
    path: "/products",
    element: <Construction />,
  },
  {
    path: "/events",
    element: <Construction />,
  },
  {
    path: "/contactUs",
    element: <Construction />,
  },
]);

export default router;
