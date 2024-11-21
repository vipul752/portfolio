import React from "react";
import { data } from "../constant/constant";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-24 mb-24">
      <div className="mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-16 sm:mb-20">
          About Me
        </h2>

        <div className="w-full mx-auto flex flex-col md:flex-row md:gap-8 lg:gap-12 items-center">
          {/* Profile Card */}
          <div className="p-3 w-64 sm:w-72 md:w-2/5 lg:w-80 bg-white flex flex-col gap-4 items-center rounded-2xl hover:-translate-y-2 transition-transform duration-300 lg:-rotate-3 shadow-lg">
            <img
              alt="profile"
              className="w-full h-48 sm:h-60 md:h-72 lg:h-80 rounded-2xl object-cover grayscale hover:grayscale-0 transition-all bg-violet-100"
              src={data.image}
            />
            <p className="text-sm italic text-gray-500">
              &lt; Click to / 💡&gt;
            </p>
          </div>

          {/* Content Section */}
          <div className="flex-1 text-center md:text-left mt-8 md:mt-0">
            <p className="text-3xl sm:text-4xl md:text-5xl font-medium">
              Vipul Kumar
            </p>
            <p className="mt-3 sm:mt-5 text-purple-600 text-lg sm:text-xl font-semibold">
              Web Developer | Problem Solver
            </p>
            <p className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed dark:text-gray-500">
              I build innovative web applications with a focus on detail,
              scalability, and performance. I am passionate about building
              excellent software that improves the lives of those around me.
            </p>
            <button
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1pJspWviTnEz2hJ7wwOlXPuhVmPmROW9S/view?usp=drive_link"
                );
              }}
              className="mt-6 px-8 sm:px-10 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300"
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
