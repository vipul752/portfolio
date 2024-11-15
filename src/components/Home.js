import React from "react";
import { data } from "../constant/constant";

const Home = () => {
  const clickHandler = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="home"
      className="flex flex-col   lg:flex-row items-center justify-between h-screen px-4 sm:px-6 lg:px-24 overflow-hidden"
    >
        {/* Right side content */}
      <div className="relative flex justify-center ">
        <div className="w-96 h-96 lg:w-96 lg:h-96">
          <img
            alt="avatar"
            className="rounded-full w-full h-full object-cover border-8 border-white"
            src={data}
          />
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute top-4 sm:top-6 right-6 lg:-right-12 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white dark:bg-gray-50 rounded-full grid place-items-center hover:shadow-lg transition-shadow">
          <img
            alt="tech-stack"
            className="h-8 w-8 md:h-10 md:w-10 object-cover"
            src="https://dhruv-portfolio-mu.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fnodejs.png&w=256&q=75"
          />
        </div>
        <div className="absolute bottom-6 sm:bottom-8 right-6 lg:bottom-10 lg:-right-12 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white dark:bg-gray-50 rounded-full grid place-items-center hover:shadow-lg transition-shadow">
          <img
            alt="tech-stack"
            className="h-8 w-8 md:h-10 md:w-10 object-cover"
            src="https://dhruv-portfolio-mu.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Freact-native.png&w=256&q=75"
          />
        </div>
      </div>
      {/* Left side content */}
      <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
        <div>
          <h1 className="text-xl sm:text-3xl mb-2 text-black">👋 Hey</h1>
          <h2 className="text-4xl sm:text-5xl font-bold mb-2 text-black">
            I'm Vipul Kumar
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-2xl mb-6 mt-4 text-black">
            I am into{" "}
            <span className="text-purple-600 font-semibold">Full Stack Development</span>
          </h3>
          <div className="max-w-lg mx-auto">
            <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed mb-6">
              I build innovative web applications with a focus on detail, scalability, and performance. I am passionate about building excellent software that improves the lives of those around me.
            </p>
          </div>
          <button
            onClick={clickHandler}
            className="bg-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-purple-700 transition duration-300"
          >
            About Me &rarr;
          </button>
        </div>
      </div>

    
    </div>
  );
};

export default Home;
