import React from "react";
import { Link } from "react-router-dom";
import "./components.css"


function HomeSection1() {
  return (
    <div className="bg-black/[.30] h-[80px] flex justify-evenly items-center">
    {/* Card */}
    <div className="flex justify-between items-center w-full max-w-screen-lg">
      <div className="flex justify-center items-center">
        <img src={navLogo} className="mx-auto" />
      </div>
      <nav className="nav font-semibold text-lg">
        <ul className="flex justify-center">
          <li className="p-4 nav-link text-paragraph duration-200 cursor-pointer active">
            <Link to="/home">Home</Link>
          </li>
          <li className="p-4 nav-link duration-200 cursor-pointer">
            <Link to="/settings">Settings</Link>
          </li>
          <li className="p-4 nav-link duration-200 cursor-pointer">
            <Link to="/info">Info</Link>
          </li>
        </ul>
      </nav>
      {/* Darkmode test */}
      <div className="flex justify-center setting-icon-outer items-center p-1">
        <Link to="settings">
          <img src={settingIcon} className="setting-icon mx-auto " />
        </Link>
      </div>
    </div>
  </div>
  );
}

export default HomeSection1;
