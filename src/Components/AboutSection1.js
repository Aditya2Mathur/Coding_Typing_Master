import React from "react";
import "./components.css";

function AboutSection1() {
  return (
    <div className=" h-[100%] pb-52 pt-10">
      <div className="">
        <div className="">
          <h2 className="text-center mb-10"> Our Mission</h2>
          
        </div>
        <div>
          <div>
            <ul className="px-10">
            <h3 className="heading-3 mb-2">Helping You Code Faster and More Accurately</h3>
              <p>
                The mission behind Coding Typing Master is to support <strong> Computer
                Science Students, Working Professionals, and those preparing for
                Software Company Interviews</strong> in improving their typing skills. We
                know that students need to write code accurately during exams,
                and interviewees are often required to code in simple text
                editors like Notepad. By practicing with real programming
                keywords and tags, this tool helps you avoid mistakes and type
                with confidence, ensuring you're ready for any coding challenge,
                whether it's in the classroom or a job interview.
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection1;
