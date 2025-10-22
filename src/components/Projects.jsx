import React from 'react'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Projects = () => {
  return (
    <div className='w-[90%] m-auto'>
       <div className="flex flex-col items-center justify-center gap-2 p-8">
        <h1 className='text-2xl md:text-4xl font-bold mt-8'>Projects</h1>
        <div className="bg-blue-500 rounded h-1 w-[10%] m-auto"></div>
      </div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-4 md:p-8 mb-10 md:mb-0 flex justify-center flex-col gap-6 shadow-xl hover:scale-105 transition-all duration-300 rounded">
          <div className="flex items-center justify-between">
            <h1 className='text-2xl font-bold'>Rains.com</h1>
            <p className='p-2 bg-blue-200 text-blue-600 rounded-full text-sm'>Website</p>
          </div>
          <p className='text-gray-600 leading-relaxed'>E-commerce platform with advanced product catalog, payment integration, and user management system.</p>
          <div className="flex gap-2 items-center">
            <span className='p-2 bg-blue-200 text-blue-600 rounded-full text-[12px]'>ReactJS</span>
            <span className='p-2 bg-blue-200 text-blue-600 rounded-full text-[12px]'>NodeJS</span>
            <span className='p-2 bg-blue-200 text-blue-600 rounded-full text-[12px]'>NextJS</span>
            <span className='p-2 bg-blue-200 text-blue-600 rounded-full text-[12px]'>ExpressJS</span>
          </div>
          <a href='https://www.rains.com/' target='_blank' className='flex items-center gap-2 bg-blue-600 p-3 rounded-full w-fit text-white hover:bg-blue-700 transition-all duration-300'><span><FaArrowUpRightFromSquare/></span>Visit</a>
        </div>
        <div className="p-4 md:p-8 mb-10 md:mb-0 flex justify-center flex-col gap-6 shadow-xl hover:scale-105 transition-all duration-300 rounded">
          <div className="flex items-center justify-between">
            <h1 className='text-2xl font-bold'>Chedmed</h1>
            <p className='p-2 bg-blue-200 text-blue-600 rounded-full text-sm'>Website</p>
          </div>
          <p className='text-gray-600'>Medical platform for healthcare professionals and patients with appointment scheduling and telemedicine features.</p>
          <div className="flex gap-2 items-center">
            <span className='p-2 bg-blue-200 text-blue-600 rounded-full text-[12px]'>ReactJS</span>
            <span className='p-2 bg-blue-200 text-blue-600 rounded-full text-[12px]'>NodeJS</span>
            <span className='p-2 bg-blue-200 text-blue-600 rounded-full text-[12px]'>NextJS</span>
            <span className='p-2 bg-blue-200 text-blue-600 rounded-full text-[12px]'>ExpressJS</span>
          </div>
          <a href='https://chedmed.ma/' target='_blank' className='flex items-center gap-2 bg-blue-600 p-3 rounded-full w-fit text-white hover:bg-blue-700 transition-all duration-300'><span><FaArrowUpRightFromSquare/></span>Visit</a>
        </div>
        <div className="p-4 md:p-8 mb-10 md:mb-0 flex justify-center flex-col gap-6 shadow-xl hover:scale-105 transition-all duration-300 rounded">
          <div className="flex items-center justify-between">
            <h1 className='text-2xl font-bold'>Spatay.com</h1>
            <p className='p-2 bg-blue-200 text-blue-600 rounded-full text-sm'>Website</p>
          </div>
          <p className='text-gray-600'>Spa and wellness booking platform with real-time availability, payment processing, and customer management.</p>
          <div className="flex gap-2 items-center">
            <span className='p-2 bg-blue-200 text-blue-600 rounded-full text-[12px]'>ReactJS</span>
            <span className='p-2 bg-blue-200 text-blue-600 rounded-full text-[12px]'>NodeJS</span>
            <span className='p-2 bg-blue-200 text-blue-600 rounded-full text-[12px]'>NextJS</span>
            <span className='p-2 bg-blue-200 text-blue-600 rounded-full text-[12px]'>ExpressJS</span>
          </div>
          <a href='https://spatay.com/' target='_blank' className='flex items-center gap-2 bg-blue-600 p-3 rounded-full w-fit text-white hover:bg-blue-700 transition-all duration-300'><span><FaArrowUpRightFromSquare/></span>Visit</a>
        </div>
        <div className="p-4 md:p-8 mb-10 md:mb-0 flex justify-center flex-col gap-6 shadow-xl hover:scale-105 transition-all duration-300 rounded">
          <div className="flex items-center justify-between">
            <h1 className='text-2xl font-bold'>Classroom</h1>
            <p className='p-2 bg-blue-200 text-blue-600 rounded-full text-sm'>Website</p>
          </div>
          <p className='text-gray-600'>Educational platform connecting students with tutors, featuring real-time video sessions and progress tracking.</p>
          <div className="flex gap-2 items-center">
            <span className='p-2 bg-blue-200 text-blue-600 rounded-full text-[12px]'>ReactJS</span>
            <span className='p-2 bg-blue-200 text-blue-600 rounded-full text-[12px]'>NodeJS</span>
            <span className='p-2 bg-blue-200 text-blue-600 rounded-full text-[12px]'>NextJS</span>
            <span className='p-2 bg-blue-200 text-blue-600 rounded-full text-[12px]'>ExpressJS</span>
          </div>
          <a href='https://classroomsidekick.io/' target='_blank' className='flex items-center gap-2 bg-blue-600 p-3 rounded-full w-fit text-white hover:bg-blue-700 transition-all duration-300'><span><FaArrowUpRightFromSquare/></span>Visit</a>
        </div>
      </div>
    </div>
  )
}

export default Projects
