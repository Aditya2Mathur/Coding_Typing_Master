import React from "react";
import "../components.css";
import featureImage2 from "../../Assets/featureImage2.png";

function PrivacyPolicySection5() {
  return (
    <div className="flex flex-col md:flex-row h-full rounded-lg feature-second pt-10">
      {/* Image Side */}
      <div className="md:w-1/2 p-4 flex justify-center items-start">
        <img src={featureImage2} className="max-w-full h-auto rounded-lg" />
      </div>
      {/* Text Side */}
      <div className="md:w-1/2 p-4 ">
        <h2 className="mb-5">Updates to Our Privacy Policy</h2>
        <h3 className="heading-3 mb-2">
        We may update this policy occasionally to comply with Google AdSense requirements or other regulations.
        </h3>
        <p>
        At Coding Typing Master, we strive to keep our privacy policy up-to-date. As we continue to improve our services or adhere to new regulations, we may make changes to this policy. Any updates will be posted on this page to keep you informed about how we manage privacy and data.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicySection5;
