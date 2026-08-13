import React from "react";
import './index.css';
import ReactDOM, { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Hero from "./Landing_Page/Hero";
import Shop from "./Landing_Page/Shop/Shop";
import BestSellingCombos from "./Landing_Page/BestSellingCombos/BestSellingCombos";
import Bundles from "./Landing_Page/Bundle/Bundles";
import Review_rail from "./Landing_Page/Reviw_rail";
import Navbar from "./Landing_Page/Navbar";
import ActulaReviewslide from "./Landing_Page/ActualReviwslide";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Review_rail></Review_rail>
  <Navbar></Navbar>
    <Hero></Hero>
    <ActulaReviewslide></ActulaReviewslide>
    <Shop></Shop>
    <BestSellingCombos></BestSellingCombos>
    <Bundles></Bundles>
  </BrowserRouter>,
);
