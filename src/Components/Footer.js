import React, { useState } from "react"; // Added useState import
import "./components.css";
import { Link } from "react-router-dom";
import github from "../Assets/github.png";
import instagram from "../Assets/instagram.png";
import facebook from "../Assets/facebook.png";
import linkedIn from "../Assets/linkedin.png";

function Footer() {
  const FAQ = [
    // Array of testimonials
    {
      question: "What programming languages does Coding Typing Master support?",
      answer:
        "Our typing tutor is designed to help you practice common programming languages like Java, Python, JavaScript, and more.",
    },
    {
      question: "Is this tool useful for beginners?",
      answer:
        "Yes! Whether you’re new to coding or an experienced developer, Coding Typing Master helps improve your typing speed in programming languages.",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null); // State to track selected question

  return (
    <div className="flex justify-center gap-5 mx-auto footer-section flex-col md:flex-col h-full rounded-lg p-10">
      {/* Link Area */}
      <div className="nav font-semibold ">
        <ul className="flex justify-center">
          <li className="p-4 nav-link text-paragraph duration-200 cursor-pointer active">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 nav-link duration-200 cursor-pointer">
            <Link to="/settings">Settings</Link>
          </li>
          <li className="p-4 nav-link duration-200 cursor-pointer">
            <Link to="/info">Info</Link>
          </li>
        </ul>
      </div>
      {/* Para Area */}
      <div>
        <p className="text-center pb-1 text-[#FFFcFF]">
          Practice Typing with Popular Programming Languages: Focus on coding
          keywords, functions, and syntax in languages like Python, Java, C++,
          and JavaScript.
        </p>
        <p className=" text-center text-[#FFFcFF]">
          For all press inquiries, please contact ....@gmail.com
        </p>
        {/* Social Media Area */}
        <div className="h-full flex gap-3 justify-center pt-5">
        <img className="footer-logo" src={github} />
        <img className="footer-logo" src={linkedIn} />
        <img className="footer-logo" src={instagram} />
        <img className="footer-logo" src={facebook} />
      </div>
      </div>
      {/* Mail Id Area */}
      <div>
        <p className="text-center text-[#FFFcFF]">adi@adi.com </p>
      </div>
    </div>
  );
}

export default Footer;
