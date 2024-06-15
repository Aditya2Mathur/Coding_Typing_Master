import React from 'react'
import Navbar from '../Components/Navbar'
function InfoPage() {
  return (
    <div>
      <section>
        <Navbar />
        <div className=" my-20">
          <div className='place-content-center'>
            <h1 className="text-xl lg:text-4xl sm:text-2xl">Coding Words Typing Master</h1>
            
            <div className='my-8'>
              <p className='text-xs lg:text-2xl xl:text-2xl md:text-xl'>
              Coding Typing Master is a ReactJS-based web app designed to improve typing skills, tailored for computer science students. It features customizable themes, real-time typing analysis, and a diverse library of programming keywords and logic-building exercises sourced from ChatGPT, offering an engaging environment for users to enhance both their typing proficiency and programming knowledge.</p>
            </div>
            <p className='text-xl lg:text-4xl sm:text-2xl'>Built by <br></br> <a href='https://github.com/Aditya2Mathur' className='text-skin-base underline'>Aditya Mathur, Aditya Kumar <br></br> Shashank Dixit, Abhishek Kumar</a>.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InfoPage