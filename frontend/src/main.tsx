import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MainNavBar from "./Components/MainNavBar/MainNavBar";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router/Router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Header />
    <MainNavBar />
    <Router />
    <Footer />
  </BrowserRouter>
);
