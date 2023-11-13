import React from "react";

export default function Navbar() {
    return (
        <header className="bg-green-800 text-gray-200 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-bold mb-4 ml-5 md:mb-0">
                    <a href="about" className="text-lg">
                        Ijeoma Obialor G
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-gray-700 flex flex-wrap items-center justify-center">
                    <a href="#projects" className="mr-6 hover:text-yellow-600">
                        My Works
                    </a>
                    <a href="#skills" className="hover:text-yellow-600">
                        Skills
                    </a>
                </nav>
                <a 
                    href="#contact" className="inline-flex items-center bg-yellow-800 border-0 py-1 px-3 rounded focus:outline-none hover:bg-white hover:text-yellow-500 tracking-widest mt-4 md:mt:0">
                        Hire Me
                </a>
            </div>
        </header>
    );
}