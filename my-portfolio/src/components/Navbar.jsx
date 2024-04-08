import React, { useState } from "react";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray-800 text-gray-200 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-4 md:flex-row items-center flex-row justify-between">
        <a className="title-font font-bold mb-4 ml-5 md:mb-0">
          <a href="about" className="text-lg">
            Ijeoma Obialor
          </a>
        </a>
        <nav className="font-semibold md:mr-auto md:ml-auto md:py-1 md:pl-4 md:border-gray-700 hidden md:flex flex-wrap items-center justify-center text-base">
          <a href="#projects" className="mr-5 hover:text-yellow-600">
            Projects
          </a>
          <a href="#skills" className="hover:text-yellow-600">
            Skills
          </a>
        </nav>
        <Hamburger toggleMenu={toggleMenu} menuOpen={menuOpen} />
        <a
          href="#contact"
          className="items-center bg-yellow-800 border-0 py-1 px-3 rounded-lg focus:outline-none hover:bg-white hover:text-yellow-500 mt-3 md:mt:0 mb-3 mr-2 hidden md:flex"
        >
          Let's Meet
        </a>
      </div>
    </header>
  );
};

export default Navbar;
