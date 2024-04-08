import React from 'react'

const Hamburger = ({ toggleMenu, menuOpen }) => {
    return (
        <>
            <button onClick={toggleMenu} className="md:hidden inline-flex items-center bg-yellow-800 border-0 py-1 px-3 rounded-lg focus:outline-none hover:bg-white hover:text-yellow-500 top-7 right-4 md:mt:0 mb-3 mr-0 fixed z-20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
            </button>
            <div className={`h-screen w-screen bg-white md:hidden fixed top-0 right-0 z-10 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-all`}>
                <nav className="font-bold md:mr-auto md:ml-auto md:py-1 md:pl-4 md:border-gray-700 mt-5 flex flex-col items-center justify-center text-base">
                    <a href="#projects" className="mr-5 text-yellow-600">
                        Projects
                    </a>
                    <a href="#skills" className="mr-5 text-yellow-600">
                        Skills
                    </a>
                    <a
                        href="#contact" className="inline-flex items-center bg-yellow-800 border-0 py-1 px-3 rounded-lg focus:outline-none hover:bg-white hover:text-yellow-500 mt-3 md:mt:0 mb-3 mr-2">
                        Let's Meet
                    </a>
                </nav>

            </div>
        </>
    )
}

export default Hamburger