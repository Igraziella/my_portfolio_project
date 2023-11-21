import React, { useState } from "react";
const [isOpen, setIsOpen] = useState(false);

const Navbar = () => {
    return (
        <header className="bg-gray-800 text-gray-200 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-0 flex-col md:flex-row items-center">
                <a className="title-font font-bold mb-4 ml-5 md:mb-0">
                    <a href="about" className="text-lg">
                        Ijeoma Obialor
                    </a>
                </a> 
                <div className="block lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center px-3 py-2 rounded text-black-500">
                    <svg
                        className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    <svg
                        className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>
                </button>
                <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`} >
                    <div className="text-sm lg:flex-grow">
                        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                        Skills
                        </a>
                        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                        Projects
                        </a>
                    </div>
                <div>
          <button className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white">
            Lets Meet
          </button>
        </div>
    </div>
    </div>
    
   
                <nav className="font-semibold md:mr-auto md:ml-auto md:py-1 md:pl-4 md:border-gray-700 flex flex-wrap items-center justify-center text-base">
                    <a href="#projects" className="mr-5 hover:text-yellow-600">
                        Projects
                    </a>
                    <a href="#skills" className="hover:text-yellow-600">
                        Skills
                    </a>
                </nav>
                <a 
                    href="#contact" className="inline-flex items-center bg-yellow-800 border-0 py-1 px-3 rounded-lg focus:outline-none hover:bg-white hover:text-yellow-500 mt-4 md:mt:0 mb-2 mr-2">
                        Let's  Meet
                </a>
            </div>
        </header>
    );
}

export default Navbar;