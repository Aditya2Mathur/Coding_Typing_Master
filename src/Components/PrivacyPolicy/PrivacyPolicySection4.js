import React from "react";
import "../components.css";
import featureImage2 from "../../Assets/featureImage2.png";

function PrivacyPolicySection4() {
  return (
    <div className="flex flex-col md:flex-row h-full rounded-lg feature-second pt-10">
      {/* Text Side */}
      <div className="md:w-1/2 p-4 ">
        <h2 className="mb-5">Data Protection</h2>
        <h3 className="heading-3 mb-2">
        Since we do not collect personal data, there is no user data to secure. However, we follow best practices to ensure a safe and secure experience.
        </h3>
        <p>
        Since we do not collect or store any personal information, there is no user data to secure on our end. However, we comply with data protection regulations such as GDPR and CPRA, ensuring that any data collected by third-party services like Google AdSense is handled securely. We follow best practices to ensure a safe and compliant experience for all users.
        </p>
      </div>
        {/* Image Side */}
        <div className="md:w-1/2 p-4 flex justify-center items-start">
        <img src={featureImage2} className="max-w-full h-auto rounded-lg" />
      </div>
    </div>
  );
}

export default PrivacyPolicySection4;
