import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import WordProvider from "./WordProvider";
// Pages
import Home from "../Screens/Home";
import SettingsPage from "../Screens/SettingsPage";
import InfoPage from "../Screens/InfoPage";

function AppRoutes() {
  return (
    
      <WordProvider>
        <Router>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/settings" element={<SettingsPage />} />
            <Route exact path="/info" element={<InfoPage />} />
          </Routes>
        </Router>
      </WordProvider>
    
  );
}

export default AppRoutes;
