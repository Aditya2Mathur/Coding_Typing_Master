import React from "react";
import Navbar from "../Components/Navbar";
import "../Components/components.css";
import Footer from '../Components/Footer'
import CallToAction from "../Components/CallToAction";
import ContactInfo from "../Components/ContactInfo";
function Contact() {
  return (
    <div>
      <section>
        <Navbar />
        <div className=" border-b-2 max-w-4xl flex flex-col gap-8 mx-auto text-center space-y-4 pb-24 md:space-y-6 pt-20">
          <div className="flex justify-center flex-col gap-5">
            <h1 className="main-heading md:text-5xl font-bold">
            Contact Coding Typing Master
            </h1>
            <h4 className=" h4-heading">
            We’re here to help you master your typing skills. Reach out to us for any queries, feedback, or support
            </h4>
          </div>
          <div className="flex flex-col  md:flex-row h-full rounded-lg feature-second">
            {/* Text Side */}
            <div>
              <div className="p-4">
                <div className="pb-5">
                  <p>
                  If you have any questions, need help with the tool, or want to share your feedback, we’d love to hear from you! Whether you're a student, professional, or just someone looking to improve your typing skills, we’re here to assist. <strong> Feel Free to Contact Us </strong>
                  </p>
                  <ul>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly my-20 lg:w-[90%] sm:w-full mx-auto rounded-md ">
         <ContactInfo/>
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

export default Contact;
