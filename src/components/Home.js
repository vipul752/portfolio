import React from "react";
import { data } from "../constant/constant";

const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col ml-20 lg:flex-row items-center justify-between h-screen px-6 lg:px-24 overflow-hidden"
    >
      {/* Left side content */}
      <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
        <div>
          <h1 className="text-2xl mb-2">👋 Hey</h1>
          <h2 className="text-5xl md:text-5xl font-bold mb-2">
            I'm Vipul Kumar
          </h2>
          <h3 className="text-xl md:text-2xl mb-6 mt-6">
            I am into{" "}
            <span className="text-purple-600 font-semibold">
              Full Stack Development
            </span>
          </h3>
          <div className="max-w-lg mx-auto">
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-500 leading-relaxed mb-6">
              I build innovative web applications with a focus on detail,
              scalability, and performance. I am passionate about building
              excellent software that improves the lives of those around me.
            </p>
          </div>
          <button className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition duration-300">
            About Me &rarr;
          </button>
        </div>
      </div>

      {/* Right side content */}
      <div className="relative mx-auto lg:mx-0 mt-12 lg:mt-0 flex justify-center lg:justify-end w-full lg:w-1/2">
        <div className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80">
          <img
            alt="avatar"
            className="rounded-full w-full h-full object-cover"
            src={data}
          />
        </div>

        {/* Floating Tech Icons */}

        <div className="absolute top-0 right-1/4 lg:-right-12 w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-gray-50 rounded-full grid place-items-center hover:shadow-lg transition-shadow">
          <img
            alt="tech-stack"
            className="h-8 w-8 md:h-10 md:w-10 object-cover"
            src="https://dhruv-portfolio-mu.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fnodejs.png&w=256&q=75"
          />
        </div>
        <div className="absolute bottom-8 right-1/4 lg:bottom-10 lg:-right-12 w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-gray-50 rounded-full grid place-items-center hover:shadow-lg transition-shadow">
          <img
            alt="tech-stack"
            className="h-6 w-6 md:h-10 md:w-10 object-cover"
            src="https://dhruv-portfolio-mu.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Freact-native.png&w=256&q=75"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
