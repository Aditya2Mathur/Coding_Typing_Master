import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import TypingCard from "../Components/TypingCard";
import { Link } from "react-router-dom";
import "../App.css";
import HomeSection1 from "../Components/HomeSection1";
import HomeSection2 from "../Components/HomeSection2";

import "../Components/components.css";
import { Helmet } from "react-helmet-async";
function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Coding typing Master" />
        <link rel="canonical" href="https://coding-typing-master.vercel.app/" />
      </Helmet>
      <div className="">
        <section className="">
          <Navbar />
          <main className="flex flex-col gap-20 pt-20">
            <div>
              <div className=" border-b-2 max-w-4xl mx-auto text-center space-y-4 pb-20 md:space-y-6">
                <h4 className="h4-heading">Master Typing for Coders</h4>
                <h1 className="main-heading md:text-5xl font-bold">
                  Improve Speed With Programming Skills
                </h1>
                <div className="mt-8 typing-card-box rounded-[20px]">
                  <TypingCard />
                </div>
                <div className="flex justify-evenly align-middle">
                  <Link to="/FAQ" className="how-it-work">
                    How It Works
                  </Link>
                  <Link to="/FAQ" className="how-it-work learn-more">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            
            <div
              className="flex justify-evenly mb-20 mx-[150px] rounded-md featureBackground"
              data-aos="fade-left"
            >
              <HomeSection1 />
              
            </div>
            <div className="flex justify-evenly mb-20 mx-[200px] rounded-md">
            <HomeSection2/>
            </div>
          </main>
        </section>
      </div>
    </>
  );
}

export default Home;
