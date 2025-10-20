import React from 'react'
import { FaRegCalendar } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";

const Experience = () => {
  return (
    <div className='w-[80%] m-auto'>
      <div className="flex flex-col items-center justify-center gap-2 p-8">
        <h1 className='text-4xl font-bold mt-8'>Experience</h1>
        <div className="bg-blue-500 rounded h-1 w-[15%] m-auto"></div>
      </div>
      <div className="w-[80%] m-auto p-8 mt-6 flex flex-col justify-center gap-3 shadow-xl">
        <div className="flex items-center justify-between">
          <h1 className='text-2xl font-semibold'>Team Lead/Full Stack Developer</h1>
          <p className='text-blue-400 font-semibold flex items-center gap-1'><FaRegCalendar/> January 2025 - Present</p>
        </div>
        <p className='flex items-center text-gray-500'><span className='font-semibold mr-2'>Tech Pioneers </span> <span className='flex items-center gap-1'><LuMapPin/>Onsite</span>, Peshawar, Pakistan</p>
        <p className='text-gray-500'>Led team, designed architecture, mentored juniors, delivered scalable applications using MERN stack and modern development practices.</p>
        <div className="flex gap-4">
          <span className='p-2 bg-blue-200 text-blue-600 rounded-4xl text-sm'>React</span>
          <span className='p-2 bg-blue-200 text-blue-600 rounded-4xl  text-sm'>NodeJS</span>
          <span className='p-2 bg-blue-200 text-blue-600 rounded-4xl  text-sm'>NextJS</span>
          <span className='p-2 bg-blue-200 text-blue-600 rounded-4xl  text-sm'>ExpressJS</span>
          <span className='p-2 bg-blue-200 text-blue-600 rounded-4xl  text-sm'>MongoDB</span>
        </div>
      </div>
      <div className="w-[80%] m-auto p-8 mt-12 flex flex-col justify-center gap-3 shadow-xl">
        <div className="flex items-center justify-between">
          <h1 className='text-2xl font-semibold'>Junior MERN Stack Developer </h1>
          <p className='text-blue-400 font-semibold flex items-center gap-1'><FaRegCalendar/> September 2023 - December 2024</p>
        </div>
        <p className='flex items-center text-gray-500'><span className='font-semibold mr-2'>Bright Code Lab </span> <span className='flex items-center gap-1'><LuMapPin/>Onsite</span>, Peshawar, Pakistan</p>
        <p className='text-gray-500'>At Bride Code Lab, I worked as a Junior MERN Stack Developer, where I contributed to building and maintaining web applications using MongoDB, Express.js, React.js, and Node.js.</p>
        <div className="flex gap-4">
          <span className='p-2 bg-blue-200 text-blue-600 rounded-4xl  text-sm'>React</span>
          <span className='p-2 bg-blue-200 text-blue-600 rounded-4xl  text-sm'>NodeJS</span>
          <span className='p-2 bg-blue-200 text-blue-600 rounded-4xl  text-sm'>NextJS</span>
          <span className='p-2 bg-blue-200 text-blue-600 rounded-4xl  text-sm'>ExpressJS</span>
          <span className='p-2 bg-blue-200 text-blue-600 rounded-4xl  text-sm'>MongoDB</span>
        </div>
      </div>
      <div className="w-[80%] m-auto p-8 mt-12 flex flex-col justify-center gap-3 shadow-xl">
        <div className="flex items-center justify-between">
          <h1 className='text-2xl font-semibold'>React Developer </h1>
          <p className='text-blue-400 font-semibold flex items-center gap-1'><FaRegCalendar/> August 2022 - August 2023</p>
        </div>
        <p className='flex items-center text-gray-500'><span className='font-semibold mr-2'>Bingtechs Solutions </span> <span className='flex items-center gap-1'><LuMapPin/>Onsite</span>, Peshawar, Pakistan</p>
        <p className='text-gray-500'>At Bingtechs Solutions, I worked as a React Developer, where I focused on building dynamic and user-friendly web applications.</p>
        <div className="flex gap-4">
          <span className='p-2 bg-blue-200 text-blue-600 rounded-4xl  text-sm'>React</span>
          <span className='p-2 bg-blue-200 text-blue-600 rounded-4xl  text-sm'>NodeJS</span>
          <span className='p-2 bg-blue-200 text-blue-600 rounded-4xl  text-sm'>NextJS</span>
          <span className='p-2 bg-blue-200 text-blue-600 rounded-4xl  text-sm'>ExpressJS</span>
          <span className='p-2 bg-blue-200 text-blue-600 rounded-4xl  text-sm'>MongoDB</span>
        </div>
      </div>
      <div className="w-[80%] m-auto p-8 mt-12 flex flex-col justify-center gap-3 shadow-xl">
        <div className="flex items-center justify-between">
          <h1 className='text-2xl font-semibold'>Final Year Project || Online Voting System</h1>
          <p className='text-blue-400 font-semibold flex items-center gap-1'><FaRegCalendar/> July 2024 - October 2024</p>
        </div>
        <p className='flex items-center text-gray-500 font-semibold'>Islamia College Peshawar</p>
        <p className='text-gray-500'>Vote Connect is a modern online voting platform built using the MERN (MongoDB, Express.js, React, and Node.js) stack. The primary aim of this project is to create a secure and efficient voting system that can be used by both educational institutions, such as universities and colleges, as well as for large-scale national elections..</p>
        <div className="flex gap-4">
          <span className='p-2 bg-blue-200 text-blue-600 rounded-4xl  text-sm'>React</span>
          <span className='p-2 bg-blue-200 text-blue-600 rounded-4xl  text-sm'>NodeJS</span>
          <span className='p-2 bg-blue-200 text-blue-600 rounded-4xl  text-sm'>NextJS</span>
          <span className='p-2 bg-blue-200 text-blue-600 rounded-4xl  text-sm'>ExpressJS</span>
          <span className='p-2 bg-blue-200 text-blue-600 rounded-4xl  text-sm'>MongoDB</span>
        </div>
      </div>
    </div>
  )
}

export default Experience
