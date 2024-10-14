import React from "react";
import "./components.css";
import featureImage2 from "../Assets/featureImage2.png";
import mailIcon from "../Assets/mail-Icon.png";
import phoneIcon from "../Assets/phone-icon.png";
import locationIcon from "../Assets/location-icon.png";

function ContactInfo() {
  return (
    <div className="flex flex-col justify-between md:flex-row w-[100%] h-full rounded-lg feature-second pt-10">
      {/* Image Side */}
      <div className="md:w-1/2 p-4 flex justify-center items-start">
        <img src={featureImage2} className="max-w-full h-auto rounded-lg" />
      </div>
      {/* Text Side */}
      <div className="md:w-1/2 p-4 ">
        <div>
          <h2 className="mb-3">Contact Information</h2>
          <h3 className="heading-3 mb-2">How to Reach Us</h3>
        </div>
        <div className="flex flex-col gap-1">
          <p className="flex gap-1">
            <img src={mailIcon} className="contact-icon" /> Email Us at:
            codingtyping@gmail.com
          </p>
          <p className="flex gap-1">
            <img src={phoneIcon} className="contact-icon" /> Call Us: +91
            7834881186
          </p>
          <p className="flex gap-1">
            <img src={locationIcon} className="contact-icon" /> Address: Sector 62,
            Noida, Uttar Pradesh
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
