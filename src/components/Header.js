import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white  sticky top-0 z-50">
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl sm:text-4xl   font-bold ml-5">Vipul</div>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="sm:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Navigation for Larger Screens */}
        <nav className="hidden sm:block">
          <ul className="flex space-x-8 mr-5">
            <li className="hover:text-purple-600 text-lg cursor-pointer">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-purple-600 text-lg cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-purple-600 text-lg cursor-pointer">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-purple-600 text-lg cursor-pointer">
              <a href="#education">Education</a>
            </li>
            <li className="hover:text-purple-600 text-lg cursor-pointer">
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isMenuOpen && (
        <nav className="sm:hidden bg-white  border-t border-gray-300 ">
          <ul className="flex flex-col space-y-2 p-4">
            <li className="hover:text-purple-600 text-lg cursor-pointer">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-purple-600 text-lg cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-purple-600 text-lg cursor-pointer">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-purple-600 text-lg cursor-pointer">
              <a href="#education">Education</a>
            </li>
            <li className="hover:text-purple-600 text-lg cursor-pointer">
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
