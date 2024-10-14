import React from "react";
import { Link } from "react-router-dom";
import navLogo from "../Assets/navLogo.png";
import "./components.css"
import settingIcon from "../Assets/settings.png"

function Navbar() {
  return (
    <div className="bg-black/[.30] h-[80px] flex justify-evenly items-center">
    {/* Card */}
    <div className="flex justify-between items-center w-full max-w-screen-lg">
      <div className="flex justify-center items-center">
        <Link to="/">
        <img src={navLogo} className="mx-auto" />
        </Link>
      </div>
      <nav className="nav font-semibold text-lg">
        <ul className="flex justify-center">
          <li className="p-4 nav-link text-paragraph duration-200 cursor-pointer active">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 nav-link duration-200 cursor-pointer">
            <Link to="/contact-us">Contact</Link>
          </li>
          <li className="p-4 nav-link duration-200 cursor-pointer">
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
      </nav>
      {/* Darkmode test */}
      <div className="flex justify-center setting-icon-outer items-center p-1">
        <Link to="/settings">
          <img src={settingIcon} className="setting-icon mx-auto " />
        </Link>
      </div>
    </div>
  </div>
  );
}

export default Navbar;
