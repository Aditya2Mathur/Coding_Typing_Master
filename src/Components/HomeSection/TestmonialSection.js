import React, { useState } from "react"; // Added useState import
import "../components.css";
import Profile1 from "../../Assets/profile1.png";
import Profile2 from "../../Assets/profile2.png";
import Profile3 from "../../Assets/profile3.png";

function TestimonialSection() {
  const testimonials = [ // Array of testimonials
    {
      title: "Shashank Dixit ( Founder of MagnumKare )",
      content: "I was amazed at how quickly I saw improvements in my typing speed and accuracy with Coding Typing Master. It’s simple, effective, and perfect for developers who want to get better at typing while coding. Highly recommended!",
      image: Profile1 // Add image for each testimonial
    },
    {
      title: "Ravi Mathur ( Founder of Growth4x )",
      content: "This tool is fantastic for anyone looking to improve their coding efficiency. As a professional, I need to type quickly, and Coding Typing Master has been a great way to enhance my speed. The focus on real programming keywords makes it even more valuable.",
      image: Profile3 // Add image for each testimonial
    },
    {
      title: "Aman ( Student at Scaler School of Technology )",
      content: "Coding Typing Master has really helped me improve my typing speed with code. I used to struggle with writing programming keywords quickly, but now I can type faster and with more accuracy. It's easy to use and perfect for students like me!",
      image: Profile2 // Add image for each testimonial
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // State for current testimonial index

  const nextTestimonial = () => { // Function to go to the next testimonial
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => { // Function to go to the previous testimonial
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="flex align-middle flex-col sm:flex-col md:flex-row h-full rounded-lg feature-second p-10">
      {/* Text Side */}
      <div>
        <div className="md:w-1/2 pl-3">
          <h2 className="text-left mb-5">What Our Users Say</h2>
        </div>
        <div className="p-4">
          {/* Testimonial Text */}
          <div className="pb-5 sm:h-[50%] transition-opacity duration-500 max-h-full " style={{ minHeight: '100px' }}>
            <h4 className="heading-4">{testimonials[currentIndex].title}</h4>
            <p className="italic">" {testimonials[currentIndex].content} "</p>
          </div>
          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button onClick={prevTestimonial} className="arrow-button">←</button>
            <button onClick={nextTestimonial} className="arrow-button">→</button>
          </div>
        </div>
      </div>
      <div>
        <div>
          {/* Testimonial Images */}
          <img src={testimonials[currentIndex].image} alt="Testimonial" className="w-full transition-opacity duration-500" />
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
