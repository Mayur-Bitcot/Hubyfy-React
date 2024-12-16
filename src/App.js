import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Layout from "./Components/Layout/Layout";
import Contact from "./Components/Pages/Contact";
import Faq from "./Components/Pages/Faq";
import Services from "./Components/Pages/Services";
import OurApps from "./Components/Pages/OurApps";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-apps" element={<OurApps />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
