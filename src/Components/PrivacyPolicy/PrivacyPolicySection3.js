import React from "react";
import "../components.css";
import featureImage2 from "../../Assets/featureImage2.png";

function PrivacyPolicySection3() {
  return (
    <div className="flex flex-col md:flex-row h-full rounded-lg feature-second pt-10">
      {/* Image Side */}
      <div className="md:w-1/2 p-4 flex justify-center items-start">
        <img src={featureImage2} className="max-w-full h-auto rounded-lg" />
      </div>
      {/* Text Side */}
      <div className="md:w-1/2 p-4 ">
        <h2 className="mb-5">Google AdSense and Advertisements:</h2>
        <h3 className="heading-3 mb-2">
        We use Google AdSense to display ads. Google may use cookies to show personalized ads based on your browsing habits.
        </h3>
        <p>
        Our website uses Google AdSense to display advertisements to help keep our service free for users. Google may use cookies and other tracking technologies to deliver personalized ads based on your browsing behavior. While we do not collect or store personal data, Google may collect information as part of their ad-serving process. To understand how Google handles this data, please review Google’s Privacy & Terms.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicySection3;
