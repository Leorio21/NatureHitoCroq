import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import MainNavBar from "../../Components/NavBar/MainNavBar";

const Layout = (): React.ReactElement => {
  return (
    <>
      <Header />
      <MainNavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
