import React from 'react'
import { FiLinkedin, FiGithub, FiPhone   } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <div className='flex justify-center items-center w-[90%] m-auto  h-screen'>
      <div className="flex items-center justify-center flex-col gap-3">
        <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold md:mt-20'>Muhammad Bilal</h1>
        <p className='text-gray-600'>Khyber Pakhtunkhwa Peshawar, Pakistan</p>
        <p className='font-semibold text-gray-700 text-sm text-center md:text-md'>Full-Stack Developer | MERN, Next JS, Nest JS | Building Scalable Web Apps</p>
        <div className='flex items-center justify-center gap-4 md:text-lg font-semibold'>
          <a href='' className='bg-gradient-to-r from-blue-500 to-blue-300 text-sm md:text-lg text-white p-2 md:p-3 rounded-2xl  hover:border-2 hover:border-blue-500 hover:from-blue-300 hover:to-blue-500 cursor-pointer transition-all duration-100'>Download CV</a>
          <a href='' className='border-2 p-2 md:p-3 rounded-2xl text-sm md:text-lg border-blue-500 hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-500 hover:text-white cursor-pointer transition-all duration-100'>Contact Me</a>
          <a href='' className='bg-gradient-to-r from-blue-500 to-blue-300 text-sm md:text-lg text-white p-2 md:p-3 rounded-2xl  hover:border-2 hover:border-blue-500 hover:from-blue-300 hover:to-blue-500 cursor-pointer transition-all duration-100'>View Projects</a>
        </div>
        <div className="flex items-center justify-center gap-7 p-4">
          <a href="https://github.com/Bilal4542" target='_blank' className='text-2xl bg-white shadow-xl p-3 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-200 hover:scale-125'><span className=''><FiGithub /></span></a>
          <a href="https://www.linkedin.com/in/muhammad-bilal-b8b410329/" target='_blank' className='text-2xl bg-white shadow-xl p-3 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-200 hover:scale-125'><span className=''><FiLinkedin/></span></a>
          <a href="mailto:mbilal45422@gmail.com" target='_blank' className='text-2xl bg-white shadow-xl p-3 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-200 hover:scale-125'><span className=''><FaRegEnvelope /></span></a>
          <a href="https://wa.me/923101096610" target='_blank' className='text-2xl bg-white shadow-xl p-3 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-200 hover:scale-125'><span className=''><FiPhone  /></span></a>
        </div>
      </div>
    </div>
  )
}

export default Home
