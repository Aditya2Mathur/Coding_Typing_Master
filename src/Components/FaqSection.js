import React, { useState } from "react"; // Added useState import
import "./components.css";

function FaqSection() {
    const FAQ = [ // Array of testimonials
        {
          question: "What programming languages does Coding Typing Master support?",
          answer: "Our typing tutor is designed to help you practice common programming languages like Java, Python, JavaScript, and more.",
        },
        {
          question: "Is this tool useful for beginners?",
          answer: "Yes! Whether you’re new to coding or an experienced developer, Coding Typing Master helps improve your typing speed in programming languages.",
        }
    ];

    const [selectedIndex, setSelectedIndex] = useState(null); // State to track selected question

    return (
        <div className="flex align-middle flex-col md:flex-row h-full rounded-lg p-10">
            {/* Text Side */}
            <div>
                <div className="md:w-1/1 pl-3">
                    <h2 className="text-left mb-5">Frequently Asked Questions</h2>
                </div>
                <div className="faq-container p-4"> {/* Added a container for consistent width */}
                    {/* Testimonial Text */}
                    <div className="pb-5 transition-opacity duration-500 max-w-full flex gap-5 flex-col">
                        {FAQ.map((item, index) => ( // Iterate over FAQ array
                            <div key={index} className="faq-item" onClick={() => setSelectedIndex(index)} style={{ cursor: 'pointer' }}>
                                <h4 className="heading-4">{item.question}</h4> {/* Display question */}
                                <p className={`italic transition-all duration-500 ${selectedIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                    {item.answer}
                                </p> {/* Display answer with animation */}
                                <hr className="faq-divider" /> {/* Divider between questions */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
}

export default FaqSection;
