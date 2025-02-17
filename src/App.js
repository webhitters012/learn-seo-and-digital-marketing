import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landingpage";
import SEO from "./components/SEO-Page/SEO"
import DigitalMarketing from "./components/Digital-Marketing/DM";
import Founder from "./components/Founder/Founder";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/SEO" element={<SEO/>} />
          <Route path="/DM" element={<DigitalMarketing/>} />
          <Route path="/Founder" element={<Founder/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
