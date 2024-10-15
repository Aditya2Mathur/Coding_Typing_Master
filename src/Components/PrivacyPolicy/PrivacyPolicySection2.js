import React from "react";
import "../components.css";
import featureImage2 from "../../Assets/featureImage2.png";

function PrivacyPolicySection2() {
  return (
    <div className="flex flex-col md:flex-row h-full rounded-lg feature-second pt-10">
      {/* Text Side */}
      <div className="md:w-1/2 p-4 ">
        <h2 className="mb-5">Cookies and Tracking</h2>
        <h3 className="heading-3 mb-2">
        We do not use cookies or any tracking technologies to store user information."write a small paragraph for privacy and policy
        </h3>
        <p>
        We respect your privacy and do not use cookies or any tracking technologies to collect personal information about our users. Coding Typing Master is designed to be a simple, free tool that does not require sign-ups or logins. However, third-party services like Google AdSense may use cookies to display personalized ads based on your browsing activity. For more information on how Google uses cookies, please refer to Google’s Privacy & Terms.
        </p>
      </div>
        {/* Image Side */}
        <div className="md:w-1/2 p-4 flex justify-center items-start">
        <img src={featureImage2} className="max-w-full h-auto rounded-lg" />
      </div>
    </div>
  );
}

export default PrivacyPolicySection2;
