import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Construction from "../Pages/Construction/Construction";
import Test from "../Pages/Test/Test";
import Events from "../Pages/Events/Events";

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
    element: <Events />,
  },
  {
    path: "/contactUs",
    element: <Construction />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

export default router;
