import Navbar from "../Components/Navbar";
import TypingCard from "../Components/TypingCard";
import { Link } from "react-router-dom";
import "../App.css";
import HomeSection1 from "../Components/HomeSection/HomeSection1";
import HomeSection2 from "../Components/HomeSection/HomeSection2";

import "../Components/components.css";
import { Helmet } from "react-helmet-async";
import HomeSection3 from "../Components/HomeSection/HomeSection3";
import HomeSection4 from "../Components/HomeSection/HomeSection4";
import TestimonialSection from "../Components/HomeSection/TestmonialSection";
import FaqSection from "../Components/HomeSection/FaqSection";
import Footer from "../Components/Footer";
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
                  <Link to="/settings" className="how-it-work learn-more">
                    Filter
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="flex justify-evenly mb-20 lg:w-[80%] sm:w-full mx-auto rounded-md featureBackground">
              <HomeSection1 />
            </div>
            <div className="flex justify-evenly mb-20 mx-auto lg:w-[80%] sm:w-full rounded-md">
            <HomeSection3/>
            </div>
            <div className="flex justify-evenly mb-20 lg:w-[80%] sm:w-full mx-auto rounded-md">
            <HomeSection2/>
            </div>
            <div className="h-2 bg-[FFFCFF] w-full"></div> 
            <div className="flex sm:flex-col-reverse justify-evenly mb-20 mx-auto lg:w-[80%] sm:w-full lg:mx-40 rounded-md">
            <HomeSection4/>
            </div>
            <div className="flex justify-center mb-10 lg:w-[80%] sm:w-full mx-auto rounded-md">
            <TestimonialSection/>
            </div>
            <div className="flex justify-evenly mb-10 sm:mx-10  rounded-md">
            <FaqSection/>
            </div>
          </main>
          <Footer/>
        </section>
      </div>
    </>
  );
}

export default Home;
