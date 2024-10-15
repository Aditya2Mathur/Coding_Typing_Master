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
        At Coding Typing Master, we prioritize your safety. While we don’t collect or store any personal information, we ensure that our website remains secure by using trusted technologies and following industry standards to provide a safe environment for users.
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
