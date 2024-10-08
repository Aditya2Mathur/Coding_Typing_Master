import React from "react";
import Navbar from "../Components/Navbar";
import TypingCard from "../Components/TypingCard"
import "../App.css";
import { Helmet } from "react-helmet-async";
function Home() {
  return (
    <>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="Coding typing Master"/>
      <link rel="canonical" href="https://coding-typing-master.vercel.app/" />
    </Helmet>
    <div>
      <section className="grid h-screen lg:px-50">
        <Navbar />
        <div>
          <h1>Improve Your Typing Speed and Accuracy with Programming Keywords | Coding Typing Master</h1>
        </div>
        <TypingCard/>
      </section>
    </div>
    </>
  );
}

export default Home;
