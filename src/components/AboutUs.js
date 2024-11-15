import React from "react";
import { data } from "../constant/constant";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 px-6 lg:px-24 mb-24">
      <div className=" mx-auto text-center">
        <h2 className="text-5xl font-medium mb-28">About Me</h2>

        <div className="w-full ml-32   mx-auto flex flex-col md:flex-row md:gap-8 lg:gap-12 items-center">
          <div className="p-3 w-56 md:w-2/5 lg:w-72 bg-white  flex flex-col gap-4 items-center rounded-2xl hover:-translate-y-2 transition-transform duration-300 lg:-rotate-3 shadow-lg">
            <img
              alt="profile"
              className="w-full h-60 md:h-80 rounded-2xl object-cover grayscale hover:grayscale-0 transition-all bg-violet-100"
              src={data}
            />
            <p className="text-sm italic text-gray-500">
              &lt; Click to / 💡&gt;
            </p>
          </div>

          <div className=" ml-32 flex-1 text-left mt-8 md:mt-0">
            <p className="text-5xl font-medium">Vipul Kumar</p>
            <p className="mt-5 text-purple-600 text-xl font-semibold">
              Web Developer | Problem Solver
            </p>
            <p className="mt-4 text-gray-700 text-lg w-[720px] break-words dark:text-gray-500">
              I build innovative web applications with a focus on detail,
              scalability, and performance. I am passionate about building
              excellent software that improves the lives of those around me.
            </p>
            <button className="mt-6 px-10 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300">
              Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
