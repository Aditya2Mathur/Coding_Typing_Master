import React from "react";
import "./components.css";
function CallToAction() {
    return (
      <div className="flex flex-col justify-center md:flex-row h-full rounded-lg pt-10">
        {/* Text Side */}
        <div className="flex flex-col md:flex-row h-full rounded-lg feature-second pt-10 gap-10 p-5">
         <div>
         <h2 className="mb-2">Join Us in Mastering Programming Typing</h2>
          <h3 className="heading-3 mb-2">
            Ready to improve your typing speed and accuracy? Start practicing today!
          </h3>
         </div>
           {/* Added email input field */}
          <div className="">
            <input
              type="email"
              placeholder="Enter your email"
              className="  opacity-100 input-text-box rounded-md p-2 my-3 w-full"
            />
            <button className="how-it-work learn-more">
              Subscribe
            </button>
          </div>
          {/* Removed paragraph content */}
        </div>
      </div>
    );
  }

export default CallToAction;
