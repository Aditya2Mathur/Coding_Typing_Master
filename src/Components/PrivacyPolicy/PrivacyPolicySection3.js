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
        We use Google AdSense to display ads, which may use cookies and tracking technologies to serve personalized ads based on your browsing behavior. In compliance with the General Data Protection Regulation (GDPR) and California Privacy Rights Act (CPRA), users from the European Union and California will be provided with options to control their data, including the ability to opt-out of personalized ads. For more details on how Google uses data and your options, please visit Google’s Privacy & Terms.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicySection3;
