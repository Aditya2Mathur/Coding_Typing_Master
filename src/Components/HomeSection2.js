import React from "react";
import { Link } from "react-router-dom";
import "./components.css";
import featureImage2 from "../Assets/featureImage2.png";

function HomeSection2() {
  return (
    <div className="flex flex-col md:flex-row h-full rounded-lg feature-second pt-10">
    {/* Text Side */}
    <div className="md:w-1/2 p-4 ">
      <h2 className="text-left mb-10">What is Coding Typing Master?</h2>
      <p>
        Coding Typing Master<strong></strong> is an online tool designed to help you improve your typing skills while learning important programming keywords and tags. Whether you're a student or a professional, this tool helps you practice typing with real code, boosting your speed and accuracy. It's perfect for anyone who wants to get faster at typing in popular programming languages like Python, Java, and JavaScript. Coding Typing Master is easy to use and is specially designed for Indian users, making typing practice simple and fun.
      </p>
    </div>
    {/* Image Side */}
    <div className="md:w-1/2 p-4 flex justify-center items-start">
      <img src={featureImage2} className="max-w-full h-auto rounded-lg" />
    </div>
    </div>
  );
}

export default HomeSection2;
