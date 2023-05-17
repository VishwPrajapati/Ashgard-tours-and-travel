import React from "react";
import "../src/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookNow from "./Components/BookNow/BookNow";
import Layout from "./Layout";
import PakageInfo from "./Components/PakagesDetails/PakageInfo";
import AboutUsPage from "./Components/AboutUs/AboutUsPage";
import ContactUsPage from "./Components/ContactUs/ContactUsPage";
import Index from "./Components/MainPage/Index";
import DomesticTour from "./Components/Subnavbar/DomesticTour";
import HoneyMoonTour from "./Components/Subnavbar/HoneyMoonTour";
import InternationalTour from "./Components/Subnavbar/InternationalTour";
import WeddingTour from "./Components/Subnavbar/WeddingTour";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/packages" element={<BookNow />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/booknow" element={<BookNow />} />
            <Route path="/pakageinfo" element={<PakageInfo />} />
            <Route path="/domestic" element={<DomesticTour />} />
            <Route path="/international" element={<InternationalTour />} />
            <Route path="/Honeymoon" element={<HoneyMoonTour />} />
            <Route path="/Wedding" element={<WeddingTour />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
