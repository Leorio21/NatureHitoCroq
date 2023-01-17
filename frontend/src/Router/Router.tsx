import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Test from "../Pages/Events/Events";

const Router = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutUs" element={<Test />} />
    </Routes>
  );
};

export default Router;
