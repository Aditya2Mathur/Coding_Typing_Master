import React from "react";
import { Link } from "react-router-dom";
import "./components.css";
import featureImage2 from "../Assets/featureImage2.png";

function HomeSection3() {
  return (
    <div className="flex flex-col md:flex-row h-[35vh] rounded-lg feature-second pt-10">
    {/* Text Side */}
    <div className="md:w-1/2 p-4 ">
      <h2 className="text-left mb-10">World of Valuable Insights</h2>
      <p>
      Explore valuable tips and techniques with Coding Typing Master to improve typing speed and programming skills. Whether you're a beginner or experienced, you'll find simple ways to enhance your abilities efficiently.
      </p>
    </div>
    {/* Image Side */}
    <div className="md:w-1/2 p-4 flex justify-center items-start">
      <img src={featureImage2} className="max-w-full h-auto rounded-lg" />
    </div>
    </div>
  );
}

export default HomeSection3;
