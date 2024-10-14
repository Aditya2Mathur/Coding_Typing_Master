import React from "react";
import Navbar from "../Components/Navbar";
import AboutSection1 from "../Components/AboutSection1";
import "../Components/components.css";
import Footer from '../Components/Footer'
import AboutSection2 from "../Components/AboutSection2";
import CallToAction from "../Components/CallToAction";
function CodingTypingMasterAboutPage() {
  return (
    <div>
      <section>
        <Navbar />
        <div className=" border-b-2 max-w-4xl flex flex-col gap-8 mx-auto text-center space-y-4 pb-24 md:space-y-6 pt-20">
          <div className="flex justify-center flex-col gap-5">
            <h1 className="main-heading md:text-5xl font-bold">
              About Coding Typing Master
            </h1>
            <h4 className=" h4-heading">
              Empowering Students and Professionals to Master Typing Skills with
              Programming Keywords.
            </h4>
          </div>
          <div className="flex flex-col  md:flex-row h-full rounded-lg feature-second">
            {/* Text Side */}
            <div>
              <div className=" p-4">
                <div className="pb-5">
                  <p>
                    At <strong>Coding Typing Master</strong>, our mission is to
                    help you improve your typing skills with real{" "}
                    <strong> programming keywords and tags</strong>. Whether
                    you're a student, developer, or coding enthusiast, our tool
                    is designed to make typing practice both practical and
                    enjoyable. We believe that faster, more accurate typing
                    leads to better coding, and we’re here to support your
                    journey to becoming a more efficient coder. Built with
                    simplicity and efficiency in mind, our platform is free,
                    easy to use, and tailored for programmers at all levels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly my-20 lg:w-[80%] sm:w-full mx-auto rounded-md AboutfeatureBackground">
          <AboutSection1 />
        </div>
        <div className="flex justify-evenly my-20 lg:w-[80%] sm:w-full mx-auto rounded-md AboutfeatureBackground">
          <AboutSection2 />
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

export default CodingTypingMasterAboutPage;
