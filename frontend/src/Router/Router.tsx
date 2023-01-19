import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Construction from "../Pages/Construction/Construction";

const Router = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/products" element={<Construction />} />
      <Route path="/events" element={<Construction />} />
      <Route path="/contactUs" element={<Construction />} />
    </Routes>
  );
};

export default Router;
