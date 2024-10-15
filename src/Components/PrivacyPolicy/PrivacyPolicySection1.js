import React from "react";
import "../components.css";
import featureImage2 from "../../Assets/featureImage2.png";

function PrivacyPolicySection1() {
  return (
    <div className="flex flex-col md:flex-row h-full rounded-lg feature-second pt-10">
      {/* Image Side */}
      <div className="md:w-1/2 p-4 flex justify-center items-start">
        <img src={featureImage2} className="max-w-full h-auto rounded-lg" />
      </div>
      {/* Text Side */}
      <div className="md:w-1/2 p-4 ">
        <h2 className="mb-5">What Information We Collect</h2>
        <h3 className="heading-3 mb-2">
        Our tool is free and does not require sign-up or login, so we do not collect any personal data.
        </h3>
        <p>
        At Coding Typing Master, we prioritize your privacy. Since our platform doesn’t require you to create an account or log in, we don’t collect any personal information from users. You can practice your typing without sharing any personal details, ensuring a completely anonymous and secure experience.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicySection1;
