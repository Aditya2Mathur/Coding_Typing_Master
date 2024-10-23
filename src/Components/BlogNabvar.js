import React from "react";
import { Link } from "react-router-dom";
import navLogo from "../Assets/navLogo.png";
import "./components.css"
import settingIcon from "../Assets/settings.png"

const BlogNavbar = () => {
  return (
    <div className="bg-black/[.30] h-[80px] flex justify-evenly items-center">
      {/* Blog Navbar Card */}
      <div className="flex justify-between items-center w-full max-w-screen-lg">
        <div className="flex justify-center items-center">
          <Link to="/">
            <img src={navLogo} className="mx-auto" alt="Website Logo" />
          </Link>
        </div>
        <nav className="nav font-semibold text-lg">
          <ul className="flex justify-center">
            <li className="p-4 nav-link text-paragraph duration-200 cursor-pointer active">
              <Link to="/">Home</Link>
            </li>
            <li className="p-4 nav-link duration-200 cursor-pointer">
              <Link to="/blog">All Blogs</Link>
            </li>
            <li className="p-4 nav-link duration-200 cursor-pointer">
              <Link to="/blog/categories">Categories</Link>
            </li>
            <li className="p-4 nav-link duration-200 cursor-pointer">
              <Link to="/blog/featured">Featured Blogs</Link>
            </li>
            <li className="p-4 nav-link duration-200 cursor-pointer">
              <Link to="/contact-us">Contact</Link>
            </li>
          </ul>
        </nav>
        {/* Dark Mode or Settings */}
        <div className="flex justify-center setting-icon-outer items-center p-1">
          <Link to="/settings">
            <img src={settingIcon} className="setting-icon mx-auto" alt="Settings" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogNavbar;