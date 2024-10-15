import React from "react";
import "../components.css";
import featureImage4 from "../../Assets/featureImage4.png";

function HomeSection4() {
  return (
    <div className="flex flex-col  md:flex-row h-full rounded-lg feature-second pt-10">
      {/* Text Side */}
      <div>
        <div className="md:w-1/2 pl-3">
          <h2 className="text-left mb-5">How Coding Typing Master Works</h2>
        </div>
        <div className=" p-4">
            <div className="pb-5">
                <h4 className="heading-4">Step 1: Choose Your Programming Language</h4>
                <p>Start by selecting the programming language you want to practice typing in. Coding Typing Master offers popular languages like Python, Java, JavaScript, and more. This helps you get familiar with the exact keywords, tags, and syntax used in real coding projects.</p>
            </div>
            <div className="pb-5">
                <h4 className="heading-4">Step 2: Set Your Typing Goals</h4>
                <p>Decide on your typing goals, such as the speed and accuracy you want to achieve. Whether you're aiming to type faster or make fewer mistakes, setting a clear goal will help you stay focused and improve over time.</p>
            </div>
            <div className="pb-5">
                <h4 className="heading-4">Step 3: Practice with Real Keywords and Tags</h4>
                <p>Practice typing actual programming keywords and tags from the language you chose. This makes your learning practical and relevant, helping you memorize coding syntax while improving your typing skills at the same time.</p>
            </div>
            <div className="pb-10">
                <h4 className="heading-4">Step 4: Track Your Typing Speed and Accuracy</h4>
                <p>As you practice, you can track your typing speed and accuracy in real-time. Coding Typing Master shows you how many words per minute (WPM) you're typing and how accurate you are, helping you see your progress and identify areas for improvement.</p>
            </div>
            <div>
              <img src={featureImage4} className="w-[80%] h-auto mx-auto"></img>
            </div>
        </div>
      </div>
      
    </div>
  );
}

export default HomeSection4;
