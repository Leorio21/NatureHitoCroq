import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Construction from "../Pages/Construction/Construction";
import Test from "../Pages/Test/Test";
import Events from "../Pages/Events/Events";
import Products from "../Pages/Products/Products";
import construction from "../assets/construction.png";
import Food from "../Pages/Products/Food";
import Details from "../Pages/Details/Details";
import Layout from "../Pages/Latout/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
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
        element: <Products />,
        children: [
          {
            path: "food",
            element: <Food />,
          },
          {
            path: "sweetmeat",
            element: <img src={construction} alt="Page en construction" />,
          },
          {
            path: "care",
            element: <img src={construction} alt="Page en construction" />,
          },
          {
            path: "toys",
            element: <img src={construction} alt="Page en construction" />,
          },
          {
            path: "accessories",
            element: <img src={construction} alt="Page en construction" />,
          },
        ],
      },
      {
        path: "/details",
        element: <Details />,
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
    ],
  },
]);

export default router;
