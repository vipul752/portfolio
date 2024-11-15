import React from "react";

const Education = () => {
  return (
    <section id="eduction" className="py-12 mt-24 mb-32">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-medium text-center mb-12">Education</h2>
        <div className="relative">
          {/* Timeline Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-80 w-1 bg-gray-300"></div>

          {/* Timeline Item 1 (Left Side) */}
          <div className="mb-8 flex items-center w-full">
            <div className="bg-gray-50 p-6 rounded-md shadow-lg w-5/12">
              <h3 className="font-bold text-lg">
                G.L Bajaj Management of Institute (GLBIM)
              </h3>
              <p className="text-sm text-gray-500">BCA | 2023 - 2026</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                • Pursuing Bachelor's of Computer Application from GLBIM.
              </p>
            </div>

            {/* SVG Icon */}
            <div className="w-16 h-16 flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-lg">
              <span className="flex items-center justify-center w-6 h-6 md:w-9 md:h-9 bg-violet-200 rounded-full ring-4 md:ring-8 ring-white ">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-base md:text-xl text-violet-600 dark:text-violet-400"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path>
                </svg>
              </span>
            </div>
          </div>

          {/* Timeline Item 2 (Right Side) */}
          <div className="mb-8 flex items-center w-full justify-end">
            {/* SVG Icon */}
            <div className="w-16 h-16 flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-lg">
              <span className="flex items-center justify-center w-6 h-6 md:w-9 md:h-9 bg-violet-200 rounded-full ring-4 md:ring-8 ring-white ">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-base md:text-xl text-violet-600 dark:text-violet-400"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path>
                </svg>
              </span>
            </div>

            <div className="bg-gray-50 p-6 rounded-md shadow-lg w-5/12">
              <h3 className="font-bold text-lg">Bloom Public School | CBSE</h3>
              <p className="text-sm text-gray-500">Commerce | 2021 - 2023</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                • Class 10th: 8 CGPA <br />• Class 12th: 81 Percentage
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
