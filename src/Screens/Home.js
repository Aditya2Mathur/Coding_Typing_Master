import React from "react";
import Navbar from "../Components/Navbar";
import TypingCard from "../Components/TypingCard"
import { Link } from "react-router-dom";
import "../App.css";
import "../Components/components.css"
import { Helmet } from "react-helmet-async";
function Home() {
  return (
    <>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="Coding typing Master"/>
      <link rel="canonical" href="https://coding-typing-master.vercel.app/" />
    </Helmet>
    <div className="">
      <section className="grid h-screen">
        <Navbar />
        <main className="mx-auto pt-16 pb-24">
          <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
            <h4 className="h4-heading">Master Typing for Coders</h4>
            <h1 className="main-heading md:text-5xl font-bold">Improve Speed With Programming Skills</h1>
            <div className="mt-8">
              <TypingCard />
            </div>
            <div className="flex justify-evenly align-middle">
            <Link to="/FAQ" className="how-it-work">How It Works</Link>
            <Link to="/FAQ" className="how-it-work learn-more">Learn More</Link>
            </div>
          </div>
        </main>
      </section>
    </div>
    </>
  );
}

export default Home;
