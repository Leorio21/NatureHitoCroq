import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Construction from "../Pages/Construction/Construction";
import Test from "../Pages/Test/Test";
import Events from "../Pages/Events/Events";
import Products from "../Pages/Products/Products";

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
    element: <Products />,
    children: [
      {
        path: "/products/food",
        element: <Construction />,
      },
      {
        path: "sweetmeat",
        element: <Construction />,
      },
      {
        path: "care",
        element: <Construction />,
      },
      {
        path: "toys",
        element: <Construction />,
      },
    ],
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
