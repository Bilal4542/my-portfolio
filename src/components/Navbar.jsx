import React, { useEffect, useState } from "react";

const Navbar = () => {
    const[darkMode, setDarkMode] = useState('dark')
    useEffect(()=>{
            console.log(darkMode)
    },[darkMode])
  return (
    <div className={darkMode?'dark':'light'}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold cursor-pointer">
            Muhammad Bilal
          </div>
          <div className="hidden md:flex space-x-8">
            <button className="text-gray-700 dark:text-gray-600 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300 capitalize cursor-pointer">
              Home
            </button>
            <button className="text-gray-700 dark:text-gray-600 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300 capitalize cursor-pointer">
              About
            </button>
            <button className="text-gray-700 dark:text-gray-600 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300 capitalize cursor-pointer">
              Skills
            </button>
            <button className="text-gray-700 dark:text-gray-600 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300 capitalize cursor-pointer">
              Experience
            </button>
            <button className="text-gray-700 dark:text-gray-600 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300 capitalize cursor-pointer">
              Projects
            </button>
            <button className="text-gray-700 dark:text-gray-600 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300 capitalize cursor-pointer">
              Contact
            </button>
          </div>
          <div className="flex items-center space-x-4">
            {/* <button
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
              title="Switch to French">
              <div className="flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-languages w-4 h-4"
                >
                  <path d="m5 8 6 6"></path>
                  <path d="m4 14 6-6 2-3"></path>
                  <path d="M2 5h12"></path>
                  <path d="M7 2h1"></path>
                  <path d="m22 22-5-10-5 10"></path>
                  <path d="M14 18h6"></path>
                </svg>
                <span className="text-xs font-semibold uppercase">en</span>
              </div>
            </button> */}
            <button onChange={(event)=>setDarkMode(event.target.value)} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-moon w-5 h-5 animate-pulse"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            </button>
            <button className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-menu w-5 h-5"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
