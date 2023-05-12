import React from "react";
import "../src/App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import BookNow from "./Components/BookNow/BookNow";
import Layout from "./Layout";
import PakageInfo from "./Components/PakagesDetails/PakageInfo";
import AboutUsPage from "./Components/AboutUs/AboutUsPage";
import ContactUsPage from "./Components/ContactUs/ContactUsPage";
import Index from "./Components/MainPage/Index";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Index />} />
            <Route path="/packages" element={<BookNow />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/booknow" element={<BookNow />} />
            <Route path="/pakageinfo" element={<PakageInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
