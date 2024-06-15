import React from "react";
import Navbar from "../Components/Navbar";
import TypingCard from "../Components/TypingCard"
import "../App.css";
function Home() {
  return (
    <div>
      <section className="grid h-screen px-96">
        <Navbar />
        <TypingCard/>
      </section>
    </div>
  );
}

export default Home;
