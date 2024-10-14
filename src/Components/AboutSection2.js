import React from "react";
import "./components.css";
import featureImage2 from "../Assets/featureImage2.png";

function AboutSection2() {
  return (
    <div className="flex flex-col md:flex-row h-full rounded-lg feature-second pt-10">
      {/* Image Side */}
      <div className="md:w-1/2 p-4 flex justify-center items-start">
        <img src={featureImage2} className="max-w-full h-auto rounded-lg" />
      </div>
      {/* Text Side */}
      <div className="md:w-1/2 p-4 ">
        <h2 className="mb-5">Our Journey</h2>
        <h3 className="heading-3 mb-2">
          From concept to creation, how Coding Typing Master came to be
        </h3>
        <p>
          The idea for Coding Typing Master started during my summer training at
          Softpro India Pvt. Ltd. after my first year of college. I had borrowed
          someone’s laptop for the training, and after returning it, I realized
          I couldn't practice coding anymore. That’s when I decided to create a
          tool that would help me—and others—practice typing with real
          programming keywords. Now, Coding Typing Master is here to support
          computer science students, working professionals, and anyone preparing
          for software company interviews by improving their coding speed and
          accuracy.
        </p>
      </div>
    </div>
  );
}

export default AboutSection2;
