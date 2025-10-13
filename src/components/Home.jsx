import React from 'react'
import { FiLinkedin, FiGithub, FiPhone   } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <div className='flex justify-center items-center w-[90%] m-auto'>
      <div className="flex items-center justify-center flex-col gap-2">
        <h1 className='text-5xl font-bold mt-28'>Muhammad Bilal</h1>
        <p className='text-gray-600'>Khyber Pakhtunkhwa Peshawar, Pakistan</p>
        <p className='font-semibold text-gray-700 text-md'>Full-Stack Developer | MERN, Next JS, Nest JS | Building Scalable Web Apps</p>
        <div className='bg-amber-300 flex items-center justify-center gap-1 text-lg font-semibold'>
          <button className='bg-gradient-to-r bg-blue-500 text-white p-3 rounded-2xl'>Download CV</button>
          <button className='bg-blue-500'>Contact Me</button>
          <button>View Projects</button>
        </div>
        <div className="">
          <a href=""><span><FiLinkedin/></span></a>
          <a href=""><span><FiGithub /></span></a>
          <a href=""><span><FaRegEnvelope /></span></a>
          <a href=""><span><FiPhone  /></span></a>
        </div>
      </div>
    </div>
  )
}

export default Home
