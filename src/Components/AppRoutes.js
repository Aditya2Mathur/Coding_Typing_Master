import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WordProvider from "./WordProvider";
// Pages
import Home from "../Screens/Home";
import SettingsPage from "../Screens/SettingsPage";
import AboutPage from "../Screens/AboutPage";
import Faq from "../Screens/FaqPage";

function AppRoutes() {
  return (
    
      <WordProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/settings" element={<SettingsPage />} />
            <Route exact path="/about-us" element={<AboutPage />} />
            <Route exact path="/faq" element={<Faq />} />
          </Routes>
        </Router>
      </WordProvider>
    
  );
}

export default AppRoutes;
