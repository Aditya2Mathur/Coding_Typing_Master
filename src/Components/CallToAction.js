import React from "react";
import "./components.css";
function CallToAction() {
    return (
      <div className="flex flex-col justify-center md:flex-row h-full rounded-lg pt-10">
        {/* Text Side */}
        <div className="flex flex-col md:flex-row h-full rounded-lg feature-second pt-10 gap-10 p-5">
         <div>
         <h2 className="mb-2">Need Help?</h2>
          <p >
          Our support team is ready to assist you with any issues related to your account or typing challenges.
          </p>
         </div>
           {/* Added email input field */}
          <div className="">
            <input
              type="email"
              placeholder="Enter your email"
              className="  opacity-100 input-text-box rounded-md p-2 mb-3 w-full"
            />
            <button className="how-it-work learn-more">
              Subscribe
            </button>
          </div>

        </div>
      </div>
    );
  }

export default CallToAction;
