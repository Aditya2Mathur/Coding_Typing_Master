import React from "react";
import Navbar from "../Components/Navbar";
import "../Components/components.css";
import Footer from '../Components/Footer';
import CallToAction from "../Components/CallToAction";
import PrivacyPolicySection1 from "../Components/PrivacyPolicy/PrivacyPolicySection1";
import PrivacyPolicySection2 from "../Components/PrivacyPolicy/PrivacyPolicySection2";
import PrivacyPolicySection3 from "../Components/PrivacyPolicy/PrivacyPolicySection3";

function PrivacyPolicy() {
  return (
    <div>
      <section>
        <Navbar />
        <div className=" border-b-2 max-w-4xl flex flex-col gap-8 mx-auto text-center space-y-4 pb-24 md:space-y-6 pt-20">
          <div className="flex justify-center flex-col gap-5">
            <h1 className="main-heading md:text-5xl font-bold">
            Privacy Policy
            </h1>
            <h4 className=" h4-heading">
            Your privacy is important to us. This policy explains how we collect, use, and protect your data when you use Coding Typing Master.
            </h4>
          </div>
          <div className="flex flex-col  md:flex-row h-full rounded-lg feature-second">
            {/* Text Side */}
            <div>
              <div className=" p-4">
                <div className="pb-5">
                  <p>
                    At <strong>Coding Typing Master</strong>, we respect your privacy and are committed to protecting your personal information. We do not collect or store any user data while you use our tool. Since there are no log-ins or personal accounts, we don't track or save any information about your activities. We also don’t use cookies on our website. Our goal is to provide a safe and secure environment for you to practice your typing skills without worrying about data privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly my-20 lg:w-[80%] sm:w-full mx-auto rounded-md AboutfeatureBackground">
          <PrivacyPolicySection1 />
        </div>
        <div className="flex justify-evenly my-20 lg:w-[80%] sm:w-full mx-auto rounded-md AboutfeatureBackground">
          <PrivacyPolicySection2 />
        </div>
        <div className="flex justify-evenly my-20 lg:w-[80%] sm:w-full mx-auto rounded-md AboutfeatureBackground">
          <PrivacyPolicySection3 />
        </div>
        <div className="flex justify-evenly my-20 lg:w-[80%] sm:w-full mx-auto rounded-md ">
          <CallToAction />
        </div>
        <div className="">
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
