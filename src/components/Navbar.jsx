// import React, { useState } from 'react'
// import { Link } from 'react-scroll'
// import { SiCoffeescript } from "react-icons/si";
// import Button from './layouts/Button';
// import {FaX, FaBars} from 'react-icons/fa6'

// const Navbar = () => {

//   const [menu, setMenu] = useState(false);

//   const handleChange = () => {
//     setMenu(!menu)
//   }

//   const closeMenu = () => {
//     setMenu(false)
//   }


//   return (
//     <div className='fixed w-full bg-gradient-to-r from-blue-500 to-blue-300'>
//       <div>
//         <div className='flex flex-row justify-between items-center p-5 lg:px-15 px-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
//           <div className='flex flex-row gap-2 items-center cursor-pointer'>
//             <h1 className='text-xl text-white font-semibold'>Muhammad Bilal</h1>
//           </div>
//           <nav className='hidden md:flex flex-row items-center gap-8 text-lg font-semibold'>
//             <Link to='/' spy={true} smooth={true} duration={500} className='cursor-pointer group relative inline-block hover:text-white'>Home  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span></Link>
//             <Link to='about' spy={true} smooth={true} duration={500} className='cursor-pointer group relative inline-block hover:text-white'>About  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span></Link>
//             <Link to='skills' spy={true} smooth={true} duration={500} className='cursor-pointer group relative inline-block hover:text-white'>Skills  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span></Link>
//             <Link to='experience' spy={true} smooth={true} duration={500} className='cursor-pointer group relative inline-block hover:text-white'>Experience  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span></Link>
//             <Link to='projects' spy={true} smooth={true} duration={500} className='cursor-pointer group relative inline-block hover:text-white'>Projects  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span></Link>
//             <Link to='contact' spy={true} smooth={true} duration={500} className='cursor-pointer group relative inline-block hover:text-white'>Contact  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span></Link>
//           </nav>
//           <div className='md:hidden flex items-center cursor-pointer'>
//             {
//               menu ? ( <FaX size={25} onClick={handleChange}/> ) : ( <FaBars size={25} onClick={handleChange}/> )
//             }
//           </div>
//         </div>
//         {/* mobile menu */}
//         <div className={` ${
//             menu ? "translate-x-0" : "-translate-x-full"
//           } lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
//         <Link to='/' spy={true} smooth={true} duration={500} className='cursor-pointer group relative inline-block hover:text-brightColor' onClick={closeMenu}>Home  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span></Link>
//             <Link to='about' spy={true} smooth={true} duration={500} className='cursor-pointer group relative inline-block hover:text-brightColor' onClick={closeMenu}>About  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span></Link>
//             <Link to='skills' spy={true} smooth={true} duration={500} className='cursor-pointer group relative inline-block hover:text-brightColor' onClick={closeMenu}>Skills  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span></Link>
//             <Link to='experience' spy={true} smooth={true} duration={500} className='cursor-pointer group relative inline-block hover:text-brightColor' onClick={closeMenu}>Experience  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span></Link>
//             <Link to='projects' spy={true} smooth={true} duration={500} className='cursor-pointer group relative inline-block hover:text-brightColor' onClick={closeMenu}>Projects  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span></Link>
//             <Link to='contact' spy={true} smooth={true} duration={500} className='cursor-pointer group relative inline-block hover:text-brightColor' onClick={closeMenu}>Contact  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span></Link>
//             {/* <Button title='Login'/> */}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar

import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaX, FaBars, FaSun, FaMoon } from 'react-icons/fa6'

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  const handleChange = () => {
    setMenu(!menu);
  }

  const closeMenu = () => {
    setMenu(false);
  }

  const navItems = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'experience', label: 'Experience' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' }
  ];

  return (
    <div className='fixed w-full z-50 bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300'>
      <div className="max-w-7xl mx-auto">
        <div className='flex flex-row justify-between items-center p-4 lg:px-8 px-4'>
          {/* Logo */}
          <div className='flex flex-row gap-2 items-center cursor-pointer group'>
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">MB</span>
            </div>
            <h1 className='hidden lg:block text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300'>
              Muhammad Bilal
            </h1>
          </div>

          {/* Centered Desktop Navigation */}
          <nav className='hidden md:flex flex-row items-center gap-1 absolute left-1/2 transform -translate-x-1/2'>
            {navItems.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer px-4 py-2 text-gray-700 dark:text-gray-300  font-medium transition-all duration-300 relative group"
                activeClass="text-blue-600 dark:text-blue-400 font-semibold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side - Dark Mode Toggle and Mobile Menu */}
          <div className='flex items-center gap-4'>
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Button */}
            <div className='md:hidden flex items-center cursor-pointer'>
              {menu ? (
                <FaX 
                  size={24} 
                  onClick={handleChange}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                />
              ) : (
                <FaBars 
                  size={24} 
                  onClick={handleChange}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-xl border-t border-gray-200 dark:border-gray-700 ${
          menu 
            ? "max-h-96 opacity-100 visible translate-y-0" 
            : "max-h-0 opacity-0 invisible -translate-y-2"
        } transition-all duration-500 ease-in-out overflow-hidden`}>
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer px-6 py-4 text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 border-b border-gray-100 dark:border-gray-800 last:border-b-0"
                onClick={closeMenu}
                activeClass="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 font-semibold"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar