import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 dark:bg-white sticky top-0 z-50 opacity-95">
      <div className="text-3xl font-bold ml-40">Vipul</div>
      <nav>
        <ul className="flex space-x-8 mr-5">
          {/* Anchor tags for smooth scrolling */}
          <li className="hover:text-purple-600 text-lg cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-purple-600 cursor-pointer text-lg">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-purple-600 cursor-pointer text-lg">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-purple-600 cursor-pointer text-lg">
            <a href="#eduction">Eduction</a>
          </li>
          <li className="hover:text-purple-600 cursor-pointer text-lg">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
